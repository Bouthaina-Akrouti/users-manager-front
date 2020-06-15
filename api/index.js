import axios from 'axios';

export default axios.create({
  baseURL: `http://localhost:8500/`,
  headers: {
    Accept: 'application/json',
  },
});