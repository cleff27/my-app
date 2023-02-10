import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./task_input.css";

const TaskInput = (props) => {
  return (
    <div>
      {props.inputFields.map((inputField, index) => (
        <Row key={index}>
          <Col>
            <label> Task {index + 1}</label>
          </Col>
          <Col className="task-col">
            <textarea
              cols="35"
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
      ))}
      <div className="button-div">
        <button type="button" onClick={props.handleAddInputField}>
          Add More Tasks
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
