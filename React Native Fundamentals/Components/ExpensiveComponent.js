// ExpensiveComponent.js
import React, { useMemo } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ChildComponent from './ChildComponent'

const ExpensiveComponent = ({ number }) => {
  const computedValue = useMemo(() => {
    console.log('Recomputing value...')
    return number * 2
  }, [number])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Computed Value:</Text>
      <Text style={styles.value}>{computedValue}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 24,
    color: '#2d88ff',
  },
})

export default ExpensiveComponent
