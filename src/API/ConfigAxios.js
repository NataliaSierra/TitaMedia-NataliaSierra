import axios from 'axios';

const baseURL = 'https://dummyapi.io/data/v1';

const APP_ID = '63eb1001715aec4ed446124f';

export const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: { 'app-id': APP_ID },
});
