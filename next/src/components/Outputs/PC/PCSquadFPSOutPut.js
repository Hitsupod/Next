import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Destiny from "../../../images/destiny.jpg";
import Valorant from "../../../images/Valorant.png";
import Division from "../../../images/division.jpg";
//import { Link } from "react-router-dom";
class PCSquadFPSOutPut extends Component {
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
          <Col md="auto">
            <Card
              className="questions"
              bg="dark"
              text="white"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Img variant="top" src={Valorant} />
                <Card.Title className="questions">
                Valorant
                </Card.Title>
                <Card.Text className="questions">
                VALORANT is your global competitive stage. It’s a 5v5 tac-shooter matchup to plant or defuse the 
                Spike in a one-life-per-round, first to 13 series. More than guns and bullets, you’ll choose an Agent 
                armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine.
                </Card.Text>
                <Button href="https://playvalorant.com/en-us/">Download</Button> <Button type="submit">Save</Button>{' '}
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
                <Card.Img variant="top" src={Division} />
                <Card.Title className="questions">The Division 2</Card.Title>
                <Card.Text className="questions">
                Tom Clancy's The Division 2 is a shooter RPG with campaign, co-op, and PvP modes that offers more variety 
                in missions and challenges, new progression systems with unique twists and surprises, and fresh innovations 
                that offer new ways to play.
                </Card.Text>
                <Button href="https://store.ubi.com/us/tom-clancys-the-division-2/5b06a3994e0165fa45ffdcdf.html?lang=en_US">Ubisoft</Button> <Button type="submit">Save</Button>{' '}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default PCSquadFPSOutPut;
