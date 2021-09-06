import React from 'react'

import AgregarPacientes from './side-bar/AgregarPacientes';
import ListadoPacientes from './side-bar/ListadoPacientes';

import {Container} from 'react-bootstrap';

const SideBar = () => {
    return (
        
       
            <Container className="text-center">             
                <h2>Paciente Nuevo</h2>
                <AgregarPacientes />
                <br/><br/>
                <h2>Lista de Pacientes</h2>
                <ListadoPacientes/>
            </Container>
        
    )
}

export default SideBar
