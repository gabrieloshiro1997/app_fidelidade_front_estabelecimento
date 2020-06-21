import { 
	OBTER_DADOS_CLIENTE_SUCCESS
} from '../actions/Cliente/ClienteActionTypes';

const initialState = {
	cliente: {}
}

export default (state = initialState, action) => {
    switch(action.type){
		
		case OBTER_DADOS_CLIENTE_SUCCESS: {
            return {
				...state,
				cliente: action.payload.data
			}
		}
		
		default:
            return state;       
    }
};