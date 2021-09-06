import React,{ useReducer } from 'react'

import pacienteContext from './pacienteContext';
import pacienteReducer from './pacienteReducer';

const PacienteState = props => {
    const initialState = {

        agregarPaciente: false
    }

    // Dispatch  para ejecutar las acciones

    const [state, dispatch] = useReducer(pacienteReducer, initialState);

    // Funciones para el CRUD

    return (
        <pacienteContext.Provider
            value={{
                nuevo: state.agregarPaciente
            }}
        >
            {props.children}
        </pacienteContext.Provider>
    )

}

export default PacienteState;
