import React from 'react';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import AppNavigation from './src/navigation';
import store from './src/services/redux';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
