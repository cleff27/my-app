import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./about_panel.css";
import logo from "../../images/about-panel.png";
const About_panel = () => {
  return (
    <Container className="about-panel-container">
      <Row>
        <Col>
          <span>
            <img src={logo} alt="some pictue" />
          </span>
        </Col>
        <Col>
          <div className="about-panel-text">
            “Our motive is to let the young minds know what roads they can take
            to pave their future”
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About_panel;
