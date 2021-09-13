import React,{ useReducer } from 'react'

import pacienteContext from './pacienteContext';
import pacienteReducer from './pacienteReducer';
import { FORMULARIO_PACIENTE } from '../../types';

const PacienteState = props => {
    const initialState = {

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

    return (
        <pacienteContext.Provider
            value={{
                formulario: state.formulario,
                mostrarFormulario
            }}
        >
            {props.children}
        </pacienteContext.Provider>
    )

}

export default PacienteState;
