import counterReducer, {
  increment,
  decrement,
  incrementByAmount,
  reset,
  selectCount,
} from '../counterSlice'

describe('counter reducer', () => {
  const initialState = {
    value: 0,
    status: 'idle',
  }

  // Test initial state
  test('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    })
  })

  // Test increment action
  test('should handle increment', () => {
    const actual = counterReducer(initialState, increment())
    expect(actual.value).toEqual(1)
  })

  // Test decrement action
  test('should handle decrement', () => {
    const actual = counterReducer(initialState, decrement())
    expect(actual.value).toEqual(-1)
  })

  // Test incrementByAmount action
  test('should handle incrementByAmount', () => {
    const actual = counterReducer(initialState, incrementByAmount(5))
    expect(actual.value).toEqual(5)
  })

  // Test reset action
  test('should handle reset', () => {
    const modifiedState = {
      value: 10,
      status: 'idle',
    }
    const actual = counterReducer(modifiedState, reset())
    expect(actual.value).toEqual(0)
  })

  // Test selectors
  test('selectCount should return the count value', () => {
    const state = { counter: { value: 42 } }
    expect(selectCount(state)).toEqual(42)
  })

  // Test multiple actions in sequence
  test('should handle a sequence of actions', () => {
    let actual = counterReducer(initialState, increment())
    actual = counterReducer(actual, increment())
    actual = counterReducer(actual, decrement())
    actual = counterReducer(actual, incrementByAmount(10))

    expect(actual.value).toEqual(11)
  })

  // Test with different initial states
  test('actions work with non-zero initial state', () => {
    const nonZeroState = {
      value: 5,
      status: 'idle',
    }

    const actual = counterReducer(nonZeroState, increment())
    expect(actual.value).toEqual(6)
  })
})
