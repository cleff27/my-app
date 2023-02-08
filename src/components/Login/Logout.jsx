import React, { useState } from "react";
import axios from "axios";
import { URL } from "../../App";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const LogoutButton = (props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    setLoading(true);
    axios
      .post(URL + "/logout")
      .then(() => {
        console.log("logged out");
        props.setIsLoggedIn(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Button variant="warning" onClick={handleLogout} disabled={loading}>
      {loading ? "Logging out..." : "Logout"}
    </Button>
  );
};

export default LogoutButton;
