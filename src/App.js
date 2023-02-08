import React, { useEffect, useState } from "react";
import Banner from "./components/banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./containers/footer/Footer";
import HomePage from "./pages/homepage/HomePage";
import SignUp from "./containers/sign-in/SignUp";
import { Route, Routes } from "react-router-dom";
import InputPage from "./pages/create course/create";
import Course from "./pages/course/Course";
import Login from "./pages/login/Login";
import axios from "axios";
import "./app.css";
import ErrorPage from "./pages/errorPage/ErrorPage";
import SearchResult from "./pages/searchResult/SearchResult";
import MyCourses from "./pages/myCourses/MyCourses";
//import "bootstrap/dist/css/bootstrap.min.css";
export const URL = process.env.REACT_APP_BASE_URL;
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    checkLoginStatus();
  }, []);
  const checkLoginStatus = () => {
    axios
      .get(URL + "/check-login")
      .then((res) => {
        setIsLoggedIn(res.data.isLoggedIn);
        setUser(res.data.user);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  console.log(isLoggedIn);
  return (
    <div>
      <Banner />
      <Navbar
        isLoggedIn={isLoggedIn}
        name={user ? user.name : ""}
        setIsLoggedIn={setIsLoggedIn}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/create"
          element={
            isLoggedIn ? (
              <InputPage
                isLoggedIn={isLoggedIn}
                userid={user ? user._id : ""}
              />
            ) : (
              <Login
                text="Login to create"
                setIsLoggedIn={setIsLoggedIn}
                setUser={setUser}
              />
            )
          }
        />
        <Route
          path="/mycourses"
          element={
            isLoggedIn ? (
              <MyCourses id={user ? user._id : ""} />
            ) : (
              <Login
                text="Login to view your courses"
                setIsLoggedIn={setIsLoggedIn}
                setUser={setUser}
              />
            )
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/content/:id" element={<Course />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />}
        />
        <Route path="/category/:id" element={<SearchResult />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
