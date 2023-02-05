import React from "react";
import CourseInfo from "../../containers/course-info/CourseInfo";
import Thumbnail from "../../components/thumbnail/Thumbnail";
import "./course.css";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Course = () => {
  const { id } = useParams();
  return (
    <Container className="course-container">
      <Row>
        <Col className="course-info-col">
          <CourseInfo id={id} />
        </Col>
        <Col className="thumbnail-col">
          <Thumbnail />
        </Col>
      </Row>
    </Container>
  );
};

export default Course;
