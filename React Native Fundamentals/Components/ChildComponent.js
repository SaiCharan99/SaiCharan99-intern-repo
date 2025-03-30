import React from 'react'
import { Button, View, StyleSheet } from 'react-native'

const ChildComponent = ({ increment }) => {
  console.log('Rendering ChildComponent')
  return (
    <View style={styles.container}>
      <Button title="Increment Count" onPress={increment} color="#2d88ff" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'center',
  },
})

export default ChildComponent
