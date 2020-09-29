import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Cyber from "../../../images/cyber.jpg";
import DarkSouls from "../../../images/Darksouls.jpg";
import Outer from "../../../images/outer.jpg";

class PCSoloRPGOutPut extends Component {
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
          <Col md="4">
            <Card
              className="questions"
              bg="dark"
              text="white"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Img variant="top" src={Cyber} />
                <Card.Title className="questions">Cyberpunk 2077</Card.Title>
                <Card.Text className="questions">
                  {" "}
                  Cyberpunk 2077 is an upcoming role-playing video game
                  developed and published by CD Projekt. It is scheduled to be
                  released for PlayStation 4, Windows, and Xbox One in November
                  2020, Stadia by the end of the year, and PlayStation 5 and
                  Xbox Series X/S in 2021. Adapted from the Cyberpunk franchise,
                  the story takes place in dystopian Night City, an open world
                  with six distinct regions. Players assume the first-person
                  perspective of a customisable mercenary known as V, who can
                  acquire skills in hacking and machinery, an arsenal of ranged
                  weapons, and options for melee combat.
                </Card.Text>
                <Button href="https://www.cyberpunk.net/us/en/">
                  Pre Order
                </Button>{" "}
                <Button type="submit">Save</Button>{" "}
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
                <Card.Img variant="top" src={DarkSouls} />
                <Card.Title className="questions">Dark Souls</Card.Title>
                <Card.Text className="questions">
                  Dark Souls is a 2011 action role-playing game developed by
                  FromSoftware and published by Namco Bandai Games. A spiritual
                  successor to FromSoftware's Demon's Souls, the game is the
                  second instalment in the Souls series. Dark Souls takes place
                  in the fictional kingdom of Lordran, where players assume the
                  role of a cursed undead character who begins a pilgrimage to
                  discover the fate of their kind.
                </Card.Text>
                <Button href="https://store.steampowered.com/app/570940/DARK_SOULS_REMASTERED/">
                  Steam
                </Button>{" "}
                <Button type="submit">Save</Button>{" "}
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
                <Card.Img variant="top" src={Outer} />
                <Card.Title className="questions">The Outer Worlds</Card.Title>
                <Card.Text className="questions">
                  Lost in transit while on a colonist ship bound for the
                  furthest edge of the galaxy, you awake decades later than you
                  expected only to find yourself in the midst of a deep
                  conspiracy threatening to destroy the Halcyon colony. As you
                  explore the furthest reaches of space and encounter a host of
                  factions all vying for power, who you decide to become will
                  determine the fate of everyone in Halcyon. In the corporate
                  equation for the colony, you are the unplanned variable.
                </Card.Text>
                <Button href="https://outerworlds.obsidian.net/en">
                  Download
                </Button>{" "}
                <Button type="submit">Save</Button>{" "}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default PCSoloRPGOutPut;
