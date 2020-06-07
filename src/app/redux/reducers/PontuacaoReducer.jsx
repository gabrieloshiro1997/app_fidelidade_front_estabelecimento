import { CADASTRAR_PONTUACAO, OBTER_PONTUACOES_SUCCESS} from '../actions/Pontuacao/PontuacaoActionTypes';

const initialState = {
	pontuacoes: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CADASTRAR_PONTUACAO: {
            return {
                ...state
            }
        }

        case OBTER_PONTUACOES_SUCCESS: {
            return {
                ...state,
                pontuacoes: action.payload.data
            }
        }
        
        default:
            return state;
    }
};