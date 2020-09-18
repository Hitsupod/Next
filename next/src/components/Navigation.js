import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <h2 className="Homebtn">Next</h2>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Link>
                <h4 className="navbtns">Recommendation</h4>
              </Link>
              <Link>
                <h4 className="navbtns">Saved</h4>
              </Link>
              <Link>
                <h4 className="navbtns">Sign In</h4>
              </Link>
              <Link>
                <h4 className="navbtns">Sign Up</h4>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
