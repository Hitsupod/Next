import React from "react";
import "./App.css";
import Main from "./components/Main";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar className="justify-content-end" bg="dark" variant="dark">
        <Nav>
          <Link>
            <h4 className="navbtns">SignIn</h4>
          </Link>
          <Link>
            <h4 className="navbtns">SignUp</h4>
          </Link>
        </Nav>
        <Navbar.Brand href="/">
          <h2 className="navbtns">Next</h2>
        </Navbar.Brand>
      </Navbar>
      <Main></Main>
    </div>
  );
}

export default App;
