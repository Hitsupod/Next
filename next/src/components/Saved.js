//import React from "react";
import API from "../utils/API";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
function Saved() {
  // Setting our component's initial state
  const [games, setGames] = useState([]);
  const [formObject, setFormObject] = useState({});

  useEffect(() => {
    loadGames();
  }, []);

  function loadGames() {
    API.getGames()
      .then((res) => setGames(res.data))
      .catch((err) => console.log(err));
  }

  function deleteGame(id) {
    API.deleteGame(id)
      .then((res) => loadGames())
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveGame({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis,
      })
        .then((res) => loadGames())
        .catch((err) => console.log(err));
    }
  }
  console.log();

  return (
    <Container fluid className="main">
      <Row>
        <Col>
          <h3 className="welcome">Saved Games:</h3>
        </Col>
      </Row>
      <Row className="output">
        <Col md={{ span: 3, offset: 4 }}>
          <Col size="md-6 sm-12">
            <ListGroup>
              {games.map((Games) => (
                <ListGroup.Item key={Games._id}>
                  <Link to={"/games/" + Games._id}>
                    <strong>
                      {Games.title} ({Games.system})
                    </strong>
                  </Link>
                  <DeleteBtn onClick={() => deleteGame(Games._id)} />
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Saved;
/* <ListGroup>
{games.map((Games) => (
  <ListGroup.Item key={Games._id}>
    <Link to={"/games/" + Games._id}>
      <strong>
        {Games.title} ({Games.system})
      </strong>
    </Link>
    <DeleteBtn onClick={() => deleteGame(Games._id)} />
  </ListGroup.Item>
))}
</ListGroup> */
