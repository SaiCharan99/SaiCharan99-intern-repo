// src/components/Counter.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../../redux/counterSlice';
import Counter from '../Counter';
import CounterMessage from '../CounterMessage';

describe('Counter component with Redux', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        counter: counterReducer,
      },
    });
  });

  test('should render Counter with initial value', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    // Find the counter value by its location in the DOM
    const countDisplay = screen.getByText('0');
    expect(countDisplay).toBeInTheDocument();
  });

  test('should increment and decrement the counter', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    // Find buttons by their aria-label attributes
    const incrementButton = screen.getByLabelText('Increment value');
    const decrementButton = screen.getByLabelText('Decrement value');
    
    // Initial value check
    expect(screen.getByText('0')).toBeInTheDocument();
    
    // Test increment
    fireEvent.click(incrementButton);
    expect(screen.getByText('1')).toBeInTheDocument();
    
    // Test decrement
    fireEvent.click(decrementButton);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('should add amount when Add Amount button is clicked', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    // Find the Add Amount button
    const addAmountButton = screen.getByText('Add Amount');
    
    // Initial value check
    expect(screen.getByText('0')).toBeInTheDocument();
    
    // Click Add Amount (should add 2 based on default input)
    fireEvent.click(addAmountButton);
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  test('should reset counter when Reset button is clicked', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    // Find the increment and reset buttons
    const incrementButton = screen.getByLabelText('Increment value');
    const resetButton = screen.getByText('Reset');
    
    // Increment several times
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByText('3')).toBeInTheDocument();
    
    // Reset
    fireEvent.click(resetButton);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('integration test with CounterMessage component', () => {
    render(
      <Provider store={store}>
        <Counter />
        <CounterMessage />
      </Provider>
    );

    const incrementButton = screen.getByLabelText('Increment value');
    const resetButton = screen.getByText('Reset');
    
    // Initial message
    expect(screen.getByText('Starting fresh at zero.')).toBeInTheDocument();
    
    // Click increment several times to get to the "on a roll" message
    for (let i = 0; i < 15; i++) {
      fireEvent.click(incrementButton);
    }
    
    // Should show the roll message for count between 10-20
    expect(screen.getByText("You're on a roll!")).toBeInTheDocument();
    
    // Reset and check message
    fireEvent.click(resetButton);
    expect(screen.getByText('Starting fresh at zero.')).toBeInTheDocument();
  });
});