import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "../../components/cards/Cards";
import "./panels.css";

const Panels = () => {
  return (
    <Container className="panel-container">
      <h1 className="panel-title">Current panel</h1>

      <Row>
        <Col>
          <Cards introduction="card 1 just testing it nout" title=" cards" />
        </Col>
        <Col>
          <Cards introduction="card 1 just testing it nout" title=" cards" />
        </Col>
        <Col>
          <Cards introduction="card 1 just testing it out" title=" cards" />
        </Col>
      </Row>
    </Container>
  );
};

export default Panels;
