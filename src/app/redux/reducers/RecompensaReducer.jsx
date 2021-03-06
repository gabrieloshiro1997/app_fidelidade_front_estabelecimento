import {
	OBTER_RECOMPENSAS_SUCCESS,
	OBTER_RECOMPENSA_SUCCESS,
	CADASTRAR_RECOMPENSA_SUCCESS,
	ATUALIZAR_RECOMPENSA_SUCCESS,
	EXCLUIR_RECOMPENSA_SUCCESS,
	EXIBIR_MODAL_FORMULARIO_RECOMPENSA,
	ESCONDER_MODAL_FORMULARIO_RECOMPENSA,
	EXIBIR_MODAL_EXCLUIR_RECOMPENSA,
	ESCONDER_MODAL_EXCLUIR_RECOMPENSA,
	EXIBIR_MODAL_ALTERAR_STATUS_RECOMPENSA,
	ESCONDER_MODAL_ALTERAR_STATUS_RECOMPENSA,
	INATIVAR_RECOMPENSA_SUCCESS,
	ATIVAR_RECOMPENSA_SUCCESS,
	LIMPAR_CONSULTA_RECOMPENSAS
} from '../actions/Recompensa/RecompensaActionTypes';

import { NotificationManager } from 'react-notifications';

const initialState = {
	recompensas: [],
	recompensa: {},
	showModalFormularioRecompensa: false,
	showModalExcluirRecompensa: false,
	showModalAlterarStatusRecompensa: false
}

export default (state = initialState, action) => {
	switch (action.type) {
		case OBTER_RECOMPENSAS_SUCCESS:
			return {
				...state,
				recompensas: action.payload.data
			}

		case LIMPAR_CONSULTA_RECOMPENSAS: 
			return {
				...state,
				recompensas: initialState.recompensas
			}
			
		case OBTER_RECOMPENSA_SUCCESS:
			return {
				...state,
				recompensa: action.payload.data
			}

		case CADASTRAR_RECOMPENSA_SUCCESS:
			NotificationManager.success('Recompensa cadastrada com sucesso', 'Sucesso');
			return {
				...state,
				showModalFormularioRecompensa: false
			}

		case ATUALIZAR_RECOMPENSA_SUCCESS:
			NotificationManager.success('Recompensa atualizada com sucesso', 'Sucesso');
			return {
				...state,
				showModalFormularioRecompensa: false
			}

		case EXCLUIR_RECOMPENSA_SUCCESS:
			NotificationManager.success('Recompensa excluída com sucesso', 'Sucesso');
			return {
				...state,
				showModalExcluirRecompensa: false
			}

		case INATIVAR_RECOMPENSA_SUCCESS:
			NotificationManager.success('Recompensa atualizada com sucesso', 'Sucesso');
			return {
				...state,
				showModalAlterarStatusRecompensa: false
			}

		case ATIVAR_RECOMPENSA_SUCCESS:
			NotificationManager.success('Recompensa atualizada com sucesso', 'Sucesso');
			return {
				...state,
				showModalAlterarStatusRecompensa: false
			}

		case EXIBIR_MODAL_FORMULARIO_RECOMPENSA: {
			return {
				...state,
				showModalFormularioRecompensa: true
			}
		}

		case ESCONDER_MODAL_FORMULARIO_RECOMPENSA: {
			return {
				...state,
				recompensa: initialState.recompensa,
				showModalFormularioRecompensa: false
			}
		}

		case EXIBIR_MODAL_EXCLUIR_RECOMPENSA: {
			return {
				...state,
				showModalExcluirRecompensa: true
			}
		}

		case ESCONDER_MODAL_EXCLUIR_RECOMPENSA: {
			return {
				...state,
				recompensa: initialState.recompensa,
				showModalExcluirRecompensa: false
			}
		}

		case EXIBIR_MODAL_ALTERAR_STATUS_RECOMPENSA: {
			return {
				...state,
				showModalAlterarStatusRecompensa: true
			}
		}

		case ESCONDER_MODAL_ALTERAR_STATUS_RECOMPENSA: {
			return {
				...state,
				recompensa: initialState.recompensa,
				showModalAlterarStatusRecompensa: false
			}
		}
		default:
			return state;
	}
}