import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const getAllBuses = (page = 0, size = 3) =>
  axios.get(`${BASE_URL}/bus?page=${page}&size=${size}`);

export const getBusById = (id) =>
  axios.get(`${BASE_URL}/bus/${id}`);
