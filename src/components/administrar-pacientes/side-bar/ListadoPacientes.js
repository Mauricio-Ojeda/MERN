import React, { useContext, useEffect } from 'react';
import pacienteContext from '../../../context/pacientes/pacienteContext';

import Paciente from './Paciente';

import {ListGroup} from 'react-bootstrap'

const ListadoPacientes = () => {

    // Extraer pacientes del state inicial
    const pacientesContext = useContext(pacienteContext);
    const { pacientes, obtenerPacientes } = pacientesContext;

    // Obtener pacientes cuando carga el componente
    useEffect(() => {
        obtenerPacientes();
    }, []);
    
    // Verifica si pacientes no esta vacio
    if( pacientes.length === 0 ) return null;

    return ( 
        <ListGroup className="mb-5" as="ul" variant="flush">
            {pacientes.map(paciente =>(
                < Paciente
                    key= {paciente.id} 
                    paciente= {paciente}
                />
            ))}
        </ListGroup>

    );

}

export default ListadoPacientes;