import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "../../components/cards/Cards";
import "./panels.css";
import axios from "axios";
import { URL } from "../../App";
import LoadingPage from "../../pages/LoadingPage/LoadingPage";
const LikedPanel = () => {
  const [courses, setcourses] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    axios.get(URL + "/mostliked").then((response) => {
      setcourses(response.data);
      setloading(false);
    });
  }, []);
  return (
    <Container className="panel-container">
      <h1 className="panel-title">Popular Courses</h1>

      {loading ? (
        <LoadingPage />
      ) : (
        <Row>
          {courses.map((card) => {
            return (
              <Col>
                <Cards
                  key={card._id}
                  id={card._id}
                  title={card.title}
                  thumbnail={card.vidinfo ? card.vidinfo.thumbnail_url : null}
                  introduction={card.introduction}
                />
              </Col>
            );
          })}
        </Row>
      )}
    </Container>
  );
};

export default LikedPanel;
