import React from 'react'

import AgregarPacientes from './AgregarPacientes';

import {Container, Col} from 'react-bootstrap';

const SideBar = () => {
    return (
        
       
            <Container className="text-center">             
                <h1>Paciente Nuevo</h1>
                <AgregarPacientes />
            </Container>
        
    )
}

export default SideBar
