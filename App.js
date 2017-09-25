import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import store from './src/store';
import Router from './src/Router';

class App extends Component {

componentWillMount() {
  const config = {

    apiKey: 'AIzaSyD8PZpH1jeGvJELtBlElCvBGIQv9A6v_QU',
    authDomain: 'reactnative-a553d.firebaseapp.com',
    databaseURL: 'https://reactnative-a553d.firebaseio.com',
    projectId: 'reactnative-a553d',
    storageBucket: 'reactnative-a553d.appspot.com',
    messagingSenderId: '100244985163'
};
  firebase.initializeApp(config);
}

  render() {
    //set the status bar to the light theme other color options are
    //'default', 'dark-content' and 'light-content'
    StatusBar.setBarStyle('dark-content', true);
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
