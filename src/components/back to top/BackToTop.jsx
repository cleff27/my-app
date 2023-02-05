import React from "react";
import { Button } from "react-bootstrap";
import "./back_to_top.css";

const BackToTop = () => {
  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="back-to-top">
      <Button type="dark" variant="dark" onClick={handleClick}>
        Back to the top of page
      </Button>
    </div>
  );
};

export default BackToTop;
