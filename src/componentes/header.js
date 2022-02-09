import React from "react";
import {Navbar,Container,Nav} from 'react-bootstrap';
import '../index.css';

let Header=()=>{
    return(
            <Navbar className="header"  bg="success" expand="lg" variant="dark" fixed="top" >
                <Container>
                    <Navbar.Brand href="#">Alejandro</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" fill variant="tabs" defaultActiveKey="#About">
                        <Nav.Link href="#About" >About Me</Nav.Link>
                        <Nav.Link href="#Jobs">Mis Proyectos</Nav.Link>
                        <Nav.Link href="#Academics">Mis Titulos</Nav.Link>
                        <Nav.Link href="#Utylitis">Utilidades</Nav.Link>
                        <Nav.Link href="#Recuperacion">Recuperacion UD1</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default Header;