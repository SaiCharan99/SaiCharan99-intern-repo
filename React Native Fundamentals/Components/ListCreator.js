import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { Button } from 'react-native-paper'

const { width, height } = Dimensions.get('window')

function ListCreator() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    console.log('Width of device is: ', width)
    console.log('Height of device is: ', height)

    if (task.trim() !== '') {
      setTasks([...tasks, task])
      setTask('')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={task}
          onChangeText={setTask}
          style={styles.input}
          placeholder="Enter a task"
          onSubmitEditing={addTask}
        />
        <Button mode="contained" onPress={addTask}>
          Add
        </Button>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.taskItem}>{item}</Text>}
      />
      <View
        style={{
          width: width * 0.8,
          height: height * 0.3,
          backgroundColor: 'lightblue',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>Responsive Layout</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },

  taskItem: {
    fontSize: 16,
    padding: 8,
  },
})

export default ListCreator
