import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { useStopwatch } from 'react-timer-hook';
import { ITask } from './redux/modules/tasks/types';

export interface Props {
  elem: ITask;
}

const Task: React.FC<Props> = ({elem}) => {
  const {seconds} = useStopwatch({autoStart: false});

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
        onPress={() => {}}>
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
