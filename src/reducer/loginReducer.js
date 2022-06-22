import { LOGIN, SET_EMAIL, SET_PASSWORD } from '../action/index';

export const initialState = {
  isLogin: false,
  email: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        isLogin: action.payload.isLogin,
      });

    case SET_EMAIL:
      return Object.assign({}, state, {
        email: action.payload.email,
      });

    case SET_PASSWORD:
      return Object.assign({}, state, {
        password: action.payload.password,
      });

    default:
      return state;
  }
};

export default loginReducer;
