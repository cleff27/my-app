import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./cards.css";

function Cards(props) {
  return (
    <div className="card-div">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.thumbnail} alt="thumbnail" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.introduction.substring(0, 50)}</Card.Text>
          <Link to={"/content/" + props._id}>
            <Button variant="primary">Know more</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
