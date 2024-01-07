// axiosInstance.js

import axios from 'axios';
import { retrieveFromSessionStorage } from './sessionStorage';

// Create a custom Axios instance
const customAxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL, // Replace with your API base URL
});

// Add an interceptor to modify the request before it is sent
customAxiosInstance.interceptors.request.use((config) => {
  // Retrieve user data from sessionStorage
  const userData = retrieveFromSessionStorage('user');
  const { token } = userData
  // If user data exists and contains a token, add Authorization header to the request
  if (token) {
    config.headers.Authorization = `Bearer ${userData.token}`;
  }

  return config;
}, (error) => {
  // Do something with the request error
  return Promise.reject(error);
});

export default customAxiosInstance;
