import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Signup from "./Sign-Up";
// import Login from "./login";


class Navigation extends Component {

    render() {
        return(
            <div>
                <Navbar className="justify-content-end" bg="dark" variant="dark">
                    <Navbar.Brand href="/">
                        <h2 className="Homebtn">Next</h2>
                    </Navbar.Brand>
                    <Nav>
                        <Link>
                            <h4 className="navbtns">Recommendation</h4>
                        </Link>
                        <Link>
                            <h4 className="navbtns">Saved</h4>
                        </Link>
                        <Nav.Link href="/Login" className="navbtns">Login</Nav.Link>
                        <Nav.Link href="/Signup" className="navbtns">Sign Up</Nav.Link>
                
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;
