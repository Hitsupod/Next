import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import re2 from "../images/re2.png";
import rdr from "../images/rdr2.png";
import mgs from "../images/mgs.png";
import witcher from "../images/witcher3.png";
import apex from "../images/apex.png";
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
                <Card.Img variant="top" src={re2} />
                <Card.Title className="questions">
                  Resident Evil 2(remake)
                </Card.Title>
                <Card.Text className="questions">
                  {" "}
                  A remake of the classic resident evil 2 with modernised
                  graphics and new mechanics that is taking the speed running
                  community by storm.
                </Card.Text>
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
                <Card.Img variant="top" src={rdr} />
                <Card.Title className="questions">
                  Red Dead Redemption2
                </Card.Title>
                <Card.Text className="questions">
                  Set in a fictional recreation of the American Old West in
                  1899, Red Dead Redemption 2 focuses on the life of Arthur
                  Morgan and his position in the notorious Van der Linde gang.
                  The game follows the gang's decline as they are pursued by
                  lawmen, fellow gangs and Pinkerton agents.
                </Card.Text>
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
                <Card.Img variant="top" src={witcher} />
                <Card.Title className="questions">The Witcher3</Card.Title>
                <Card.Text className="questions">
                  The Witcher® 3: Wild Hunt is a story-driven, next-generation
                  open world role-playing game, set in a visually stunning
                  fantasy universe, full of meaningful choices and impactful
                  consequences. You play as Geralt of Rivia, a monster hunter
                  tasked with finding a child from an ancient prophecy.
                </Card.Text>
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
                <Card.Img variant="top" src={mgs} />
                <Card.Title className="questions">
                  Metal Gear Solid 5: The Phantom Pain
                </Card.Title>
                <Card.Text className="questions">
                  Gameplay. Metal Gear Solid V: The Phantom Pain is a stealth
                  game in which players take the role of Punished "Venom" Snake
                  from a third-person perspective in an open world.
                </Card.Text>
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
                <Card.Img variant="top" src={apex} />
                <Card.Title className="questions">Apex Legends</Card.Title>
                <Card.Text className="questions">
                  Apex Legends is an online multiplayer battle royale game
                  featuring squads of three players using pre-made characters
                  (called "Legends"), similar to those of hero shooters.
                  Alternate modes have been introduced allowing for single and
                  for two-player squads since the game's release.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default LandingPage;
