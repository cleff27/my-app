import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "../../components/cards/Cards";

import axios from "axios";
import { URL } from "../../App";
const RecentPanel = () => {
  const [courses, setcourses] = useState([]);
  useEffect(() => {
    axios.get(URL + "/most-recent").then((response) => {
      setcourses(response.data);
    });
  }, []);
  return (
    <Container className="panel-container">
      <h1 className="panel-title">Recently Added</h1>

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
    </Container>
  );
};

export default RecentPanel;
