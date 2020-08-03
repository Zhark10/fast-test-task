import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { useStopwatch } from 'react-timer-hook';
import { ITask } from './redux/modules/tasks/types';
import { useDispatch } from 'react-redux';
import { TasksActions } from './redux/modules/tasks/actions';

export interface Props {
  task: ITask;
}

const Task: React.FC<Props> = ({task}) => {
  const {seconds} = useStopwatch({autoStart: false});

  const dispatch = useDispatch()

  const removeTask = () => {
    dispatch(TasksActions.removeTask(task))
  };

  return (
    <View
      style={{
        width: '100%',
        padding: 16,
        backgroundColor: 'rgba(0,0,0,.12)',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View>
        <Text>Task: {task.name}</Text>
        <Text>Time: {task.time}</Text>
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
        onPress={removeTask}>
        <Text
          style={{
            color: '#fff',
          }}>
          X
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Task;
