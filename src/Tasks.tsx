import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import Task from './Task';

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
          padding: 24,
          justifyContent: 'space-between',
          borderWidth: 2
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
        {tasks.map((elem, key) => (
         <Task key={key} elem={elem}/>
        ))}
      </View>
    </View>
  );
};

export default Tasks;
