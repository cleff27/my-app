import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { URL } from "../../App";
import "./signup.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");
  const [load, setload] = useState("Sign me Up !");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setload("Signing Up...");
    axios
      .post(URL + "/register", { name, email, password })
      .then((res) => {
        console.log(res.data);
        if (res.data.msg === "User created successfully") {
          setload("Sign me Up !");
          navigate("/login");
        }
      })
      .catch((err) => {
        setload("Sign me Up !");
        const value = err.response.data.msg;
        seterror(value);
      });
  };
  console.log(error);
  return (
    <div className="signup-div">
      <div className="signup-heading">Sign Up</div>
      <form onSubmit={handleSubmit}>
        <Container className="signup-form">
          <Row>
            <Col>
              <label>Name</label>
            </Col>{" "}
            <Col>
              <input
                type="text"
                name="fname"
                placeholder="your name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <label>Email</label>
            </Col>{" "}
            <Col>
              <input
                type="email"
                name="email"
                placeholder="your email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  seterror("");
                }}
                required
              />
              <span className="error-span">{error}</span>
            </Col>
          </Row>
          <Row>
            <Col>
              <label>Password</label>
            </Col>
            <Col>
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Col>
          </Row>
          <div className="button-div">
            <button type="submit">
              {" "}
              {"  "}
              {load}
              {"   "}{" "}
            </button>
          </div>
        </Container>
      </form>
    </div>
  );
};

export default SignUp;
