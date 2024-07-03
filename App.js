import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <ImageBackground
      source={require('../ReactZ/image/bckim.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.centeredContent}>
          <TextInput
            style={styles.input}
            placeholder="Add a new task"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <Button title="Add Task" onPress={addTask} />
        </View>
        <View>
          {tasks.map((taskItem, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => toggleTask(index)}
              style={taskItem.completed ? styles.completedTask : styles.task}
            >
              <Text>{taskItem.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  centeredContent: {
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  task: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
    marginTop: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  completedTask: {
    backgroundColor: 'rgba(224, 224, 224, 0.7)',
    padding: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    textDecorationLine: 'line-through',
  },
});

export default App;
