import { 
	CADASTRAR_ESTABELECIMENTO
} from './EstabelecimentoActionTypes'


export const CadastrarEstabelecimento = (estabelecimento) => ({
    type: CADASTRAR_ESTABELECIMENTO,
    payload: {
        request: {
            url: `/api/preCadastroEstabelecimento`,
            method: 'POST',
            data: estabelecimento
        }
    }
});