import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import Division from "../../../images/division.jpg";
import B4 from "../../../images/B4.jpg";
import Destiny from "../../../images/destiny.jpg";
//import { Link } from "react-router-dom";
class PlayStationSquadFPSOutPut extends Component {
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
                <Card.Img variant="top" src={Division} />
                <Card.Title className="questions">
                The Division 2
                </Card.Title>
                <Card.Text className="questions">
                  {" "}
                  Metro 2033 Redux is a top-class first-person shooter/survival horror game, a breathless experience.Artyom's desperate, 
                  haunting voyage through the irradiated remains of Moscow is every bit as engaging today as it was when it first released 
                  back in 2010, and this Redux version benefits massively from overhauled AI, gameplay mechanics and visuals. 
                  In terms of first-person shooters or survival horror games on Nintendo's console, this is one of the very best.
                </Card.Text>
                <Button href="https://www.amazon.com/Tom-Clancys-Division-PS4-playstation-4/dp/B07BMPVG1S/ref=sr_1_1?crid=3UVKLRD945M6M&dchild=1&keywords=the+division+2+ps4&qid=1601251653&s=videogames&sprefix=the+division%2Cvideogames%2C189&sr=1-1">Amazon</Button> <Button type="submit">Save</Button>{' '}
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
                <Card.Img variant="top" src={B4} />
                <Card.Title className="questions">
                Battlefield V
                </Card.Title>
                <Card.Text className="questions">
                Battlefield V is focused extensively on party-based features and mechanics, scarcity of resources, and removing 
                "abstractions" from game mechanics to increase realism. There is an expanded focus on player customization through 
                the new Company system, where players can create multiple characters with cosmetic and weapon options. Cosmetic items, 
                and currency used to purchase others, are earned by completing in-game objectives.
                </Card.Text>
                <Button href="https://www.amazon.com/Battlefield-V-PlayStation-4/dp/B07D767FMV/ref=sr_1_2?dchild=1&keywords=battlefield+v+ps4&qid=1601250747&sr=8-2">Amazon</Button> <Button type="submit">Save</Button>{' '}
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
                <Card.Img variant="top" src={Destiny} />
                <Card.Title className="questions">Destiny 2</Card.Title>
                <Card.Text className="questions">
                  Dive into the world of Destiny 2 to explore the mysteries of the solar system and experience responsive 
                  first-person shooter combat. Unlock powerful elemental abilities and collect unique gear to customize your 
                  Guardian's look and playstyle. Enjoy Destiny 2’s cinematic story, challenging co-op missions, and a variety 
                  of PvP modes alone or with friends. Download for free today and write your legend in the stars.
                </Card.Text>
                <Button href="https://www.amazon.com/Destiny-Forsaken-Legendary-Collection-PlayStation-4/dp/B07F8MK3H9/ref=sxin_9_ac_d_rm?ac_md=0-0-ZGVzdGlueSAy-ac_d_rm&cv_ct_cx=destiny+2&dchild=1&keywords=destiny+2&pd_rd_i=B07F8MK3H9&pd_rd_r=c40bbcb1-2cbd-4b15-87d5-b53f711ea4c3&pd_rd_w=EvTKB&pd_rd_wg=HG45o&pf_rd_p=fe2d64f9-a0d4-4c62-b195-55e240bc5b7e&pf_rd_r=861XJKMXRMRJ8T8GW9CB&psc=1&qid=1601250828&sr=1-1-12d4272d-8adb-4121-8624-135149aa9081">Amazon</Button> <Button type="submit">Save</Button>{' '}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default PlayStationSquadFPSOutPut;
