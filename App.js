import React, {useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput,TouchableOpacity, Keyboard } from 'react-native';
import Task from './compenents/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      {/* Tâche du jour */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Tâche du jour</Text>
        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task key={index} text={item}/>
                </TouchableOpacity>
              )
            })
          }
        </View>

      </View>

      {/* Ecrire une tâche */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
          <TextInput style={styles.input} placeholder={'Rédiger une tâche'} value={task} onChangeText={text => setTask(text)} />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },

  items: {
    marginTop: 30,
  },

  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: "#FFF",
    borderRadius: 100,
    borderColor: '#C0C0C0',
    borderWidth: 0.2,
  },

  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 0.2,
  },

  addText: {

  },

});
