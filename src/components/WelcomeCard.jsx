import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

//deve non diventare più una function blanda perché deve contenere la funzione che prende la data ora ecc!
function WelcomeCard() {
  return (
    <Row className="justify-content-center">
      <Col xs={12} className="mt-4 mx-0">
        <Card className="mx-0">
          <Card.Body className="py-1">
            <Card.Title className="mb-0">Welcome</Card.Title>
            <Card.Text className="my-1">Check the weather anytime anywhere!</Card.Text>

            {/* In cui Explore magari ci rimanda al carosello di sotto */}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default WelcomeCard;
