import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { stylesApp } from './controller/style';
import HomePage from './pages/HomePage';
import store from './store';

export default function App() {

 
  return (
    <Provider store={store}>
      <View style={stylesApp.container}>
        <View style={stylesApp.containerTitle}>
          <Text style={stylesApp.title}>todos</Text>
        </View>
        <View style={stylesApp.container1}>
          <HomePage />
        </View>
        <View style={stylesApp.container2} />
      </View>
    </Provider>
  );
}
