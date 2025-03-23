import React from 'react'
import { useSelector } from 'react-redux'
import { selectCount } from '../redux/counterSlice'

const CounterMessage = () => {
  const count = useSelector(selectCount)

  let message = ''
  let messageColor = ''

  if (count < 0) {
    message = "You're in the negative zone!"
    messageColor = 'text-red-600'
  } else if (count === 0) {
    message = 'Starting fresh at zero.'
    messageColor = 'text-gray-600'
  } else if (count > 0 && count < 10) {
    message = 'Making progress!'
    messageColor = 'text-blue-600'
  } else if (count >= 10 && count < 20) {
    message = "You're on a roll!"
    messageColor = 'text-green-600'
  } else if (count >= 20) {
    message = 'Counter master! Keep going!'
    messageColor = 'text-purple-600 font-bold'
  }

  return (
    <div className="mt-4 p-3 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Counter Status</h3>
      <p className={`${messageColor}`}>{message}</p>
    </div>
  )
}

export default CounterMessage
