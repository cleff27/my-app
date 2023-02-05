import React from "react";
import Banner from "./components/banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./containers/footer/Footer";
import HomePage from "./pages/homepage/HomePage";
import SignUp from "./containers/sign-in/SignUp";
import { Route, Routes } from "react-router-dom";
import InputPage from "./pages/create course/create";
import Course from "./pages/course/Course";
import "./app.css";

//import "bootstrap/dist/css/bootstrap.min.css";
export const URL = process.env.REACT_APP_BASE_URL;
const App = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<InputPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/content/:id" element={<Course />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
