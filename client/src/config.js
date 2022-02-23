import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://mern-dsa-tracker.herokuapp.com/',
});
