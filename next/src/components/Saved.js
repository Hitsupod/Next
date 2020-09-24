import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

function Saved() {
    return (
        <Container fluid className="main">
          <Row>
            <Col>
              <h3 className="welcome">
                Saved Games:
              </h3>
            </Col>
          </Row>
          <Row className="output">
            <Col md="auto">
              <Card
                className="questions"
                bg="dark"
                text="white"
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Title className="questions"></Card.Title>
                  <Card.Text className="questions">
                      <ListGroup>
                      </ListGroup>
                      <h3>No Results to Display</h3>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
}

export default Saved;