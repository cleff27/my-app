import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import "./navbar.css";

function DisNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container className="navbar-container">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mb-auto">
            <div className="nav-item">
              <Link to="/">Home</Link>
            </div>
            <div className="nav-item">
              <Link to="#pricing">Categories</Link>
            </div>
            <div className="nav-item">
              <Link to="/create">Create</Link>
            </div>
            <div className="nav-item">
              <Link to="#pricing">Contact us</Link>
            </div>
            <div className="nav-item">
              <Link to="/signup">Sign in</Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default DisNavbar;
