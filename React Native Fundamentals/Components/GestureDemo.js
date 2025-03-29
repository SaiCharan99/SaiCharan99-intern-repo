import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated'

const GestureDemo = () => {
  const offset = useSharedValue({ x: 0, y: 0 })
  const start = useSharedValue({ x: 0, y: 0 })

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offset.value.x },
        { translateY: offset.value.y },
      ],
    }
  })

  const gesture = Gesture.Pan()
    .onStart(() => {
      start.value = { x: offset.value.x, y: offset.value.y }
    })
    .onUpdate((event) => {
      offset.value = {
        x: start.value.x + event.translationX,
        y: start.value.y + event.translationY,
      }
    })
    .onEnd(() => {
      offset.value = {
        x: withSpring(offset.value.x),
        y: withSpring(offset.value.y),
      }
    })

  return (
    <GestureHandlerRootView style={styles.container}>
      <Text style={styles.instructionText}>Pan (drag) the square:</Text>
      <View style={styles.gestureContainer}>
        <GestureDetector gesture={gesture}>
          <Animated.View style={[styles.box, animatedStyles]} />
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  instructionText: {
    marginBottom: 10,
  },
  gestureContainer: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: '#3498db',
    borderRadius: 8,
  },
})

export default GestureDemo
