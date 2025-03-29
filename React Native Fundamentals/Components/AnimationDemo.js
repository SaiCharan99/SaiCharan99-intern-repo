import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
} from 'react-native-reanimated'

const AnimationDemo = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const rotation = useSharedValue(0)
  const scale = useSharedValue(1)

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }, { scale: scale.value }],
    }
  })

  const startAnimation = () => {
    setIsAnimating(true)
    rotation.value = withRepeat(withTiming(360, { duration: 2000 }), 3, true)
    scale.value = withRepeat(withSpring(1.2), 6, true)

    // Reset after animation completes
    setTimeout(() => {
      rotation.value = withTiming(0)
      scale.value = withTiming(1)
      setIsAnimating(false)
    }, 6000)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.instructionText}>Tap the button to animate:</Text>
      <View style={styles.animationContainer}>
        <Animated.View style={[styles.box, animatedStyles]} />
      </View>
      <Button
        title={isAnimating ? 'Animating...' : 'Start Animation'}
        onPress={startAnimation}
        disabled={isAnimating}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  instructionText: {
    marginBottom: 10,
  },
  animationContainer: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 10,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#e74c3c',
    borderRadius: 8,
  },
})

export default AnimationDemo
