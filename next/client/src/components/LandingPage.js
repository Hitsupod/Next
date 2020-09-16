import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
class LandingPage extends Component {
  render() {
    return (
      <Container fluid className="main">
        <Row>
          <Col>
            <h3 className="welcome">
              Welcome to NEXT press the button to start
            </h3>
          </Col>
        </Row>
        <Row>
          <Col className="power">
            <Button variant="dark">
              <FontAwesomeIcon icon={faPowerOff} size="10x" />
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default LandingPage;
