import { 
	OBTER_DADOS_CLIENTE
} from './ClienteActionTypes'


export const ObterDadosCliente = (cpf) => ({
    type: OBTER_DADOS_CLIENTE,
    payload: {
        request: {
            url: `/api/usuario/cpf/${cpf}`,
            method: 'GET'
        }
    }
});