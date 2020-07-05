import {
    ACCESS_TOKEN,
    TIPO_ACESSO,
    ESTABELECIMENTO_ID
} from '../../../config/utils/LocalStorageKeys'
import decode from 'jwt-decode';

import { 
    LOGOUT, 
	LOGIN_ESTABELECIMENTO_SUCCESS,
	SOLICITAR_REDEFINICAO_SENHA_SUCCESS,
	RESETAR_SENHA_SUCCESS
} from '../actions/Login/LoginActionTypes';

const registerJwt = (data) => {
	
	const token = data.token;
	const decoded = decode(token);
	
    localStorage.setItem(ACCESS_TOKEN, data.token);           
	localStorage.setItem(TIPO_ACESSO, decoded.tipoUsuario);
	localStorage.setItem(ESTABELECIMENTO_ID, decoded.id);           
}

const Logout = () => {
    localStorage.removeItem(ACCESS_TOKEN);             
       
}

const initialState = {
    state: true
}

export default (state = initialState, action) => {
    switch(action.type){
		case LOGIN_ESTABELECIMENTO_SUCCESS:
			 {
            registerJwt(action.payload.data);
            return state;
        }

        case LOGOUT: {
            Logout();
            return state;
        }

		case SOLICITAR_REDEFINICAO_SENHA_SUCCESS: {
			return state;
		}
		
		case RESETAR_SENHA_SUCCESS: {
			return state;
		}

        default:
            return state;       
    }
};