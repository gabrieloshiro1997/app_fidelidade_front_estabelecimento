import { combineReducers } from "redux";

import GlobalReducer from './GlobalReducer';
import LoginReducer from './LoginReducer';
import EstabelecimentoReducer from './EstabelecimentoReducer';
import RecompensaReducer from './RecompensaReducer';
import PontuacaoReducer from './PontuacaoReducer';
import ClienteReducer from './ClienteReducer';

export default combineReducers({ 
    GlobalReducer,
    LoginReducer,
	EstabelecimentoReducer,
	RecompensaReducer,
	PontuacaoReducer,
	ClienteReducer
});