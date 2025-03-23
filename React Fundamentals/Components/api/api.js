import axios from 'axios'

// Create an Axios instance
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Public test API
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
  timeout: 5000, // Set request timeout to 5 seconds
})

// Request interceptor for authentication
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken') // Retrieve token from local storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

// Function to fetch data with optional params
export const fetchData = async (endpoint, params = {}) => {
  const controller = new AbortController() // Request cancellation support
  const signal = controller.signal

  try {
    const response = await api.get(endpoint, { params, signal })
    return response.data
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network error')
  }
}

// Function to send a POST request
export const sendData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data)
    return response.data
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network error')
  }
}

export default api
