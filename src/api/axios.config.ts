import axios from 'axios';

// Create axios instance with base URL
const axiosInstance = axios.create({
    baseURL: 'https://vanurtech-backend-admin-2-8vsl.onrender.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
});


// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // You can add auth tokens here if needed in the future
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Recursive function to strip out em-dashes and en-dashes from any database response string
const sanitizeStrings = (obj: any): any => {
  if (typeof obj === 'string') {
    return obj.replace(/—/g, ' ').replace(/–/g, ' ');
  } else if (Array.isArray(obj)) {
    return obj.map(sanitizeStrings);
  } else if (obj !== null && typeof obj === 'object') {
    const newObj: any = {};
    for (const key in obj) {
      newObj[key] = sanitizeStrings(obj[key]);
    }
    return newObj;
  }
  return obj;
};

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      response.data = sanitizeStrings(response.data);
    }
    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response) {
      // Server responded with error status
      console.error('API Error:', error.response.data);
    } else if (error.request) {
      // Request was made but no response received
      console.error('Network Error:', error.message);
    } else {
      // Something else happened
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
