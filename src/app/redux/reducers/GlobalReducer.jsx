import {
    EXIBIR_LOADING,
    ESCONDER_LOADING
} from '../actions/Global/GlobalActionTypes';

const initialState = {
    carregando: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case EXIBIR_LOADING: {
            return {
                ...state,
                carregando: true
            }
        }

        case ESCONDER_LOADING: {
            return {
                ...state,
                carregando: false
            }
        }
        
        default:
            return state;
    }
};