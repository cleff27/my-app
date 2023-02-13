import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "../../components/cards/Cards";

import axios from "axios";
import { URL } from "../../App";
import LoadingPage from "../../pages/LoadingPage/LoadingPage";
const RecentPanel = () => {
  const [loading, setloading] = useState(false);
  const [courses, setcourses] = useState([]);
  useEffect(() => {
    setloading(true);
    axios.get(URL + "/mostrecent").then((response) => {
      setcourses(response.data);
      setloading(false);
    });
  }, []);
  return (
    <Container className="panel-container">
      <h1 className="panel-title">Recently Added</h1>

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

export default RecentPanel;
