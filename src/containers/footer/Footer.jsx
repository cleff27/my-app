import React from "react";
import { Container } from "react-bootstrap";
import BackToTop from "../../components/back to top/BackToTop";
import "./footer.css";

const Footer = () => {
  return (
    <Container className="footer-container">
      <BackToTop />
      <div className="footer-links">
        <ul>
          <li>
            <a href="/">about</a>
          </li>
          <li>
            <a href="/">contact us</a>
          </li>
          <li>
            <a href="/">socials</a>
          </li>
          <li>
            <a href="/">paceholder 1</a>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Footer;
