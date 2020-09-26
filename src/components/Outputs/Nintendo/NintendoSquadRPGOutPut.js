import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import MHGU from "../../../images/mhgu.jpg";
import AC from "../../../images/AC.jpg";
import Pokemon from "../../../images/pokemon.jpg";
//import { Link } from "react-router-dom";
class NintendoSquadRPGOutPut extends Component {
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
                <Card.Img variant="top" src={MHGU} />
                <Card.Title className="questions">
                Monster Hunter Generations 
                </Card.Title>
                <Card.Text className="questions">
                  {" "}
                  Monster Hunter Generations Ultimate is the follow-up to Monster Hunter Generations, and marks the Monster 
                  Hunter series' debut on Nintendo Switch as an exclusive. Hunters can face off against the largest roster of 
                  unique monsters in any Monster Hunter game to date. Players take on the role of a brave hunter challenging larger 
                  than life beasts that yield valuable resources used for crafting unique weapons and equipment. Accept hundreds 
                  of quests solo or with friends in this nostalgic look back at the series' beginnings and evolutions. Along the 
                  hunter's journey, players must defend each of the game's four villages from major threats known as the Fated Four, 
                  plus an even more dangerous new Elder Dragon.
                </Card.Text>
                <Button href="https://www.amazon.com/Monster-Hunter-Generations-Ultimate-Nintendo-Switch/dp/B07FD94336/ref=sr_1_1?crid=IV4WAGQG1G78&dchild=1&keywords=monster+hunter+generations+ultimate+-+nintendo+switch&qid=1600740708&sprefix=Monster+Hunter+Generations%2Caps%2C404&sr=8-1">Amazon</Button> <Button type="submit">Save</Button>{' '}
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
                <Card.Img variant="top" src={AC} />
                <Card.Title className="questions">
                Animal Crossing New Horizon
                </Card.Title>
                <Card.Text className="questions">
                Escape to a deserted island and create your own paradise as you explore, create, and customize 
                in the Animal Crossing: New Horizons game. Your island getaway has a wealth of natural resources that can be 
                used to craft everything from tools to creature comforts. You can hunt down insects at the crack of dawn, 
                decorate your paradise throughout the day, or enjoy sunset on the beach while fishing in the ocean. The time 
                of day and season match real life, so each day on your island is a chance to check in and find new surprises all year round. 
                </Card.Text>
                <Button href="https://www.amazon.com/Animal-Crossing-New-Horizons-Nintendo-Switch/dp/B07SL6ZXBL/ref=sr_1_1_sspa?crid=16FMAS3L634SM&dchild=1&keywords=animal+crossing+nintendo+switch&qid=1600740921&sprefix=ani%2Caps%2C356&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExNUJBODUzRUFGR0IzJmVuY3J5cHRlZElkPUEwNzY1MTY1SFVZOFBKNTZJRjFOJmVuY3J5cHRlZEFkSWQ9QTA1MzI4MzAyTUZENDNYR1E0Q0MxJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==">Amazon</Button> <Button type="submit">Save</Button>{' '}
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
                <Card.Img variant="top" src={Pokemon} />
                <Card.Title className="questions">Pokemon Sword & Shield</Card.Title>
                <Card.Text className="questions">
                Begin your adventure as a Pokémon Trainer by choosing one of three new partner Pokémon: Grookey, 
                Scorbunny, or Sobble. Then embark on a journey in the new Galar region, where you’ll challenge the 
                troublemakers of Team Yell, while unraveling the mystery behind the Legendary Pokémon Zacian and Zamazenta! 
                Explore the Wild Area, a vast expanse of land where the player can freely control the camera. Team up with three 
                other players locally or online in the new multiplayer co-op Max Raid Battles* in which players will face off against 
                gigantic and super-strong Pokémon known as Dynamax Pokémon.
                </Card.Text>
                <Button href="https://www.amazon.com/Pok%C3%A9mon-Sword-Shield-Double-Pack-Nintendo/dp/B07ST7LY8F/ref=sr_1_4?crid=DT319PI529NP&dchild=1&keywords=pokemon+sword+nintendo+switch&qid=1600740968&sprefix=pok%2Caps%2C304&sr=8-4">Amazon</Button> <Button type="submit">Save</Button>{' '}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default NintendoSquadRPGOutPut;
