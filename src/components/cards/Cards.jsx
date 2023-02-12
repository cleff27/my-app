import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import "./cards.css";
import { URL } from "../../App";

function Cards(props) {
  const handleDelete = () => {
    if (
      window.confirm(
        `Are you sure you want to delete the course ${props.title}?\nOnce deleted it cannot be recovered, We suggest you to Update the course instead`
      )
    ) {
      axios
        .delete(URL + `/cards/${props.id}`)
        .then((res) => {
          props.onDelete(props.id);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <div className="card-div">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.thumbnail} alt="thumbnail" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.introduction.substring(0, 50)}...</Card.Text>
          <Link to={"/content/" + props.id}>
            <Button variant="primary">Know More</Button>
          </Link>
          {"  "}
          {props.loggedin ? (
            <Link to={`/update/${props.id}`}>
              <Button variant="warning">Update</Button>
            </Link>
          ) : null}

          {props.loggedin ? (
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          ) : null}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
