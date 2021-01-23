export const increment = () => (dispatch, getState) => {
  window.abc = getState();
  dispatch({
    type: 'INCREMENT',
  });
};

export const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};
