//criar o rootReducer utilizando a função combine reducers onde recebe os outros reducers;

import { combineReducers } from "redux";
import productReducer from './productReducer'

const rootReducer = combineReducers({ productReducer });

export default rootReducer;