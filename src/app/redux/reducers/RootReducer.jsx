import { combineReducers } from "redux";

import GlobalReducer from './GlobalReducer';
import LoginReducer from './LoginReducer';
import UsuarioReducer from './UsuarioReducer';
import EstabelecimentoReducer from './EstabelecimentoReducer';

export default combineReducers({ 
    GlobalReducer,
    LoginReducer,
	UsuarioReducer,
	EstabelecimentoReducer
});