import {
	OBTER_HISTORICO_RETIRADA_SUCCESS
} from '../actions/Retirada/RetiradaActionTypes';

const initialState = {
	historicoRetirada: []
}

export default (state = initialState, action) => {
	switch (action.type) {
		case OBTER_HISTORICO_RETIRADA_SUCCESS:
			return {
				...state,
				historicoRetirada: action.payload.data
			}
		default:
			return state;
	}
}