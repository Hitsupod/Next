import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import Apex from "../../../images/apex.png";
import COD from "../../../images/cod.png";
import B3 from "../../../images/B3.jpg";
//import { Link } from "react-router-dom";
class PCSoloFPSOutPut extends Component {
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
                <Card.Img variant="top" src={Apex} />
                <Card.Title className="questions">
                Apex Legends
                </Card.Title>
                <Card.Text className="questions">
                  {" "}
                  Apex Legends is a free-to-play Battle Royale game where legendary competitors 
                  battle for glory, fame, and fortune on the fringes of the Frontier.
                </Card.Text>
                <Button href="https://www.ea.com/games/apex-legends">Download</Button> <Button type="submit">Save</Button>{' '}
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
                <Card.Img variant="top" src={COD} />
                <Card.Title className="questions">
                Call Of Duty
                </Card.Title>
                <Card.Text className="questions">
                Call of Duty: Modern Warfare is a 2019 first-person shooter video game developed by 
                Infinity Ward and published by Activision. Serving as the sixteenth overall installment in the 
                Call of Duty series, as well as a reboot of the Modern Warfare sub-series.
                </Card.Text>
                <Button href="https://www.callofduty.com/modernwarfare/pc">Download</Button> <Button type="submit">Save</Button>{' '}
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
                <Card.Img variant="top" src={B3} />
                <Card.Title className="questions">Borderlands 3</Card.Title>
                <Card.Text className="questions">
                Borderlands 3 is an action role-playing first-person shooter video game developed by Gearbox Software and published by 2K Games. 
                It is a sequel to 2012's Borderlands 2, and the fourth entry in the main Borderlands series. Players complete quests and side missions, 
                in single-player or multiplayer, as one of four classes. When killed, enemies may drop weapons and gear which can be equipped. 
                New abilities are unlocked as the player gains experience. The plot is centered on four new Vault Hunters recruited by the 
                Crimson Raiders of Pandora to stop twins Troy and Tyreen Calypso and their insane cult followers from harnessing the power of 
                the alien Vaults spread across the galaxy. 
                </Card.Text>
                <Button href="https://store.steampowered.com/app/397540/Borderlands_3/">Steam</Button> <Button type="submit">Save</Button>{' '}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default PCSoloFPSOutPut;
