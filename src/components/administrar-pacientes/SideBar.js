import React from 'react'

import AgregarPacientes from './AgregarPacientes';

import {Container, Col} from 'react-bootstrap';

const SideBar = () => {
    return (
        
        <Col sm={12} md={4}>  
            <Container className="text-center">             
                <h1>Paciente Nuevo</h1>
                <AgregarPacientes />
            </Container>
        </Col>
        
    )
}

export default SideBar
