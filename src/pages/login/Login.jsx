import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { URL } from "../../App";
import "./login.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");
  const [load, setload] = useState("Log Me In !");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setload("Logging In ...");
    e.preventDefault();
    axios
      .post(URL + "/login", { email, password })
      .then((res) => {
        setload("Log Me In !");
        if (res.data.isLoggedIn === true) {
          props.setIsLoggedIn(true);
          props.setUser(res.data.user);
          navigate("/");
        }
      })
      .catch((err) => {
        setload("Log Me In !");
        console.log(err);
        const value = err.response.data.error;
        seterror(value);
      });
  };

  return (
    <div className="signup-div">
      <div className="create-prompt">
        <h1>{props.text}</h1>
      </div>
      <div className="signup-heading">Log In</div>
      <form onSubmit={handleSubmit}>
        <Container className="signup-form">
          <Row>
            <Col>
              <label>Email</label>
            </Col>{" "}
            <Col>
              <input
                type="email"
                name="email"
                placeholder="your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
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
          <div className="error-box">
            <span className="error-div">{error}</span>
          </div>
        </Container>
      </form>
    </div>
  );
};
export default Login;
