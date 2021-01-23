export const setTheme = (payload = 'DARK') => {
  return {
    type: 'SET_THEME',
    payload
  };
};
