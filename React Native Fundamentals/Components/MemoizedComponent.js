// MemoizedComponent.js
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const MemoizedComponent = React.memo(({ text }) => {
  console.log('Rendering MemoizedComponent')
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#d4e4ff',
    marginBottom: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  text: {
    fontSize: 20,
    color: '#333',
    textAlign: 'center',
  },
})

export default MemoizedComponent
