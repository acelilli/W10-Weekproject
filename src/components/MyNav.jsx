import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import WtwLogo from "../wtwlogo.png";
import { Row, Form, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Search, PersonFill } from "react-bootstrap-icons";

function MyNav({ submit, search, setSearch }) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" data-bs-theme="light" className="align-content-center px-3">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={WtwLogo} alt="logo wtweather" style={{ height: "6vmin" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* Elementi Navbar */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/tv-shows">About</Nav.Link>
            {/* Dropdown*/}
            <NavDropdown title="Sort By" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Actions</NavDropdown.Item>
              <NavDropdown.Item href="#">Search Weather Details</NavDropdown.Item>
              <NavDropdown.Item href="#">Current Weather</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">News</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form
            className="me-4 ms-2"
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
          >
            <Row>
              <Col xs={12}>
                <div className="justify-content-center">
                  <Link to="#search-city">
                    <Search color="#3578b3" size="1.5rem" style={{ marginRight: "3vmin" }} className="text-bold" />
                  </Link>
                  <Link to="#Account">
                    <Button className="btn btn-info">
                      <PersonFill color="white" size="1.5rem" />
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
