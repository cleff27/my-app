import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import Categories from "../categories/Categories";
import data from "../../testData";
import LogoutButton from "../Login/Logout";
import "./navbar.css";
import { Button } from "react-bootstrap";

function DisNavbar(props) {
  const [isDropdownVisible, setDropdownVisibility] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownVisibility = () => {
    setDropdownVisibility(!isDropdownVisible);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target))
      setDropdownVisibility(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container className="navbar-container">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mb-auto">
            <div className="nav-item">
              <Link to="/">Home</Link>
            </div>
            <div className="nav-item" ref={dropdownRef}>
              <Link to="#" onClick={handleDropdownVisibility}>
                Categories
              </Link>
              {isDropdownVisible && (
                <Categories
                  setDropdownVisibility={setDropdownVisibility}
                  categories={data}
                />
              )}
            </div>

            <div className="nav-item">
              <Link to="/create">Create</Link>
            </div>
            {props.isLoggedIn && (
              <div className="nav-item">
                <Link to="/mycourses">My Courses</Link>
              </div>
            )}

            <div className="nav-item">
              <Link to="#pricing">Contact us</Link>
            </div>
          </Nav>
          <Nav className="ms-auto">
            {props.isLoggedIn && (
              <span className="nav-item">Hi {props.name}</span>
            )}
            {!props.isLoggedIn && (
              <div className="nav-buttons">
                <Button variant="warning" className="nav-item">
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </div>
            )}
            {!props.isLoggedIn && (
              <div className="nav-buttons">
                <Button variant="warning" className="nav-item">
                  <Link to="/login">Log In</Link>
                </Button>
              </div>
            )}
            {props.isLoggedIn && (
              <div className="nav-buttons">
                <LogoutButton setIsLoggedIn={props.setIsLoggedIn} />
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default DisNavbar;
