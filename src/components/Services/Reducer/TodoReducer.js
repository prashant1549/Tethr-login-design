import {DELETE_CART, ADD_CART, ADD_EMAIL, ASYN_DATA} from '../Action/Type';

const initialState = {
  cart: [],
  email: null,
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
    default:
      return state;
  }
};

export default TodoReducer;
