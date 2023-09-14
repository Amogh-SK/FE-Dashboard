import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './Home';
import ViewData from './ViewData';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

class navbarcomp extends Component {
    render() {
        return (
            <div>
                <Router>
                        <Navbar expand="lg" className="bg-body-tertiary">
                        <Navbar.Brand href="#home">FE DASHBOARD</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/view-data">ViewData</Nav.Link>
                        </Nav>
                        </Navbar>
                        <Routes>
                                <Route path="/view-data">
                                    <ViewData />
                                </Route>
                                <Route path="/">
                                    <Home />
                                </Route>
                        </Routes>
                </Router>
            </div>
        );
    }
}

export default navbarcomp;