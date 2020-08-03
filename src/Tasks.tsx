import React from 'react';
import {View, Dimensions, TextInput, Button} from 'react-native';
import Task from './Task';
import {ITask} from './redux/modules/tasks/types';
import {useDispatch, useSelector} from 'react-redux';
import {TasksActions} from './redux/modules/tasks/actions';
import {IState} from './redux/types/IState';

const Tasks = () => {
  const {tasks} = useSelector((state: IState) => state.tasks);
  const [task, setTask] = React.useState<ITask>({
    name: '',
    time: '0:0:0:0',
    isStarted: false,
  });

  const dispatch = useDispatch();

  const onChangeText = (text: string) => {
    setTask(prevState => ({...prevState, name: text}));
  };

  const createNewTask = () => {
    dispatch(TasksActions.addTask(task));
  };

  return (
    <View>
      <View
        style={{
          height: (1 / 4) * Dimensions.get('screen').height,
          width: '100%',
          padding: 24,
          justifyContent: 'space-between',
          borderWidth: 2,
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
          <Task key={key} task={elem} />
        ))}
      </View>
    </View>
  );
};

export default Tasks;
