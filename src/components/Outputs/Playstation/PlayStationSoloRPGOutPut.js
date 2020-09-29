import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Ghost from "../../../images/Ghost_of_Tsushima.jpg";
import Spider from "../../../images/Spiderman.jpg";
import Death from "../../../images/death.jpg";

class PlayStationSoloRPGOutPut extends Component {
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
                <Card.Img variant="top" src={Ghost} />
                <Card.Title className="questions">Ghost of Tsushima</Card.Title>
                <Card.Text className="questions">
                  {" "}
                  Ghost of Tsushima is an action-adventure stealth game played
                  from a third-person perspective. Featuring a large open world,
                  there are no waypoints and can be explored without guidance.
                  Players can travel to different parts of the world on
                  horseback. An item that acts as a grappling hook is available
                  to access difficult to reach areas. The game features side
                  quests and non-playable characters with which the player can
                  interact.
                </Card.Text>
                <Button href="https://www.amazon.com/Ghost-Tsushima-PlayStation-4/dp/B08BSKT43L/ref=sr_1_1?dchild=1&keywords=Ghost+of+Tsushima+ps4&qid=1601228851&sr=8-1">
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
                <Card.Img variant="top" src={Spider} />
                <Card.Title className="questions">Spider-Man</Card.Title>
                <Card.Text className="questions">
                  Marvel's Spider-Man is a 2018 action-adventure game developed
                  by Insomniac Games and published by Sony Interactive
                  Entertainment. Based on the Marvel Comics superhero
                  Spider-Man, it is inspired by the long-running comic book
                  mythology and adaptations in other media. In the main
                  storyline, the super-human crime lord Mister Negative
                  orchestrates a plot to seize control of New York City's
                  criminal underworld. When Mister Negative threatens to release
                  a deadly virus, Spider-Man must confront him and protect the
                  city while dealing with the personal problems of his civilian
                  persona, Peter Parker.
                </Card.Text>
                <Button href="https://www.amazon.com/Marvels-Spider-Man-Playstation-4-PS4/dp/B07DLWRKVM/ref=sr_1_3?dchild=1&keywords=spiderman+ps4&qid=1601228690&sr=8-3">
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
                <Card.Img variant="top" src={Death} />
                <Card.Title className="questions">Death Stranding</Card.Title>
                <Card.Text className="questions">
                  The game is set in the United States following a cataclysmic
                  event which caused destructive creatures to begin roaming the
                  Earth. Players control Sam Porter Bridges (Norman Reedus), a
                  courier tasked with delivering supplies to isolated colonies
                  and reconnecting them via a wireless communications network.
                </Card.Text>
                <Button href="https://www.amazon.com/Death-Stranding-PS4-PlayStation-4/dp/B01H1OOU8K/ref=sr_1_2?crid=15HUF61ZC8EFB&dchild=1&keywords=death+stranding+ps4&qid=1601251621&s=videogames&sprefix=death%2Cvideogames%2C218&sr=1-2">
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
export default PlayStationSoloRPGOutPut;
