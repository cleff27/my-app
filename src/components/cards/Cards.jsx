import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./cards.css";

function Cards(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Link to="/content/63dea4c15fa41a36956d5522">
          <Button variant="primary">Know more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Cards;
