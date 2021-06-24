//criar a variavel store utilizando a funcao createStore que recebera rootReducer e composeWithDevtools()

import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/index';

const store = createStore(
  rootReducer,
  composeWithDevTools(),
);

export default store;