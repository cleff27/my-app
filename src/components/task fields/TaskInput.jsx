import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./task_input.css";

const TaskInput = (props) => {
  return (
    <div>
      <Container>
        {props.inputFields.map((inputField, index) => (
          <div key={index}>
            <Row>
              <Col>
                <label> Task {index + 1}</label>
              </Col>
              <Col className="task-col">
                <textarea
                  cols="50"
                  rows="4"
                  type="text"
                  value={inputField.value}
                  onChange={(event) => props.handleInputChange(index, event)}
                />
                <button
                  className="delete-button"
                  type="button"
                  onClick={() => props.handleDeleteInputField(index)}
                >
                  Delete
                </button>
              </Col>
            </Row>
          </div>
        ))}
        <div className="button-div">
          <button type="button" onClick={props.handleAddInputField}>
            Add More Tasks
          </button>
        </div>
      </Container>
    </div>
  );
};

export default TaskInput;
