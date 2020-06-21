import {
	CADASTRAR_PONTUACAO,
	OBTER_PONTUACOES_SUCCESS,
	EXIBIR_MODAL_CADASTRO_PONTUACAO,
	ESCONDER_MODAL_CADASTRO_PONTUACAO
} from '../actions/Pontuacao/PontuacaoActionTypes';

const initialState = {
	pontuacoes: [],
	exibirModalCadastroPontuacao: false
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

		case EXIBIR_MODAL_CADASTRO_PONTUACAO:
			return {
				...state,
				exibirModalCadastroPontuacao: true
			}

		case ESCONDER_MODAL_CADASTRO_PONTUACAO:
			return {
				...state,
				exibirModalCadastroPontuacao: false
			}

		default:
			return state;
	}
};