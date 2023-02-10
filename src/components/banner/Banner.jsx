import { Container } from "react-bootstrap";
import "./banner.css";
import React from "react";
import { useLocation } from "react-router-dom";

function Banner() {
  const location = useLocation();
  return location.pathname === "/" ? (
    <Container className="banner-container">
      <span>A Day as...</span>
    </Container>
  ) : null;
}
export default Banner;
