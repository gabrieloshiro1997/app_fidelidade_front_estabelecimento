import { combineReducers } from "redux";

import GlobalReducer from './GlobalReducer';
import LoginReducer from './LoginReducer';
import EstabelecimentoReducer from './EstabelecimentoReducer';
import RecompensaReducer from './RecompensaReducer';

export default combineReducers({ 
    GlobalReducer,
    LoginReducer,
	EstabelecimentoReducer,
	RecompensaReducer
});