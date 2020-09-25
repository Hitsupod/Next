import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Wolf from "../../../images/wolf.jpg";
import Metro from "../../../images/Metro.jpg";
import Rico from "../../../images/rico.jpg";
//import { Link } from "react-router-dom";
class NintendoSoloFPSOutPut extends Component {
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
                <Card.Img variant="top" src={Metro} />
                <Card.Title className="questions">Metro 2033 Redux</Card.Title>
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
                <Button href="https://www.amazon.com/Metro-Redux-Nintendo-Switch/dp/B0846FLHLS/ref=sr_1_1?crid=2NFCYZ6AU22LQ&dchild=1&keywords=metro+2033+redux+switch&qid=1600739332&sprefix=Metro+2033+Redux+%2Caps%2C189&sr=8-1">
                  Amazon
                </Button>{" "}
                <Button type="submit">Save</Button>{" "}
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
                <Button href="https://www.amazon.com/Wolfenstein-II-New-Colossus-Nintendo-Switch/dp/B077ZNDMST/ref=sr_1_1?dchild=1&keywords=Wolfenstein+II%3A+The+New+Colossus&qid=1600739379&sr=8-1">
                  Amazon
                </Button>{" "}
                <Button type="submit">Save</Button>{" "}
              </Card.Body>
            </Card>
          </Col>

          <Col md="auto">
            <Card
              className="questions"
              bg="dark"
              text="white"
              style={{ width: "65rem" }}
            >
              <Card.Body>
                <Card.Img variant="top" src={Rico} />
                <Card.Title className="questions">Rico</Card.Title>
                <Card.Text className="questions">
                  RICO is simple, moreish fun in arcade FPS form; a literal
                  corridor shooter that makes every gunfight a glorious exchange
                  of bullets as you fight your way to the words ‘Room cleared’
                  over and over again. It’s great fun in single-player, but when
                  you head into each randomised set of rooms in co-op, you’ll
                  shoot your way into an interactive buddy cop movie right there
                  in the palm of your hands.
                </Card.Text>
                <Button href="https://www.amazon.com/Rico-Console-Video-Games-Nintendo-Switch/dp/B07MX1T1HM/ref=sr_1_1?dchild=1&keywords=Rico+switch&qid=1600739398&sr=8-1">
                  Amazon
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
export default NintendoSoloFPSOutPut;
