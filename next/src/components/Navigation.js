import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class Navigation extends Component {
    render() {
        return(
            <div>
                <Navbar className="justify-content-end" bg="dark" variant="dark">
                    <Nav>
                        <Link>
                            <h4 className="navbtns">Sign In</h4>
                        </Link>
                        <Link>
                            <h4 className="navbtns">Sign Up</h4>
                        </Link>
                    </Nav>
                    <Navbar.Brand href="/">
                        <h2 className="navbtns">Next</h2>
                    </Navbar.Brand>
                </Navbar>
            </div>
        )
    }

}

export default Navigation;