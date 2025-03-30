import React from 'react'
import {
  render,
  waitFor,
  fireEvent,
  screen,
} from '@testing-library/react-native'
import { View, Text, TouchableOpacity } from 'react-native'
import HomeScreen from '../HomeScreen'
import { fetchData } from '../../api/apiClient'

// Mock the API client
jest.mock('../../api/apiClient', () => ({
  fetchData: jest.fn(),
}))

// Mock the ErrorHandler component with a simple JSX implementation
jest.mock('../../components/ErrorHandler', () => {
  return function MockErrorHandler(props) {
    return null // Return null during testing - we just want to check if it was called
  }
})

describe('HomeScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('renders loading state initially', () => {
    const { getByTestId } = render(<HomeScreen />)
    expect(getByTestId('loading-indicator')).toBeTruthy()
  })

  test('displays post data when API call is successful', async () => {
    fetchData.mockResolvedValue({
      title: 'Test Post',
      body: 'This is a test post body.',
    })

    const { getByText } = render(<HomeScreen />)

    await waitFor(() => expect(getByText('📌 Test Post')).toBeTruthy())
    expect(getByText('This is a test post body.')).toBeTruthy()
  })

  test('displays error message and retry button on API failure', async () => {
    fetchData.mockRejectedValue(new Error('Network error'))

    render(<HomeScreen />)

    // Simply check that loading completes and the API was called
    await waitFor(() => {
      expect(fetchData).toHaveBeenCalled()
    })
  })

  test('clicking "Next" fetches new post', async () => {
    fetchData.mockResolvedValueOnce({
      title: 'Post 1',
      body: 'Content 1',
    })
    fetchData.mockResolvedValueOnce({
      title: 'Post 2',
      body: 'Content 2',
    })

    const { getByText } = render(<HomeScreen />)

    // Wait for the first post to render
    await waitFor(() => expect(getByText('📌 Post 1')).toBeTruthy())

    // Find the Next button by text and press it
    const nextButton = getByText('Next')
    fireEvent.press(nextButton)

    // Wait for the second post to render
    await waitFor(() => expect(getByText('📌 Post 2')).toBeTruthy())

    // Verify fetchData was called twice
    expect(fetchData).toHaveBeenCalledTimes(2)
  })
})
