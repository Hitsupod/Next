import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Wolf from "../../../images/wolf.jpg";
import Exo from "../../../images/exomecha.jpg";
import metro from "../../../images/Metro.jpg";
//import { Link } from "react-router-dom";
class xboxSoloFPSOutPut extends Component {
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
                <Card.Img variant="top" src={metro} />
                <Card.Title className="questions">Metro 2033</Card.Title>
                <Card.Text className="questions">
                  {" "}
                  Metro 2033 Redux is a top-class first-person shooter/survival
                  horror game, a breathless experience.Artyom's desperate,
                  haunting voyage through the irradiated remains of Moscow is
                  every bit as engaging today as it was when it first released
                  back in 2010, and this Redux version benefits massively from
                  overhauled AI, gameplay mechanics and visuals. In terms of
                  first-person shooters or survival horror games on Nintendo's
                  console, this is one of the very best.
                </Card.Text>
                <Button href="https://www.amazon.com/Metro-Redux-Xbox-One-Deep-Silver/dp/B00KLRX0XQ/ref=sr_1_1?crid=3GGYD4D4SOFSW&dchild=1&keywords=metro+2033+xbox+one&qid=1601344778&sprefix=metro+2033+xbo%2Caps%2C176&sr=8-1">
                  Amazon
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
                <Card.Img variant="top" src={Wolf} />
                <Card.Title className="questions">
                  Wolfenstein II: The New Colossus
                </Card.Title>
                <Card.Text className="questions">
                  Wolfenstein II: The New Colossus is the best narrative
                  single-player FPS experience you can have on Switch right now.
                  The lack of a multiplayer mode might grate (although that
                  wasn't present on other consoles either), but with its
                  brilliantly-written story and intense action, this stands
                  alongside DOOM as a blistering FPS campaign that feels close
                  to 'magical' when played on Switch hardware. B.J.’s war
                  against the Third Reich is one you definitely won't want to
                  miss.
                </Card.Text>
                <Button href="https://www.xbox.com/en-US/games/second-extinction">
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
                <Card.Img variant="top" src={Exo} />
                <Card.Title className="questions">ExoMecha</Card.Title>
                <Card.Text className="questions">
                  ExoMecha is a free-to-play online competitive first-person
                  shooter that takes place on a planet called Omecha. Our game
                  provides players an immersive experience with its high-quality
                  visuals, flexible gameplay, giant mechs, unique gadgets and
                  abilities, and boss battles. Our unique gameplay brings
                  limitless possibilities on how you engage in the combat.
                </Card.Text>
                <Button href="https://www.exomecha.com/">Sign up</Button>{" "}
                <Button type="submit">Save</Button>{" "}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default xboxSoloFPSOutPut;
