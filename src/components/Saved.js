import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Fall from "../images/fallguys.png";
import Marvel from "../images/Marvel.png";
import GTA from "../images/gta.png";

function Saved() {
  return (
    <Container fluid className="main">
      <Row>
        <Col>
          <h3 className="welcome">Saved Games:</h3>
        </Col>
      </Row>
      <Row className="output">
        <Col md="4">
          <Card
            className="questions"
            bg="dark"
            text="white"
            style={{ width: "18rem" }}
          >
            <Card.Body>
              <Card.Img variant="top" src={Marvel} />
              <Card.Title className="questions">Marvel</Card.Title>
              <Card.Text className="questions">
                {" "}
                Marvel’s Avengers is an epic, third-person, action-adventure
                game that combines an original, cinematic story with
                single-player and co-operative gameplay.
              </Card.Text>
              <Button class="remove" type="delete">
                Delete
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col md="4">
          <Card
            className="questions"
            bg="dark"
            text="white"
            style={{ width: "18rem" }}
          >
            <Card.Body>
              <Card.Img variant="top" src={GTA} />
              <Card.Title className="questions">
                Grand Theft Auto Online
              </Card.Title>
              <Card.Text className="questions">
                Grand Theft Auto V also comes with Grand Theft Auto Online, the
                dynamic and ever-evolving online universe for up to 30 players,
                and includes all existing gameplay upgrades and content released
                since the launch of Grand Theft Auto Online. Rise through the
                ranks to become a CEO of your own criminal empire by trading
                contraband or form a Motorcycle Club and rule the streets. Pull
                off daring co-operative Heists, enter adrenaline-fueled Stunt
                Races, compete in unique Adversary Modes or create your own
                content to play and share with the entire GTA community.
              </Card.Text>
              <Button class="remove" type="submit">
                Delete
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>

        <Col md="4">
          <Card
            className="questions"
            bg="dark"
            text="white"
            style={{ width: "18rem" }}
          >
            <Card.Body>
              <Card.Img variant="top" src={Fall} />
              <Card.Title className="questions">Fall Guys</Card.Title>
              <Card.Text className="questions">
                Fall Guys is a massively multiplayer party game with up to 60
                players online in a free-for-all struggle through round after
                round of escalating chaos until one victor remains!
              </Card.Text>
              <Button class="remove" type="submit">
                Delete
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Saved;
