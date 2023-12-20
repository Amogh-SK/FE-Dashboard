import {React,  Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {
    Link
} from "react-router-dom";

class Navbarcomp extends Component {
    render() {
        return (
            <div>
                        
                        <Navbar expand="lg" className="navbar navbar-dark bg-dark">
                        <Navbar.Brand href="#home">
                        <img
                            src="/logo512.png" 
                            width="90"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Your Logo"
                        />
                        
                    </Navbar.Brand>
                    
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/view-data">ViewData</Nav.Link>
                            <Nav.Link as={Link} to="/view-graph">ViewGraph</Nav.Link>
                        </Nav>
                        </Navbar>
                       
           
            </div>
        );
    }
}

export default Navbarcomp;