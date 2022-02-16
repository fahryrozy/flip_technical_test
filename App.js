import React, {useState, useEffect, useRef} from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';

import Routes from './src/routes/';
import store from './src/store';

const App = () => {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
