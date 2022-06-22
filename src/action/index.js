export const LOGIN = 'LOGIN';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';

export const login = (isLogin) => {
  return {
    type: LOGIN,
    payload: {
      isLogin,
    },
  };
};

export const setEmailData = (email) => {
  return {
    type: SET_EMAIL,
    payload: {
      email,
    },
  };
};

export const setPassword = (password) => {
  return {
    type: SET_PASSWORD,
    payload: {
      password,
    },
  };
};
