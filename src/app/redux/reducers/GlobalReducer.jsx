import {
    EXIBIR_LOADING,
	ESCONDER_LOADING,
	OBTER_DADOS_DASHBOARD_SUCCESS
} from '../actions/Global/GlobalActionTypes';

const initialState = {
	carregando: false,
	dadosDashboard: {}
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
		
		case OBTER_DADOS_DASHBOARD_SUCCESS: {
			return {
				...state,
				dadosDashboard: action.payload.data
			}
		}

        default:
            return state;
    }
};