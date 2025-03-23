import React, { useState } from 'react'
import { fetchData, sendData } from '../api/api'

const AxiosExample = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Fetch post data
  const handleFetchData = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetchData('/posts/1') // Fetch a sample post
      setData(response)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // Send new post data
  const handleSendData = async () => {
    setLoading(true)
    setError(null)

    try {
      const newPost = {
        title: 'New Post',
        body: 'This is a test post created using Axios.',
        userId: 1,
      }
      const response = await sendData('/posts', newPost) // Send a new post
      setData(response)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">API Demo with Axios</h2>

      <button
        className="px-4 py-2 bg-blue-500 text-white rounded mr-4"
        onClick={handleFetchData}
      >
        Fetch Data
      </button>

      <button
        className="px-4 py-2 bg-green-500 text-white rounded"
        onClick={handleSendData}
      >
        Send Data
      </button>

      {loading && <p className="mt-4 text-blue-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">Error: {error}</p>}
      {data && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="font-semibold">{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  )
}

export default AxiosExample
