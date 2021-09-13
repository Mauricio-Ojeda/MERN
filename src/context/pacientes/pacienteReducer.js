import { FORMULARIO_PACIENTE, OBTENER_PACIENTES } from '../../types'

const  pacientesReducer = (state, action) => {
    switch(action.type) {
        case FORMULARIO_PACIENTE:
            return {
                ...state,
                formulario: true
            }
        case OBTENER_PACIENTES:
            return {
                ...state,
                pacientes: action.payload
            }    

        default: 
            return state;
    }
}

export default pacientesReducer