import React from 'react'

import AgregarPacientes from './AgregarPacientes';
import ListadoPacientes from './ListadoPacientes';

import {Container, Col} from 'react-bootstrap';

const SideBar = () => {
    return (
        
        <Col sm={12} md={4}>  
            <Container className="text-center">             
                <h2>Paciente Nuevo</h2>
                <AgregarPacientes />
                <br/><br/>
                <h2>Lista de Pacientes</h2>
                <ListadoPacientes/>
            </Container>
        </Col>
        
    )
}

export default SideBar
