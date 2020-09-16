import React, { Component } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
//import { Link } from "react-router-dom";
class Questions extends Component {
  render() {
    return (
      <Container fluid className="main">
        <Row>
          <Col>
            <h3 className="questions">
              Welcome to NEXT press the button to start
            </h3>
          </Col>
          <Col md="auto">
            <Card
              className="questions"
              bg="dark"
              text="white"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title className="questions">
                  What system do you prefer
                </Card.Title>
                <Card.Text className="questions">
                  <ListGroup>
                    <ListGroup.Item action href="/OutPut">
                      Link 1
                    </ListGroup.Item>
                    <ListGroup.Item action href="/OutPut">
                      Link 2
                    </ListGroup.Item>
                    <ListGroup.Item action href="/OutPut">
                      link3
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
