import { 
	CADASTRAR_PONTUACAO,
	OBTER_PONTUACOES,
	EXIBIR_MODAL_CADASTRO_PONTUACAO,
	ESCONDER_MODAL_CADASTRO_PONTUACAO
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

export const ExibirModalCadastroPontuacao = () => ({
	type: EXIBIR_MODAL_CADASTRO_PONTUACAO
});

export const EsconderModalCadastroPontuacao = () => ({
	type: ESCONDER_MODAL_CADASTRO_PONTUACAO
});