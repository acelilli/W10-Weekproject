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

//  <Row className="justify-content-center">
//         <Col lg={8}>
//           <p>City info</p>
//            {searchData.length > 0 && <CardWeather latandlong={searchData[0]} />} */}
//           </Col>
//         </Row>
