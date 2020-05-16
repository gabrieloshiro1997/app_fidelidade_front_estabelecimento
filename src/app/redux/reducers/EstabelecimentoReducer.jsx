import { 
	CADASTRAR_ESTABELECIMENTO_SUCCESS,
	OBTER_ESTABELECIMENTOS_SUCCESS,
	APROVAR_ESTABELECIMENTO_SUCCESS,
	REPROVAR_ESTABELECIMENTO_SUCCESS,
	EXIBIR_MODAL_APROVAR_ESTABELECIMENTO,
	ESCONDER_MODAL_APROVAR_ESTABELECIMENTO,
	DEFINIR_ESTABELECIMENTO,
	REMOVER_ESTABELECIMENTO,
	EXIBIR_MODAL_ALTERACAO_STATUS,
	ESCONDER_MODAL_ALTERACAO_STATUS
} from '../actions/Estabelecimento/EstabelecimentoActionTypes';

import { NotificationManager } from 'react-notifications'

const initialState = {
	estabelecimento: {},
	estabelecimentos: [],
	showModalAprovarEstabelecimento: false,
	showModalAlteracaoStatus: false
}

export default (state = initialState, action) => {
    switch(action.type){
		
		case OBTER_ESTABELECIMENTOS_SUCCESS: {
			console.log(action.payload, 'reducer')
            return {
                ...state,
                estabelecimentos: action.payload.data
            };
		}
		
		case CADASTRAR_ESTABELECIMENTO_SUCCESS: {
            NotificationManager.success('Estabelecimento cadastrado com sucesso', 'Sucesso');
            return {
				...state
			}
        }
		
		case APROVAR_ESTABELECIMENTO_SUCCESS:
		case REPROVAR_ESTABELECIMENTO_SUCCESS: {
            NotificationManager.success('O status do estabelecimento foi alterado com sucesso', 'Sucesso');
			return {
				...state
			}
		}

		case EXIBIR_MODAL_APROVAR_ESTABELECIMENTO: {
            return {
                ...state,
                showModalAprovarEstabelecimento: true
            }
        }

        case ESCONDER_MODAL_APROVAR_ESTABELECIMENTO: {
            return {
                ...state,
                showModalAprovarEstabelecimento: false
            }
		}
		
		case DEFINIR_ESTABELECIMENTO: {
            return {
                ...state,
				estabelecimento: action.payload.estabelecimento
			}
		}
		
		case REMOVER_ESTABELECIMENTO: {
            return {
                ...state,
				estabelecimento: {}
			}
		}
		
		case EXIBIR_MODAL_ALTERACAO_STATUS: {
            return {
                ...state,
                showModalAlteracaoStatus: true
            }
        }

        case ESCONDER_MODAL_ALTERACAO_STATUS: {
            return {
                ...state,
                showModalAlteracaoStatus: false
            }
		}

        default:
            return state;       
    }
};