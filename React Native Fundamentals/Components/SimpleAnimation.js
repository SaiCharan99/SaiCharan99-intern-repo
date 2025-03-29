import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import GestureDemo from './GestureDemo'
import AnimationDemo from './AnimationDemo'

const SimpleAnimation = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Focus Bear Gestures & Animations</Text>

      <Text style={styles.sectionTitle}>Gesture Demo:</Text>
      <GestureDemo />

      <Text style={styles.sectionTitle}>Animation Demo:</Text>
      <AnimationDemo />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
})

export default SimpleAnimation
