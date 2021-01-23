const initialState = {
  theme: 'DARK',
};

const common = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload
      };
    default:
      return state;
  }
};

export default common;
