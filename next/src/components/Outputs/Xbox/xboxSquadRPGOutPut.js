import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Wolf from "../../../images/wolf.jpg";
//import { Link } from "react-router-dom";
class xboxSquadRPGOutPut extends Component {
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
                <Card.Img variant="top" src={Wolf} />
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
                <Button href="#">Amazon</Button>{" "}
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
                <Button href="#">Amazon</Button>{" "}
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
                <Card.Title className="questions">The Witcher3</Card.Title>
                <Card.Text className="questions">
                  The Witcher® 3: Wild Hunt is a story-driven, next-generation
                  open world role-playing game, set in a visually stunning
                  fantasy universe, full of meaningful choices and impactful
                  consequences. You play as Geralt of Rivia, a monster hunter
                  tasked with finding a child from an ancient prophecy.
                </Card.Text>
                <Button href="#">Amazon</Button>{" "}
                <Button type="submit">Save</Button>{" "}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default xboxSquadRPGOutPut;
