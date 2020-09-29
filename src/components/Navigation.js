import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid green;
  color: lime;
  padding: 3px;

  ${(props) =>
    props.primary &&
    css`
      background: green;
      color: white;
    `}
`;

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar className="justify-content-between" bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <h2 className="Homebtn">Next</h2>
          </Navbar.Brand>
          <Nav>
            <Button>
              <Nav.Link href="/Recommendation" className="navbtns">
                Recommendation
              </Nav.Link>
            </Button>
            <Button>
              <Nav.Link href="/Saved" className="navbtns">
                Saved
              </Nav.Link>
            </Button>
            <Button>
              <Nav.Link href="/Login" className="navbtns">
                Login
              </Nav.Link>
            </Button>
            <Button>
              <Nav.Link href="/Signup" className="navbtns">
                Sign Up
              </Nav.Link>
            </Button>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;