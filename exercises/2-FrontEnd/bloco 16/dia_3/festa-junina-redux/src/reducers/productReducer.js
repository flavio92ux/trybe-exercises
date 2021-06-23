//importar data
//importar variaveis de strings criadas em action
//definir um objeto INITIAL_STATE com o estado inicial
//criar uma funcao productReducer(state,action)

import products from '../products';
import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  EDIT_PRODUCT,
  CLEAR_CART,
} from '../actions/index';

const INITIAL_STATE = {
  products,
  cartProducts: [],
  totalValue: 0,
}


function productReducer(state=INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        cartProducts: state.cartProducts.concat(action.payload.product.name),
        totalValue: state.totalValue + action.payload.product.price, 
      };
    default:
      return state;
  }
}

export default productReducer;