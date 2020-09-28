import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import Titan from "../../../images/titan.jpg";
import Black from "../../../images/blackops.jpg";
import Second from "../../../images/second.jpg";
//import { Link } from "react-router-dom";
class xboxSquadFPSOutPut extends Component {
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
                <Card.Img variant="top" src={Titan} />
                <Card.Title className="questions">
                Titanfall 2
                </Card.Title>
                <Card.Text className="questions">
                  {" "}
                  Titanfall 2 is a first-person shooter video game, developed by Respawn 
                  Entertainment and published by Electronic Arts. A sequel to 2014's Titanfall, 
                  the game was released worldwide on October 28, 2016 for Windows, 
                  PlayStation 4, and Xbox One. In Titanfall 2, players control Titans, 
                  mecha-style exoskeletons and their pilots, who are agile and equipped 
                  with a variety of skills ranging from wall-running to cloaking. Set in a 
                  science fiction universe, the single-player campaign follows the story of 
                  Jack Cooper, a rifleman from the Frontier Militia, who bonds with his mentor's Titan 
                  BT-7274 after his mentor is killed in action. Together, they embark on a quest to 
                  stop the Interstellar Manufacturing Corporation (IMC) from launching a superweapon
                  that is threatening to destroy the Militia planet Harmony. 
                </Card.Text>
                <Button href="https://www.amazon.com/Titanfall-2-Xbox-One/dp/B01GKGVIB2/ref=sr_1_1?dchild=1&keywords=titanfall+2&qid=1601262614&sr=8-1">Amazon</Button> <Button type="submit">Save</Button>{' '}
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
                <Card.Img variant="top" src={Black} />
                <Card.Title className="questions">
                Call of Duty: Black Ops Cold War
                </Card.Title>
                <Card.Text className="questions">
                The next chapter of the iconic Black Ops Multiplayer experience is here, defined by signature combat, 
                deniable operations, and a connected experience across platforms and generations. 
                </Card.Text>
                <Button href="https://www.callofduty.com/blackopscoldwar">Pre Order</Button> <Button type="submit">Save</Button>{' '}
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
                <Card.Img variant="top" src={Second} />
                <Card.Title className="questions">Second Extinction </Card.Title>
                <Card.Text className="questions">
                Second Extinction is an intense 3 player co-op shooter, where your goal is to wipeout 
                the mutated dinosaurs that have taken over the planet. Teamwork is vital as you adopt 
                the role of one of the survivors, using a combination of weapons, abilities and skills 
                to take on the vast number of enemies.
                </Card.Text>
                <Button href="https://www.xbox.com/en-US/games/second-extinction">Download</Button> <Button type="submit">Save</Button>{' '}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default xboxSquadFPSOutPut;
