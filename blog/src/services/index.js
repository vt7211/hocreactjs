import axios from 'axios';

export const api = axios.create({
  // baseURL: 'http://learning-reactjs.xyz/wp-api/wp-json/',
  baseURL: 'http://api.learning-reactjs.xyz/wp-json/',
});

