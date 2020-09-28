import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Destiny from "../images/destiny.jpg";

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
                <Card.Img variant="top" src={Destiny} />
                <Card.Title className="questions">
                Destiny
                </Card.Title>
                <Card.Text className="questions">
                  {" "}
                  Dive into the world of Destiny 2 to explore the mysteries of the solar system and experience responsive 
                  first-person shooter combat. Unlock powerful elemental abilities and collect unique gear to customize your 
                  Guardian's look and playstyle. Enjoy Destiny 2’s cinematic story, challenging co-op missions, and a variety 
                  of PvP modes alone or with friends. Download for free today and write your legend in the stars.
                </Card.Text>
                <Button href="https://store.steampowered.com/app/1085660/Destiny_2/">Steam</Button> <Button type="submit">Save</Button>{' '}
              </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
}

export default Saved;