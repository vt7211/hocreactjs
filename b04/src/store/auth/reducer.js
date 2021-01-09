import { ACT_SET_LOGIN } from './actions';

const initAuthState = {
  isLogin: false,
  currentUser: {
    username: 'Admin'
  }
}

export default function reducer(state = initAuthState, action) {
  
  switch (action.type) {
    case ACT_SET_LOGIN:
      state.isLogin = action.payload.isLogin;
      return state;
    default:
      return state;
  }

  
}