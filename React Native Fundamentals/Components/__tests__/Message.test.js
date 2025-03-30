import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import Message from '../Message'

test('renders the message component correctly', () => {
  const { getByTestId } = render(<Message />)
  expect(getByTestId('message-text').props.children).toBe('Hello, World!')
})

test('updates the message when button is pressed', () => {
  const { getByTestId, getByText } = render(<Message />)
  const button = getByText('Update Message')
  fireEvent.press(button)
  expect(getByTestId('message-text').props.children).toBe('Message Updated!')
})
