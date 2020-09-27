//import React from "react";
import API from "../utils/API";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

function Saved() {


  return (
    <Container fluid className="main">
      <Row>
        <Col>
          <h3 className="welcome">Saved Games:</h3>
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
                <ListGroup>{games.title}</ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Saved;
