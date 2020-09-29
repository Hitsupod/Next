import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import MHW from "../../../images/MHW.jpg";
import WOW from "../../../images/wow.jpg";
import Mine from "../../../images/minecraft.jpg";

class PCSquadRPGOutPut extends Component {
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
                <Card.Img variant="top" src={MHW} />
                <Card.Title className="questions">
                  Monster Hunter World
                </Card.Title>
                <Card.Text className="questions">
                  {" "}
                  Welcome to a new world! Take on the role of a hunter and slay
                  ferocious monsters in a living, breathing ecosystem where you
                  can use the landscape and its diverse inhabitants to get the
                  upper hand. Hunt alone or in co-op with up to three other
                  players, and use materials collected from fallen foes to craft
                  new gear and take on even bigger, badder beasts!
                </Card.Text>
                <Button href="https://store.steampowered.com/app/582010/Monster_Hunter_World/">
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
                <Card.Img variant="top" src={WOW} />
                <Card.Title className="questions">World of Warcraft</Card.Title>
                <Card.Text className="questions">
                  World of Warcraft (WoW) is a massively multiplayer online
                  role-playing game (MMORPG) released in 2004 by Blizzard
                  Entertainment. It is the fourth released game set in the
                  Warcraft fantasy universe.
                </Card.Text>
                <Button href="https://worldofwarcraft.com/en-us/">
                  Download
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
                <Card.Img variant="top" src={Mine} />
                <Card.Title className="questions">Minecraft</Card.Title>
                <Card.Text className="questions">
                  In Minecraft, players explore a blocky, procedurally-generated
                  3D world with infinite terrain, and may discover and extract
                  raw materials, craft tools and items, and build structures or
                  earthworks. Depending on game mode, players can fight
                  computer-controlled "mobs", as well as cooperate with or
                  compete against other players in the same world. Game modes
                  include a survival mode, in which players must acquire
                  resources to build the world and maintain health, and a
                  creative mode, where players have unlimited resources. Players
                  can modify the game to create new gameplay mechanics, items,
                  and assets.
                </Card.Text>
                <Button href="https://www.minecraft.net/en-us">Download</Button>{" "}
                <Button type="submit">Save</Button>{" "}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default PCSquadRPGOutPut;
