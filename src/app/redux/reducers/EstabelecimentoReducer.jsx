import { 
	CADASTRAR_ESTABELECIMENTO_SUCCESS
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
		
		case CADASTRAR_ESTABELECIMENTO_SUCCESS: {
            NotificationManager.success('Estabelecimento cadastrado com sucesso', 'Sucesso');
            return {
				...state
			}
		}
		
		default:
            return state;       
    }
};