import {
    ACCESS_TOKEN,
    TIPO_ACESSO
} from '../../../config/utils/LocalStorageKeys'
import decode from 'jwt-decode';

import { 
    LOGOUT, 
	LOGIN_SUCCESS,
	LOGIN_ESTABELECIMENTO_SUCCESS
} from '../actions/Login/LoginActionTypes';

const registerJwt = (data) => {
	
	const token = data.token;
	const decoded = decode(token);
	
    localStorage.setItem(ACCESS_TOKEN, data.token);           
    localStorage.setItem(TIPO_ACESSO, decoded.tipoUsuario);           
}

const Logout = () => {
    localStorage.removeItem(ACCESS_TOKEN);             
       
}

const initialState = {
    state: true
}

export default (state = initialState, action) => {
    switch(action.type){
        case LOGIN_SUCCESS:
		case LOGIN_ESTABELECIMENTO_SUCCESS:
			 {
            registerJwt(action.payload.data);
            return state;
        }

        case LOGOUT: {
            Logout();
            return state;
        }

        default:
            return state;       
    }
};