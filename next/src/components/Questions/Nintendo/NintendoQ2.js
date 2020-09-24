import React, { Component } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

//import { Link } from "react-router-dom";


class NintendoQ2 extends Component {
  render() {
    return (
      <Container fluid className="main">
        <Row>
          <Col md="auto">
            <Card
              className="questions"
              bg="dark"
              text="white"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title className="systemQuestions">
                  Solo or Squad?
                </Card.Title>
                <Card.Text className="questions">
                  <ListGroup>
                    <ListGroup.Item action href="/NintendoSoloQ3">
                      Solo
                    </ListGroup.Item>
                    <ListGroup.Item action href="/NintendoSquadQ3">
                      Squad
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NintendoQ2;
