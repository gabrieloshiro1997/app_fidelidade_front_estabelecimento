import { 
	CADASTRAR_PONTUACAO,
	OBTER_PONTUACOES
} from './PontuacaoActionTypes'

export const CadastrarPontuacao = (pontuacao) => ({
    type: CADASTRAR_PONTUACAO,
    payload: {
        request: {
            url: `/api/pontuacao`,
            method: 'POST',
            data: pontuacao
        }
    }
});

export const ObterPontuacoes = () => ({
	type: OBTER_PONTUACOES,
	payload: {
		request: {
			url:`/api/pontuacao/estabelecimento`,
			method: 'GET'
		}
	}
})