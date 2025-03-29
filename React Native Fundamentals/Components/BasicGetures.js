import React, { useRef } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Animated,
  PanResponder,
  InteractionManager,
} from 'react-native'
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler'
import Reanimated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated'

const BasicGestures = () => {
  // Animated Value for opacity
  const fadeAnim = useRef(new Animated.Value(0)).current

  // Shared Value for Reanimated
  const offset = useSharedValue(0)

  // Pan Responder for basic gesture handling
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        // Custom logic for movement tracking
        console.log('Moving', gestureState.dx, gestureState.dy)
      },
      onPanResponderRelease: () => {
        // Reset or trigger action on release
      },
    }),
  ).current

  // Fade in animation
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start()
  }

  // Reanimated animated style
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring(offset.value) }],
    }
  })

  // Long press handler
  const handleLongPress = () => {
    InteractionManager.runAfterInteractions(() => {
      // Perform heavy task after interactions complete
      console.log('Long press handled')
    })
  }

  // Gesture handler for advanced gestures
  const onGestureEvent = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      offset.value = event.nativeEvent.translationX
    }
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <View {...panResponder.panHandlers}>
        <Animated.View
          style={[styles.animatedBox, { opacity: fadeAnim }]}
          onLayout={fadeIn}
        >
          <Text>Basic Animated View</Text>
        </Animated.View>
      </View>

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Reanimated.View style={[styles.reanimatedBox, animatedStyle]}>
          <Text>Reanimated Gesture Box</Text>
        </Reanimated.View>
      </PanGestureHandler>

      <View onTouchStart={handleLongPress} style={styles.longPressArea}>
        <Text>Long Press Area</Text>
      </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  animatedBox: {
    width: 200,
    height: 100,
    backgroundColor: 'powderblue',
    marginVertical: 10,
  },
  reanimatedBox: {
    width: 200,
    height: 100,
    backgroundColor: 'lightgreen',
    marginVertical: 10,
  },
  longPressArea: {
    width: 200,
    height: 100,
    backgroundColor: 'salmon',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default BasicGestures
