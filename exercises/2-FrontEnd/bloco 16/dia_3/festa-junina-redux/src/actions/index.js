//criar variaveis de strings de cada action
//criar uma action em forma de arrow function que returna um objeto com type e payload;

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const CLEAR_CART = 'CLEAR_CART';


export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: {
    product,
  }
})