import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Splatoon from "../../../images/splatoon.png";
import Fortnite from "../../../images/fortnite.jpg";
import Overwatch from "../../../images/overwatch.jpg";

//import { Link } from "react-router-dom";
class NintendoSquadFPSOutPut extends Component {
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
                <Card.Img variant="top" src={Splatoon} />
                <Card.Title className="questions">Splatoon 2</Card.Title>
                <Card.Text className="questions">
                  {" "}
                  The squid kids called Inklings are back to splat more ink and
                  claim more turf in this colorful and chaotic 4-on-4 action
                  shooter. For the first time, take Turf War battles on-the-go
                  with the Nintendo Switch system, and use any of the console’s
                  portable play styles for intense local multiplayer1 action.
                  Even team up for new 4-player co-op fun in Salmon Run!
                </Card.Text>
                <Button href="https://www.amazon.com/Splatoon-2-Nintendo-Switch/dp/B01N9QVIRV/ref=sr_1_1?crid=AOJRQTUBDD5G&dchild=1&keywords=splatoon+2+nintendo+switch&qid=1600740062&sprefix=splatoon%2Caps%2C201&sr=8-1">
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
                <Card.Img variant="top" src={Fortnite} />
                <Card.Title className="questions">Fortnite</Card.Title>
                <Card.Text className="questions">
                  Fortnite is an online video game developed by Epic Games and
                  released in 2017. It is available in three distinct game mode
                  versions that otherwise share the same general gameplay and
                  game engine: Fortnite: Save the World, a cooperative
                  shooter-survival game for up to four players to fight off
                  zombie-like creatures and defend objects with fortifications
                  they can build; Fortnite Battle Royale, a free-to-play battle
                  royale game in which up to 100 players fight to be the last
                  person standing; and Fortnite Creative, in which players are
                  given complete freedom to create worlds and battle arenas.
                </Card.Text>
                <Button href="https://www.amazon.com/Fortnite-Deep-Freeze-Bundle-Nintendo-Switch/dp/B07J5MHMNH/ref=sr_1_2?crid=3KJSIQLT58NLL&dchild=1&keywords=fortnite+nintendo+switch&qid=1600740137&sprefix=for%2Caps%2C211&sr=8-2">
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
                <Card.Img variant="top" src={Overwatch} />
                <Card.Title className="questions">Overwatch</Card.Title>
                <Card.Text className="questions">
                  Overwatch is a team-based multiplayer first-person shooter
                  developed and published by Blizzard Entertainment. Described
                  as a "hero shooter", Overwatch assigns players into two teams
                  of six, with each player selecting from a roster of over 30
                  characters, known as "heroes", each with a unique style of
                  play that is divided into three general roles that fit their
                  purpose.
                </Card.Text>
                <Button href="https://www.amazon.com/NSW-OVERWATCH-LEGENDARY-EURO/dp/B07XJPFL63/ref=sr_1_2?crid=3DI282MGCHBRI&dchild=1&keywords=overwatch+nintendo+switch&qid=1600740399&sprefix=overwatch%2Caps%2C204&sr=8-2">
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
export default NintendoSquadFPSOutPut;
