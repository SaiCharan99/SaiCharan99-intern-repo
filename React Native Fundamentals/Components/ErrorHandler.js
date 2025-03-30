import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const ErrorHandler = ({ error, onRetry }) => {
  if (!error) return null

  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>⚠️ {error.message}</Text>
      <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
        <Text style={styles.retryText}>Retry</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffdddd',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  errorText: {
    color: '#d32f2f',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  retryButton: {
    backgroundColor: '#d32f2f',
    padding: 10,
    borderRadius: 5,
  },
  retryText: {
    color: '#fff',
    fontSize: 16,
  },
})

export default ErrorHandler
