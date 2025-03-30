import axios from 'axios'
import axiosRetry from 'axios-retry'

const API_BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Enable retry mechanism
axiosRetry(apiClient, { retries: 3, retryDelay: axiosRetry.exponentialDelay })

// Fetch specific post by ID
export const fetchData = async (id) => {
  try {
    const response = await apiClient.get(`/${id}`)
    return response.data
  } catch (error) {
    console.error(`API Error for post ID ${id}:`, error.message)
    throw error
  }
}
