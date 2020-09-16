import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
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
            <Link to="/Questions">
              <FontAwesomeIcon icon={faPowerOff} size="10x" />
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default LandingPage;
