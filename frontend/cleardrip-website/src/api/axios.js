import axios from 'axios';

export default axios.create({
  baseURL: 'https://cleardrip-backend.onrender.com/api/v1',
});
