import { combineReducers } from "redux";

import GlobalReducer from './GlobalReducer';
import LoginReducer from './LoginReducer';
import EstabelecimentoReducer from './EstabelecimentoReducer';

export default combineReducers({ 
    GlobalReducer,
    LoginReducer,
	EstabelecimentoReducer
});