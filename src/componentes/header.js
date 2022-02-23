import React from "react";
import {Navbar,Container,Nav} from 'react-bootstrap';
import '../index.css';

let Header=()=>{
    //Header con barra de navegacion creado con boostrapt con enlaces con ancla para ir a los diferentes lugares de la web
    return(
            <Navbar className="header"  bg="success" expand="lg" variant="dark" fixed="top" >
                <Container>
                    {/* Nombre de la pagina que es mi propio nombre */}
                    <Navbar.Brand href="#">Alejandro</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* Barra de navegacion como si fueran pestañas de navegador´
                        con las sessiones de la pagina*/}
                    <Nav className="me-auto" fill variant="tabs" defaultActiveKey="#About">
                        <Nav.Link href="#About" >About</Nav.Link>
                        <Nav.Link href="#Porfolio">Porfolio</Nav.Link>
                        <Nav.Link href="#Academi">Academics</Nav.Link>
                        <Nav.Link href="#Utylity">Utility</Nav.Link>
                        <Nav.Link href="#Recuperacion">Recuperacion UD1</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default Header;