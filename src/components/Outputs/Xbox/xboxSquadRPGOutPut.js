import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Overwatch from "../../../images/overwatch.jpg";
import Rainbow from "../../../images/rainbow.jpg";
import Sea from "../../../images/sea.jpg";

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
          <Col md="4">
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
                  {" "}
                  Overwatch is a team-based multiplayer first-person shooter
                  developed and published by Blizzard Entertainment. Described
                  as a "hero shooter", Overwatch assigns players into two teams
                  of six, with each player selecting from a roster of over 30
                  characters, known as "heroes", each with a unique style of
                  play that is divided into three general roles that fit their
                  purpose.
                </Card.Text>
                <Button href="#">Amazon</Button>{" "}
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
                <Card.Img variant="top" src={Rainbow} />
                <Card.Title className="questions">
                  Tom Clancy's Rainbow Six Siege
                </Card.Title>
                <Card.Text className="questions">
                  Siege is an entry in the Rainbow Six series and the successor
                  to Tom Clancy's Rainbow 6: Patriots, a tactical shooter that
                  had a larger focus on narrative. After Patriots was eventually
                  cancelled due to its technical shortcomings, Ubisoft decided
                  to reboot the franchise. The team evaluated the core of the
                  Rainbow Six franchise and believed that letting players
                  impersonate the top counter-terrorist operatives around the
                  world suited the game most. To create authentic siege
                  situations, the team consulted actual counter-terrorism units
                  and looked at real-life examples of sieges such as the Iranian
                  Embassy siege.
                </Card.Text>
                <Button href="https://www.amazon.com/Clancys-Rainbow-Siege-Xbox-One-Microsoft/dp/B00KJGJPP6/ref=sr_1_1?dchild=1&keywords=Tom+Clancy%27s+Rainbow+Six+Siege+xbox&qid=1601255269&sr=8-1">
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
                <Card.Img variant="top" src={Sea} />
                <Card.Title className="questions">Sea of Thieves</Card.Title>
                <Card.Text className="questions">
                  Sea of Thieves is a 2018 action-adventure game developed by
                  Rare and published by Xbox Game Studios. The player assumes
                  the role of a pirate who completes voyages from different
                  trading companies in order to become the ultimate pirate
                  legend. Sea of Thieves is a first-person multiplayer game in
                  which players cooperate with each other to explore an open
                  world via a pirate ship. The game is described as a "shared
                  world adventure game", which means groups of players will
                  encounter each other regularly during their adventures,
                  sometimes forming alliances, sometimes going head-to-head.
                </Card.Text>
                <Button href="https://www.amazon.com/Sea-Thieves-Xbox-One/dp/B00ZPT59YS/ref=sr_1_2?crid=2KCENRDIDHWNV&dchild=1&keywords=sea+of+thieves+xbox+one&qid=1601255566&sprefix=sea+of+th%2Caps%2C187&sr=8-2">
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
export default xboxSquadRPGOutPut;
