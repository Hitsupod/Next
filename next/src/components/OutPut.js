import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
//import { Link } from "react-router-dom";
class LandingPage extends Component {
  render() {
    return (
      <Container fluid className="main">
        <Row>
          <Col>
            <h3 className="welcome">
              Heres a list of video games we recomend based on your choices
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
                <Card.Title className="questions">game 1</Card.Title>
                <Card.Text className="questions"></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card
              className="questions"
              bg="dark"
              text="white"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title className="questions">game 1</Card.Title>
                <Card.Text className="questions"></Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md="auto">
            <Card
              className="questions"
              bg="dark"
              text="white"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title className="questions">game 2</Card.Title>
                <Card.Text className="questions"></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card
              className="questions"
              bg="dark"
              text="white"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title className="questions">game 1</Card.Title>
                <Card.Text className="questions"></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card
              className="questions"
              bg="dark"
              text="white"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title className="questions">game 2</Card.Title>
                <Card.Text className="questions"></Card.Text>
              </Card.Body>
            </Card>
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
                <Card.Title className="questions">game 1</Card.Title>
                <Card.Text className="questions"></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card
              className="questions"
              bg="dark"
              text="white"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title className="questions">game 1</Card.Title>
                <Card.Text className="questions"></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card
              className="questions"
              bg="dark"
              text="white"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title className="questions">game 2</Card.Title>
                <Card.Text className="questions"></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card
              className="questions"
              bg="dark"
              text="white"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title className="questions">game 1</Card.Title>
                <Card.Text className="questions"></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card
              className="questions"
              bg="dark"
              text="white"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title className="questions">game 2</Card.Title>
                <Card.Text className="questions"></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default LandingPage;
