import {
	OBTER_HISTORICO_RETIRADA
} from './RetiradaActionTypes';

export const ObterHistoricoRetirada = (idEstabelecimento) => ({
	type: OBTER_HISTORICO_RETIRADA,
	payload: {
		request: {
			url: `/api/retirada/historico/estabelecimento/${idEstabelecimento}`,
			method: 'GET'
		}
	}
})