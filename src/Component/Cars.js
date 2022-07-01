import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
function Cars(props) {
  const alertfunction = (x, y) => {
    alert(`You have to pay
       ${x} to buy ${y} ! `);
  };
  return (
    <div className="cardform">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.e.imgsrc} height="400px" />
        <Card.Body>
          <Card.Title>{props.e.name}</Card.Title>
          <Card.Text>price.{props.e.price}</Card.Text>
          <Button
            variant="primary"
            onClick={() => alertfunction(props.e.price, props.e.name)}
          >
            {" "}
            buy
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cars;
