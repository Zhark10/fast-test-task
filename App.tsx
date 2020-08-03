import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import {Provider} from 'react-redux';

import Tasks from './src/Tasks';
import { configurateStore } from './src/redux/store';

const App = () => {
  (console as any).disableYellowBox = true;
  const {store} = configurateStore();
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Tasks />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
