import React, { Component } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
// import QuizChoices from "../api/QuizChoices";
// import QuestionOpt from "./QuestionOpt";

class Questions extends Component {
/*  state = {
    questionChoices: []
  };

  getQuestions = () => {
    QuizChoices().then(question => {
      this.setState({
        questionChoices: question
      });
    });
  };

  componentDidMount() {
    console.log(this.getQuestions())
    this.getQuestions();
  }
  */

  render() {
    return (
      <Container fluid className="main">
        <Row>
          <Col md="auto">
            <Card
              className="questions"
              bg="dark"
              text="white"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title className="systemQuestions">
                What system do you prefer?
                  {/* {this.state.questionChoices.length > 0 && 
                    this.state.questionChoices.map(
                    ({question, answers, id}) => (
                        <QuestionOpt question={question} options={answers} key={id} />
                      ) */}
                </Card.Title>
                <Card.Text className="questions">
                  <ListGroup>
                    <ListGroup.Item action href="#link1">
                      PlayStation
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                      XBox
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link3">
                      PC
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* <Col md="auto">
            <Card
              className="questions"
              bg="dark"
              text="white"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title className="questions">
                  What system do you prefer
                </Card.Title>
                <Card.Text className="questions">
                  <ListGroup>
                    <ListGroup.Item action href="#link1">
                      Link 1
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                      Link 2
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link3">
                      link3
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </Container>
    );
  }
}
export default Questions;
