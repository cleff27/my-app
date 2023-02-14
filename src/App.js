import React, { useEffect, useState, createContext } from "react";
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
import UpdatePage from "./pages/update course/UpdateCourse";
//import "bootstrap/dist/css/bootstrap.min.css";
export const URL = process.env.REACT_APP_BASE_URL;
export const UserContext = createContext();
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [likedCourses, setLikedCourses] = useState([]);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = () => {
    axios
      .get(URL + "/check-login")
      .then((res) => {
        setIsLoggedIn(res.data.isLoggedIn);
        setUser(res.data.user);
        res.data.user && setLikedCourses(res.data.user.liked);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  console.log(isLoggedIn);
  return (
    <div className="super-div">
      <Banner />
      <UserContext.Provider value={{ user: user }}>
        <Navbar
          isLoggedIn={isLoggedIn}
          name={user ? user.name : ""}
          setIsLoggedIn={setIsLoggedIn}
        />
        <div className="middle-div">
          {
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
                path="/update/:id"
                element={
                  isLoggedIn ? (
                    <UpdatePage />
                  ) : (
                    <Login
                      text="Login to Update"
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
              <Route
                path="/content/:id"
                element={
                  <Course
                    isLoggedIn={isLoggedIn}
                    likedCourses={user ? likedCourses : []}
                    setLikedCourses={setLikedCourses}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
                }
              />
              <Route path="/category/:id" element={<SearchResult />} />
              <Route path="/*" element={<ErrorPage />} />
            </Routes>
          }
        </div>
      </UserContext.Provider>
      <Footer />
    </div>
  );
};

export default App;
