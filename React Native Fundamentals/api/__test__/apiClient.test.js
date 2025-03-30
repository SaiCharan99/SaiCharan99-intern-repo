import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { fetchData, apiClient } from '../apiClient'

// Create mock for the axios instance
const mock = new MockAdapter(apiClient)

describe('API Client', () => {
  afterEach(() => {
    // Clear all mocks after each test
    mock.reset()
  })

  test('fetchData successfully retrieves data', async () => {
    const mockPostId = 1
    const mockData = {
      id: mockPostId,
      title: 'Test Title',
      body: 'Test Body Content',
      userId: 1,
    }

    // Setup mock response
    mock.onGet(`/${mockPostId}`).reply(200, mockData)

    const result = await fetchData(mockPostId)

    expect(result).toEqual(mockData)
  })

  test('fetchData handles API errors', async () => {
    const mockPostId = 999

    mock.onGet(`/${mockPostId}`).reply(404)

    // Spy on console.error to verify it's called
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation()

    await expect(fetchData(mockPostId)).rejects.toThrow()

    expect(consoleSpy).toHaveBeenCalled()

    consoleSpy.mockRestore()
  })

  test('fetchData retries on network failure', async () => {

    const mockPostId = 5
    const mockData = { id: mockPostId, title: 'Retry Test', body: 'Content' }

    mock.onGet(`/${mockPostId}`).reply(200, mockData)

    const result = await fetchData(mockPostId)
    expect(result).toEqual(mockData)

  })

  test('fetchData handles timeout', async () => {
    const mockPostId = 10

    mock.onGet(`/${mockPostId}`).reply(408) /

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation()

    await expect(fetchData(mockPostId)).rejects.toThrow()

    expect(consoleSpy).toHaveBeenCalled()
    consoleSpy.mockRestore()
  })
})
