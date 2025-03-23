import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'

const ChildComponent = React.memo(({ handleClick }) => {
  console.log('Child component re-rendered')
  return (
    <div>
      <button
        className="px-3 py-2 bg-blue-500 text-white rounded mr-4 my-4"
        onClick={handleClick}
      >
        Click Me - Child Component
      </button>
    </div>
  )
})

ChildComponent.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

ChildComponent.displayName = 'ChildComponent'

const ParentComponent = () => {
  const [count, setCount] = useState(0)
  // useCallback ensures handleClick has the same reference unless count changes
  const handleClick = useCallback(() => {
    console.log('Button clicked from Child Component!')
  }, [])

  return (
    <div className="flex flex-col items-center">
      <h2>Count: {count}</h2>
      <button
        className="px-3 py-2 bg-blue-500 text-white rounded mr-4 my-4"
        onClick={() => setCount(count + 1)}
      >
        Increment Counter - Parent Component
      </button>
      <ChildComponent handleClick={handleClick} />
    </div>
  )
}

export default ParentComponent
