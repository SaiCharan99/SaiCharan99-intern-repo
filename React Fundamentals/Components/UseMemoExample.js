import React, { useState, useMemo } from 'react'

const UseMemoExample = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])
  const [count, setCount] = useState(0)

  // Function to add a new random number to our list
  const addNumber = () => {
    const newNumber = Math.floor(Math.random() * 100) + 1
    setNumbers([...numbers, newNumber])
  }

  // This calculation will only run when the numbers array changes
  const expensiveCalculation = useMemo(() => {
    console.log('Calculating sum...')

    // Simulate an expensive calculation with a delay
    const startTime = performance.now()

    // Calculate the sum and squares of all numbers
    const sum = numbers.reduce((total, num) => total + num, 0)
    const squares = numbers.map((num) => num * num)

    const endTime = performance.now()
    return {
      sum,
      squares,
      calculationTime: endTime - startTime,
    }
  }, [numbers]) // Only recalculate when numbers array changes

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Simple useMemo Example</h1>

      <div className="mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded mr-4"
          onClick={() => setCount(count + 1)}
        >
          Increment Counter: {count}
        </button>
        <p className="text-sm text-gray-600">
          (This counter doesn't affect calculations)
        </p>
      </div>

      <div className="mb-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={addNumber}
        >
          Add Number
        </button>
        <p className="text-sm text-gray-600">
          (This will trigger recalculation)
        </p>
      </div>

      <div className="mt-4">
        <h2 className="font-bold">Current numbers:</h2>
        <p>{numbers.join(', ')}</p>
      </div>

      <div className="mt-4">
        <h2 className="font-bold">Calculation Results:</h2>
        <p>Sum: {expensiveCalculation.sum}</p>
        <p>Squares: {expensiveCalculation.squares.join(', ')}</p>
        <p>
          Calculation time: {expensiveCalculation.calculationTime.toFixed(2)} ms
        </p>
      </div>
    </div>
  )
}

export default UseMemoExample
