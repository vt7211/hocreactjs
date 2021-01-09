
// action type
export const ACT_SET_LOGIN = 'ACT_SET_LOGIN';

// action creator
export function actSetLogin(value) {
  console.log('1. actSetLogin', value);
  // action
  return {
    type: ACT_SET_LOGIN,
    payload: {
      isLogin: value
    }
  }
}