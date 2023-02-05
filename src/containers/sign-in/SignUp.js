import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./signup.css";

const SignUp = () => {
  return (
    <div className="signup-div">
      <div className="signup-heading">Sign in</div>
      <form>
        <Container className="signup-form">
          <Row>
            <Col>
              <label>Name</label>
            </Col>{" "}
            <Col>
              <input type="text" name="fname" placeholder="your name" />
            </Col>
          </Row>
          <Row>
            <Col>
              <label>Email</label>
            </Col>{" "}
            <Col>
              <input type="email" name="email" placeholder="your email" />
            </Col>
          </Row>
          <Row>
            <Col>
              <label>Password</label>
            </Col>
            <Col>
              <input type="password" name="password" placeholder="password" />
            </Col>
          </Row>
          <div className="button-div">
            <button>
              {" "}
              {"  "}Sign me up !{"   "}{" "}
            </button>
          </div>
        </Container>
      </form>
    </div>
  );
};

export default SignUp;
