import {
    EXIBIR_LOADING,
    ESCONDER_LOADING,
	OBTER_DADOS_DASHBOARD
} from './GlobalActionTypes';

export const ExibirLoading = () => ({
    type: EXIBIR_LOADING
});

export const EsconderLoading = () => ({
    type: ESCONDER_LOADING
});

export const ObterDadosDashboard = (idEmpresa) => ({
	type: OBTER_DADOS_DASHBOARD,
	payload: {
		request: {
			url: `/api/dashboard/${idEmpresa}`
		}
	}
})