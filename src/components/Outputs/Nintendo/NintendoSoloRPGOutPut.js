import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Zelda from "../../../images/zelda.jpg";
import Hollow from "../../../images/HollowKnight.jpg";
import Fire from "../../../images/3houses.jpg";
//import { Link } from "react-router-dom";
class NintendoSoloRPGOutPut extends Component {
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
                <Card.Img variant="top" src={Zelda} />
                <Card.Title className="questions">
                  The Legend of Zelda™: Breath of the Wild
                </Card.Title>
                <Card.Text className="questions">
                  {" "}
                  Forget everything you know about The Legend of Zelda games.
                  Step into a world of discovery, exploration, and adventure in
                  The Legend of Zelda: Breath of the Wild, a boundary-breaking
                  new game in the acclaimed series. Travel across vast fields,
                  through forests, and to mountain peaks as you discover what
                  has become of the kingdom of Hyrule in this stunning Open-Air
                  Adventure.
                </Card.Text>
                <Button href="https://www.amazon.com/Legend-Zelda-Breath-Wild-switch-Nintendo/dp/B01N1083WZ/ref=sr_1_2?crid=3NH357NN8YAAR&dchild=1&keywords=legend+of+zelda+breath+of+the+wild&qid=1600739578&sprefix=legend+%2Caps%2C200&sr=8-2">
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
                <Card.Img variant="top" src={Hollow} />
                <Card.Title className="questions">Hollow Knight</Card.Title>
                <Card.Text className="questions">
                  Forge your own path in Hollow Knight! An epic action adventure
                  through a vast ruined kingdom of insects and heroes. Explore
                  twisting caverns, battle tainted creatures and befriend
                  bizarre bugs, all in a classic, hand-drawn 2D style.
                </Card.Text>
                <Button href="https://www.amazon.com/Hollow-Knight-Nintendo-Switch/dp/B07QHXM3JY/ref=sr_1_2?crid=1CTCYYG6YYL3V&dchild=1&keywords=hollow+knight+switch&qid=1600739644&sprefix=hollow+kni%2Caps%2C248&sr=8-2">
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
                <Card.Img variant="top" src={Fire} />
                <Card.Title className="questions">
                  Fire Emblem: Three Houses
                </Card.Title>
                <Card.Text className="questions">
                  War is coming to the continent of Fódlan. Here, order is
                  maintained by the Church of Seiros, which hosts the
                  prestigious Officer’s Academy within its headquarters. You are
                  invited to teach one of its three mighty houses, each
                  comprised of students brimming with personality and
                  represented by a royal from one of three territories. As their
                  professor, you must lead your students in their academic lives
                  and in turn-based, tactical RPG battles wrought with
                  strategic, new twists to overcome. Which house, and which
                  path, will you choose?
                </Card.Text>
                <Button href="https://www.amazon.com/Fire-Emblem-Three-Houses-Nintendo-Switch/dp/B07DK13HKX/ref=sr_1_1?crid=1R2YBIDLTM95Z&dchild=1&keywords=fire+emblem+three+houses&qid=1600739783&sprefix=Fire+Emblem%3A+Three+Houses%2Caps%2C421&sr=8-1">
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
export default NintendoSoloRPGOutPut;
