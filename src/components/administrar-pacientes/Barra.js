import React from 'react'

import "../layout/barra.css";

import {Container, Navbar, Nav } from 'react-bootstrap'

const Barra = () => {
    return (
        <Container className="p-0" fluid>    
            <header>
                <Navbar className="barra" bg="secondary" expand="lg">
                    <Nav className="w-100 d-flex justify-content-between py-5">
                        
                            <p className="p-2"> Hola <span>Mauricio</span></p>
                            <Nav.Item  className="pl-2">
                                <Nav.Link id="barra-link" href="#">Cerrar Sesion</Nav.Link>
                            </Nav.Item>
                        
                    </Nav>
                </Navbar>    
            </header>
        </Container>    
    )
}

export default Barra
