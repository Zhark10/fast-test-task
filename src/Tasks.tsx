import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';

export interface ITask {
  name: string;
  time: number;
}

const Tasks = () => {
  const [tasks, updatedTasksList] = React.useState<ITask[]>([]);
  const [task, setTask] = React.useState<ITask>({
    name: '',
    time: 0,
  });

  const onChangeText = (text: string) => {
    setTask({name: text, time: 0});
  };

  const createNewTask = () => {
    updatedTasksList((currentList) => [...currentList, task]);
  };

  const removeTask = (taskName: string) => {
    updatedTasksList((currentList) => currentList.filter(elem => elem.name !== taskName));
  }

  return (
    <View>
      <View
        style={{
          height: (1 / 4) * Dimensions.get('screen').height,
          width: '100%',
          padding: 16,
        }}>
        <TextInput
          autoFocus
          placeholder="Название таска"
          defaultValue=""
          style={{
            padding: 8,
            borderWidth: 2,
            borderRadius: 50,
            borderColor: 'rgba(0,0,0,.54)',
          }}
          onChangeText={onChangeText}
        />
        <Button onPress={createNewTask} title="новый task" />
      </View>
      <View>
        {tasks.map((elem) => (
          <View
            key={elem.name}
            style={{
              width: '100%',
              padding: 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text>Task: {elem.name}</Text>
              <Text>Time: {elem.time}</Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                borderRadius: 40,
                height: 32,
                width: 32,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => removeTask(elem.name)}>
              <Text
                style={{
                  color: '#fff',
                }}>
                X
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {},
});

export default Tasks;
