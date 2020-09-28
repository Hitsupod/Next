import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import Bioshock from "../../../images/bioshock.jpg";
import Fallout from "../../../images/fallout.png";
import FarCry from "../../../images/Farcry.jpg";
//import { Link } from "react-router-dom";
class PlayStationSoloFPSOutPut extends Component {
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
                <Card.Img variant="top" src={Fallout} />
                <Card.Title className="questions">
                Fallout 76: Wastelanders
                </Card.Title>
                <Card.Text className="questions">
                  {" "}
                  Set in 2103, one year after the opening of Vault 76, new survivors begin flocking to Appalachia in search of a 
                  rumored treasure. As settlers and raiders alike scramble to find it, the residents of Vault 76 must choose sides 
                  in the brewing conflict. Players can embark on a new main quest of choice and consequence, interact with characters 
                  and their unique stories, discover the faction settlements of the Crater and Foundation, and collect powerful new weapons and armor. 
                </Card.Text>
                <Button href="https://www.amazon.com/Fallout-76-PlayStation-4/dp/B07DD9571S/ref=sr_1_3?crid=1Z06Y76CG7OA8&dchild=1&keywords=fallout+ps4&qid=1601251312&s=videogames&sprefix=fallo%2Cvideogames%2C199&sr=1-3">Amazon</Button> <Button type="submit">Save</Button>{' '}
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
                <Card.Img variant="top" src={FarCry} />
                <Card.Title className="questions">
                Far Cry
                </Card.Title>
                <Card.Text className="questions">
                The game takes place in Hope County, a fictional region of Montana, United States. The main story revolves around the 
                Project at Eden's Gate, a doomsday cult that has taken over the county at the command of its charismatic and powerful 
                leader, Joseph Seed. Players control an unnamed junior deputy sheriff who becomes trapped in Hope County, and must 
                work alongside factions of a resistance to liberate the county from the despotic rule of the Seeds and Eden's Gate. 
                Gameplay focuses on combat and exploration; players battle enemy soldiers and dangerous wildlife using a wide array of weapons. 
                </Card.Text>
                <Button href="https://www.amazon.com/Far-Cry-New-Dawn-playstation-4/dp/B07P8JCSGQ/ref=sr_1_1?crid=3T4O829QK5LBB&dchild=1&keywords=far+cry+new+dawn+ps4&qid=1601250877&s=videogames&sprefix=far+cry+%2Cvideogames%2C203&sr=1-1">Amazon</Button> <Button type="submit">Save</Button>{' '}
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
                <Card.Img variant="top" src={Bioshock} />
                <Card.Title className="questions">BioShock: The Collection</Card.Title>
                <Card.Text className="questions">
                BioShock is set in 1960. The player guides the protagonist, Jack, after his airplane crashes 
                in the ocean near the bathysphere terminus that leads to the underwater city of Rapture. Built 
                by the business magnate Andrew Ryan, the city was intended to be an isolated utopia, but the 
                discovery of ADAM, a genetic material which can be used to grant superhuman powers, initiated 
                the city's turbulent decline. Jack tries to find a way to escape, fighting through hordes of 
                ADAM-obsessed enemies, and the iconic, deadly Big Daddies, while engaging with the few sane 
                humans that remain and eventually learning of Rapture's past. 
                </Card.Text>
                <Button href="https://www.amazon.com/BioShock-Collection-PlayStation-4/dp/B01HIZF83S/ref=sr_1_1?dchild=1&keywords=BioShock%3A+The+Collection+ps4&qid=1601254459&s=videogames&sr=1-1">Amazon</Button> <Button type="submit">Save</Button>{' '}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default PlayStationSoloFPSOutPut;
