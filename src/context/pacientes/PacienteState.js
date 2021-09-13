import React,{ useReducer } from 'react'

import pacienteContext from './pacienteContext';
import pacienteReducer from './pacienteReducer';
import { FORMULARIO_PACIENTE, OBTENER_PACIENTES } from '../../types';



const PacienteState = props => {

    const pacientes = [
        {id: 1, nombre: 'bubba'},
        {id: 3, nombre: 'Dora'},
        {id: 2, nombre: 'Oti'},
        {id: 4, nombre: 'Kiara'}
    
    ]

    const initialState = {
        pacientes : [],
        formulario: false
    }

    // Dispatch  para ejecutar las acciones

    const [state, dispatch] = useReducer(pacienteReducer, initialState);

    // Funciones para el CRUD

    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PACIENTE
        })
    }

    // Obtener los pacientes

    const obtenerPacientes =  () => {
        dispatch({
            type: OBTENER_PACIENTES,
            payload: pacientes

        })
    }

    return (
        <pacienteContext.Provider
            value={{
                pacientes: state.pacientes,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerPacientes
            }}
        >
            {props.children}
        </pacienteContext.Provider>
    )

}

export default PacienteState;
