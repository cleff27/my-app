import React, { useState } from "react";
import axios from "axios";
import { URL } from "../../App";
import TaskInput from "../../components/task fields/TaskInput";
import "./create.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import CategoryInput from "../../components/category-input/CategoryInput";
import { useNavigate } from "react-router-dom";
const InputPage = (props) => {
  const navigate = useNavigate();
  const [vidData, setVidData] = useState({});
  const [detail, setDetails] = useState({
    title: "",
    introduction: "",
    task: [],
    pros: "",
    category: "",
    beginner: "",
    intermediate: "",
    advance: "",
    link: "",
    vidinfo: {},
    userid: props.userid,
    liked: 0,
  });
  const [inputFields, setInputFields] = useState([{ value: "" }]);
  const [error, setError] = useState(null);

  const handleAddInputField = () => {
    setInputFields([...inputFields, { value: "" }]);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index].value = event.target.value;
    setInputFields(values);
    setDetails((prev) => {
      return {
        ...prev,
        task: inputFields,
      };
    });
  };
  const handleDeleteInputField = (index) => {
    setInputFields(inputFields.filter((_, i) => i !== index));
  };
  const handleDetailChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    setDetails((prev) => {
      return {
        ...prev,
        category: value,
      };
    });
  };
  const getVidInfo = () => {
    axios
      .get("https://www.youtube.com/oembed?url=" + detail.link + "&format=json")
      .then((response) => {
        setVidData(response.data);
        console.log(response.data);
        setDetails((prev) => {
          return {
            ...prev,
            vidinfo: response.data,
          };
        });
      })
      .catch((error) => {
        console.error(error);
        setError("Unable to get Video details");
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(URL + "/create", detail)
      .then((response) => {
        console.log(response.data);
        setError(response.data.message);
        setTimeout(() => {
          navigate("/mycourses");
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
        setError(error.response.data.error);
      });
  };

  return (
    <div className="create-div">
      <Container>
        <form onSubmit={handleSubmit}>
          <h1>Summary</h1>
          <Row>
            <Col>
              <label>Title:</label>
            </Col>
            <Col>
              <input
                name="title"
                type="text"
                value={detail.title}
                onChange={handleDetailChange}
                required
              />
            </Col>
          </Row>

          <br />
          <br />
          <Row>
            <Col>
              <label>Introduction:</label>
            </Col>
            <Col>
              <textarea
                cols="50"
                rows="4"
                name="introduction"
                type="text"
                value={detail.introduction}
                onChange={handleDetailChange}
                required
              />
            </Col>
          </Row>
          <br />
          <br />
          <TaskInput
            handleAddInputField={handleAddInputField}
            handleInputChange={handleInputChange}
            inputFields={inputFields}
            handleDeleteInputField={handleDeleteInputField}
          />

          <Row>
            <Col>
              <label>Pros and Cons:</label>
            </Col>
            <Col>
              <textarea
                cols="50"
                rows="4"
                name="pros"
                type="text"
                value={detail.pros}
                onChange={handleDetailChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <label>Category:</label>
            </Col>
            <Col>
              <CategoryInput
                selectedOption={selectedOption}
                handleOptionChange={handleOptionChange}
                required
              />
            </Col>
          </Row>
          <br />
          <h1>Roadmap</h1>
          <Row>
            <Col>
              <label>Beginner:</label>
            </Col>
            <Col>
              <textarea
                cols="50"
                rows="4"
                name="beginner"
                type="text"
                value={detail.beginner}
                onChange={handleDetailChange}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <label>Intermediate:</label>
            </Col>
            <Col>
              <textarea
                cols="50"
                rows="4"
                name="intermediate"
                type="text"
                value={detail.intermediate}
                onChange={handleDetailChange}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <label>Advance:</label>
            </Col>
            <Col>
              <textarea
                cols="50"
                rows="4"
                name="advance"
                type="text"
                value={detail.advance}
                onChange={handleDetailChange}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <label>Youtube Link:</label>
            </Col>
            <Col>
              <input
                name="link"
                type="text"
                value={detail.link}
                onChange={handleDetailChange}
                required
              />
              <Button onClick={getVidInfo}>Upload</Button>
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <div>
                <img
                  className="thumbnail-img"
                  src={vidData.thumbnail_url}
                  alt=""
                ></img>
              </div>
            </Col>
          </Row>
          <br />
          <button type="submit">Submit</button>
          <br />
          <span>{error}</span>
        </form>
      </Container>
    </div>
  );
};

export default InputPage;
