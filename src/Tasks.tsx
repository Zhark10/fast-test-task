import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TextInput,
} from 'react-native';

export interface ITask {
  name: string,
  time: number,
}

const Tasks = () => {
  const [task, setTask] = React.useState({})

  const onChangeText = (text: string) => {
    console.log(text)
  }

  return (
    <View style={{
      height: 1/4 * Dimensions.get('screen').height,
      width: '100%',
    }}>
      <TextInput
        autoFocus
        style={{}}
        onChangeText={onChangeText}
        // onEndEditing={onEndEditing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    
  },
  
});

export default Tasks;
