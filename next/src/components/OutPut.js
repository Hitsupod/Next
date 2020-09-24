import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import re2 from "../images/re2.png";
//import rdr from "../images/rdr2.png";
//import mgs from "../images/mgs.png";
//import witcher from "../images/witcher3.png";
//import apex from "../images/apex.png";
import { Link } from "react-router-dom";
//import Axios from "axios";
function Games() {
  // Setting our component's initial state
  const [games, setGames] = useState([]);
  //const [formObject, setFormObject] = useState({});

  useEffect(() => {
    loadGames();
  }, []);

  function loadGames() {
    API.getGames()
      .then((res) => setGames(res.data))
      .catch((err) => console.log(err));
  }
  //
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
              <Card.Img variant="top" src={re2} />
              <Card.Title className="questions"></Card.Title>
              <Card.Text className="questions">
                {games.length ? (
                  <List>
                    {games.map((game) => (
                      <ListItem key={game._id}>
                        <Link to={"/games" + game._id}>
                          <strong>
                            {game.title} by {game.author};
                          </strong>
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <h3>No Results to Display</h3>
                )}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default Games;
