import React from 'react';

import Paciente from './Paciente';

import {ListGroup} from 'react-bootstrap'

const ListadoPacientes = () => {

    const pacientes = [
        {nombre: 'bubba'},
        {nombre: 'Oti'},
        {nombre: 'Dora'}
    ]

    return ( 
        <ListGroup className="mb-5" as="ul" variant="flush">
            {pacientes.map(paciente =>(
                < Paciente 
                    paciente= {paciente}
                />
            ))}
        </ListGroup>

    );

}

export default ListadoPacientes;