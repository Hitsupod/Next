import React, { Component } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

//import { Link } from "react-router-dom";



class Questions extends Component {
  render() {
    return (
      <Container fluid className="main">
        <Row>
          <Col md={{ span: 3, offset: 2 }}>
            <Card
              className="questionsCard"
              bg="dark"
              text="white"
              style={{ width: "65rem" }}
            >
              <Card.Body>
                <Card.Title className="systemQuestions">
                  What system do you prefer?
                </Card.Title>
                <Card.Text className="questions">
                  <ListGroup>
                    <ListGroup.Item action href="/XboxQ2">
                      Xbox
                    </ListGroup.Item>
                    <ListGroup.Item action href="/PlaystationQ2">
                      Playstation
                    </ListGroup.Item>
                    <ListGroup.Item action href="/PCQ2">
                      PC
                    </ListGroup.Item>
                    <ListGroup.Item action href="/NintendoQ2">
                      Nintendo
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
export default Questions;
