import {
  DELETE_CART,
  ADD_CART,
  ADD_EMAIL,
  ASYN_DATA,
  ITEM_QUNATITY,
  ORDER_DETAILS,
  CHECK_ITEM,
  ORDER_PLACE,
} from './Type';

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
export const addQunatity = cart => ({
  type: ITEM_QUNATITY,
  data: cart,
});
export const addOrderDetails = cart => ({
  type: ORDER_DETAILS,
  data: cart,
});
export const checkITEM = cart => ({
  type: CHECK_ITEM,
  data: cart,
});
export const orderPlace = cart => ({
  type: ORDER_PLACE,
  data: cart,
});
