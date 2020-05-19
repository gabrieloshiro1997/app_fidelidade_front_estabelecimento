import {
	OBTER_RECOMPENSAS,
	OBTER_RECOMPENSA,
	CADASTRAR_RECOMPENSA,
	ATUALIZAR_RECOMPENSA,
	EXCLUIR_RECOMPENSA,
	EXIBIR_MODAL_FORMULARIO_RECOMPENSA,
	ESCONDER_MODAL_FORMULARIO_RECOMPENSA,
	EXIBIR_MODAL_EXCLUIR_RECOMPENSA,
	ESCONDER_MODAL_EXCLUIR_RECOMPENSA,
	INATIVAR_RECOMPENSA,
	ATIVAR_RECOMPENSA,
	ESCONDER_MODAL_ALTERAR_STATUS_RECOMPENSA,
	EXIBIR_MODAL_ALTERAR_STATUS_RECOMPENSA,
	LIMPAR_CONSULTA_RECOMPENSAS,
} from './RecompensaActionTypes';

import { ESTABELECIMENTO_ID } from '../../../../config/utils/LocalStorageKeys';

export const ObterRecompensas = () => {
	let idEstabelecimento = localStorage.getItem(ESTABELECIMENTO_ID);
	return {
		type: OBTER_RECOMPENSAS,
		payload: {
			request: {
				url: `/api/recompensa/estabelecimento/${idEstabelecimento}`,
				method: 'GET'
			}
		}
	}
}

export const LimparConsultaRecompensas = () => ({
	type: LIMPAR_CONSULTA_RECOMPENSAS 
})

export const ObterRecompensa = (id) => ({
	type: OBTER_RECOMPENSA,
	payload: {
		request: {
			url: `/api/recompensa/${id}`,
			method: 'GET'
		}
	}
});

export const CadastrarRecompensa = (recompensa) => ({
	type: CADASTRAR_RECOMPENSA,
	payload: {
		request: {
			url: `/api/recompensa`,
			method: 'POST',
			data: recompensa
		}
	}
});

export const AtualizarRecompensa = (recompensa) => ({
	type: ATUALIZAR_RECOMPENSA,
	payload: {
		request: {
			url: `/api/recompensa`,
			method: 'PUT',
			data: recompensa
		}
	}
});

export const ExcluirRecompensa = (id) => ({
	type: EXCLUIR_RECOMPENSA,
	payload: {
		request: {
			url: `/api/recompensa/${id}`,
			method: 'DELETE'
		}
	}
});

export const AtivarRecompensa = (id) => ({
	type: ATIVAR_RECOMPENSA,
	payload: {
		request: {
			url: `/api/recompensa/ativar/${id}`,
			method: 'PUT'
		}
	}
});

export const InativarRecompensa = (id) => ({
	type: INATIVAR_RECOMPENSA,
	payload: {
		request: {
			url: `/api/recompensa/inativar/${id}`,
			method: 'PUT'
		}
	}
});

export const EsconderModalFormularioRecompensa = () => ({
	type: ESCONDER_MODAL_FORMULARIO_RECOMPENSA
});

export const ExibirModalFormularioRecompensa = () => ({
	type: EXIBIR_MODAL_FORMULARIO_RECOMPENSA
});

export const EsconderModalExcluirRecompensa = () => ({
	type: ESCONDER_MODAL_EXCLUIR_RECOMPENSA
});

export const ExibirModalExcluirRecompensa = () => ({
	type: EXIBIR_MODAL_EXCLUIR_RECOMPENSA
});


export const EsconderModalAlterarStatusRecompensa = () => ({
	type: ESCONDER_MODAL_ALTERAR_STATUS_RECOMPENSA
});

export const ExibirModalAlterarStatusRecompensa = () => ({
	type: EXIBIR_MODAL_ALTERAR_STATUS_RECOMPENSA
});
