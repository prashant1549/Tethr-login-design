import {DELETE_CART, ADD_CART, ADD_EMAIL, ASYN_DATA} from './Type';

export const deleteCart = id => ({
  type: DELETE_CART,
  id: id,
});
export const addCart = cart => ({
  type: ADD_CART,
  data: cart,
});

export const addEmail = email => ({
  type: ADD_EMAIL,
  email: email,
});
export const asyncData = cart => ({
  type: ASYN_DATA,
  data: cart,
});
