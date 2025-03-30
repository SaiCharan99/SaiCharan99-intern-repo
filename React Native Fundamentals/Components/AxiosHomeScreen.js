import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { fetchData } from '../api/apiClient'
import ErrorHandler from '../components/ErrorHandler'

const HomeScreen = () => {
  const [postId, setPostId] = useState(1)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const loadData = async (id) => {
    setLoading(true)
    setError(null)
    try {
      const result = await fetchData(id)
      setData(result)
    } catch (err) {
      setError(err)
    }
    setLoading(false)
  }

  useEffect(() => {
    loadData(postId)
  }, [postId])

  const handleNext = () => {
    setPostId((prev) => (prev < 100 ? prev + 1 : 1)) // Reset to 1 after 100
  }

  if (loading) {
    return (
      <ActivityIndicator
        testID="loading-indicator"
        size="large"
        color="#6200ea"
        style={styles.loader}
      />
    )
  }

  return (
    <View style={styles.container}>
      {error ? (
        <ErrorHandler error={error} onRetry={() => loadData(postId)} />
      ) : (
        <>
          <Text style={styles.title}>📌 {data?.title}</Text>
          <Text style={styles.body}>{data?.body}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={handleNext}
            accessibilityRole="button"
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </>
      )}
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
  title: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6200ea',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loader: {
    marginTop: 50,
  },
})

export default HomeScreen
