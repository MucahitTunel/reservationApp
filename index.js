/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import React from 'react';
import configureStore from './src/store';
import { Provider } from 'react-redux';

const store = configureStore();

const reduxApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
)


AppRegistry.registerComponent(appName, () => reduxApp);
