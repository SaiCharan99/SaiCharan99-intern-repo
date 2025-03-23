import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  status: 'idle',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    reset: (state) => {
      state.value = 0
    },
  },
})

// Export actions
export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions

// Export selectors
export const selectCount = (state) => state.counter.value

export default counterSlice.reducer
