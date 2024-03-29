import Form from "react-bootstrap/Form";
import { Row, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";

function SearchCity({ searchQuery, setSearchQuery }) {
  return (
    <>
      <Row>
        <Col xs={12} className="mt-4 ">
          <Form.Group>
            <Form.Control
              className=" fs-5  "
              type="search"
              placeholder="Search city now..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
    </>
  );
}
export default SearchCity;
