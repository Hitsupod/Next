import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import valorant from "../images/Valorant.png";
import minecraft from "../images/minecraft.jpg";
import spiderman from "../images/Spiderman.jpg";
import zelda from "../images/zelda.jpg";
import ori from "../images/ori.jpg";

function Recomendation() {
  return (
    <Container fluid className="main">
      <Row>
        <Col>
          <h3 className="welcome">
            Heres a list of the top five games that we recomend you give a try
            if you havent.
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
              <Card.Title className="recomendations">(PC)</Card.Title>
              <Card.Title className="recomendations">Valorant</Card.Title>
              <Card.Img variant="top" src={valorant} />
              <Card.Text className="recomendations">
                Valorant is a team-based tactical shooter and first-person
                shooter set in the near-future. Players play as one of a set of
                agents, characters designed based on several countries and
                cultures around the world.
              </Card.Text>
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
              <Card.Title className="recomendations">
                (all platforms)
              </Card.Title>
              <Card.Title className="recomendations">Minecraft</Card.Title>
              <Card.Img variant="top" src={minecraft} />
              <Card.Text className="recomendations">
                Minecraft is a Lego style adventure game which has massively
                increased in popularity since it was released two years ago. It
                now has more than 33 million users worldwide. The video game
                puts players in a randomly-generated world where they can create
                their own structures and contraptions out of textured cubes.
              </Card.Text>
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
              <Card.Title className="recomendations">(Playstaytion)</Card.Title>
              <Card.Title className="recomendations">SpiderMan</Card.Title>
              <Card.Img variant="top" src={spiderman} />
              <Card.Text className="recomendations">
                Marvel's Spider-Man is a 2018 action-adventure game developed by
                Insomniac Games and published by Sony Interactive Entertainment.
                ... When Mister Negative threatens to release a deadly virus,
                Spider-Man must confront him and protect the city while dealing
                with the personal problems of his civilian persona, Peter
                Parker.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="output">
        <Col md={{ span: 3, offset: 2 }}>
          <Card
            className="questions"
            bg="dark"
            text="white"
            style={{ width: "18rem" }}
          >
            <Card.Body>
              <Card.Title className="recomendations">(Nintendo)</Card.Title>
              <Card.Title className="recomendations">
                The legend of Zelda breath of the wild
              </Card.Title>
              <Card.Img variant="top" src={zelda} />

              <Card.Text className="recomendations">
                Breath of the Wild is an action-adventure game set in an open
                world where players are tasked with exploring the kingdom of
                Hyrule while controlling Link.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={{ span: 3, offset: 1 }}>
          <Card
            className="recomendations"
            bg="dark"
            text="white"
            style={{ width: "18rem" }}
          >
            <Card.Body>
              <Card.Title className="recomendations">(Xbox)</Card.Title>
              <Card.Title className="recomendations">
                Ori and the Will of the Wisps
              </Card.Title>
              <Card.Img variant="top" src={ori} />

              <Card.Text className="recomendations">
                Ori and the Will of the Wisps is a platform-adventure
                Metroidvania video game developed by Moon Studios and published
                by Xbox Game Studios for Microsoft Windows, Xbox One and Xbox
                Series X/S, and by Iam8bit for Nintendo Switch. ... The game
                maintains narrative continuity with Blind Forest and introduces
                new melee combat.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default Recomendation;
