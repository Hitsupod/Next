import React, {Component} from "react";
import { Container, Row, Col, Card} from "react-bootstrap";

class Results extends Component {
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
                            <Card.Title className="results">
                                You've Choosen a System
                            </Card.Title>
                            <Card.Text className="questions">
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Results;