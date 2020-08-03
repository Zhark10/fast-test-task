import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import Tasks from './src/Tasks';
import {configurateStore} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  (console as any).disableYellowBox = true;
  const {store, persistor} = configurateStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Tasks />
          </ScrollView>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
