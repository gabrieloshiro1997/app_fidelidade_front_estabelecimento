import { createStore, applyMiddleware } from "redux";
import RootReducer from "./reducers/RootReducer";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axiosMiddleware from './middleware/axios';

let middleware = applyMiddleware(thunk, axiosMiddleware, logger);

export default createStore(RootReducer, middleware);
