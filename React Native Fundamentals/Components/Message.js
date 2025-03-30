import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Message = () => {
  const [message, setMessage] = useState('Hello, World!')

  return (
    <View style={styles.container}>
      <Text testID="message-text" style={styles.text}>
        {message}
      </Text>
      <Button
        title="Update Message"
        onPress={() => setMessage('Message Updated!')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
})

export default Message
