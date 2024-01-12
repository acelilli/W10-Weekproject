import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

const MyFooter = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center mt-1 bg-light footertext">
        <Row className="mt-3">
          <Col md={4}>
            <div className="mb-2">
              <Facebook size="0.8rem" style={{ marginRight: "2vmin" }} />
              <Instagram size="0.8rem" style={{ marginRight: "2vmin" }} />
              <Twitter size="0.8rem" style={{ marginRight: "2vmin" }} />
              <Youtube size="0.8rem" />
            </div>
            <p>
              <a href="#" alt="footer link" className="text-secondary">
                Contact Us
              </a>
            </p>
            <p>
              <a href="#" alt="footer link" className="text-secondary">
                Legal Notices
              </a>
            </p>
          </Col>

          {/* Terza Colonna */}
          <Col md={4}>
            <p>
              <a href="#" alt="footer link" className="text-secondary">
                Jobs
              </a>
            </p>
            <p>
              <a href="#" alt="footer link" className="text-secondary">
                Cookie Preferences
              </a>
            </p>
          </Col>

          {/* Quarta Colonna */}
          <Col md={4}>
            <p>
              <a href="#" alt="footer link" className="text-secondary">
                Terms of Use
              </a>
            </p>
            <p>
              <a href="#" alt="footer link" className="text-secondary">
                FAQ
              </a>
            </p>
          </Col>
        </Row>
        {/* Row del Copyright */}
        <div className="pb-2 mt-1">
          <p>© 2024 WTWheather, by Ace Alessandrini.</p>
        </div>
      </Row>
    </Container>
  );
};

export default MyFooter;
