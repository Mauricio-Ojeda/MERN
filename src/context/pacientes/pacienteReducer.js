import { FORMULARIO_PACIENTE } from '../../types'

export default (state, action) => {
    switch(action.type) {
        case FORMULARIO_PACIENTE:
            return {
                ...state,
                formulario: true
            }

        default: 
            return state;
    }
}