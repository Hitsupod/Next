import React, { Component } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

//import { Link } from "react-router-dom";

// import QuizChoices from "../api/QuizChoices";
// import QuestionOpt from "./QuestionOpt";

class PCSoloQ3 extends Component {
  render() {
    return (
      <Container fluid className="main">
        <Row>
          <Col md={{ span: 3, offset: 2 }}>
            <Card
              className="questions"
              bg="dark"
              text="white"
              style={{ width: "65rem" }}
            >
              <Card.Body>
                <Card.Title className="systemQuestions">
                  Choose a Genre?
                </Card.Title>
                <Card.Text className="questions">
                  <ListGroup>
                    <ListGroup.Item action href="/PCSoloFPSOutPut">
                      FPS
                    </ListGroup.Item>
                    <ListGroup.Item action href="/PCSoloRPGOutPut">
                      RPG
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

export default PCSoloQ3;
