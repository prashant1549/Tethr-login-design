import {
  DELETE_CART,
  ADD_CART,
  ADD_EMAIL,
  ASYN_DATA,
  ORDER_DETAILS,
  ITEM_QUNATITY,
  CHECK_ITEM,
  ORDER_PLACE,
} from '../Action/Type';

const initialState = {
  cart: [],
  email: null,
  orderDetails: [],
  itemPlace: [],
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        cart: state.cart.concat(action.data),
      };
    case DELETE_CART:
      return {
        ...state,
        cart: state.cart.filter(n1 => n1 !== action.id),
      };
    case ADD_EMAIL:
      return {
        ...state,
        email: action.email,
      };

    case ASYN_DATA:
      return {
        ...state,
        cart: action.data,
      };
    case ORDER_DETAILS:
      return {
        ...state,
        orderDetails: state.orderDetails.concat(action.data),
      };
    case ITEM_QUNATITY:
      return {
        ...state,
        cart: action.data,
      };
    case CHECK_ITEM:
      state.cart = action.data;
      return {
        ...state,
      };
    case ORDER_PLACE:
      return {
        ...state,
        orderDetails: action.data,
      };
    default:
      return state;
  }
};

export default TodoReducer;
