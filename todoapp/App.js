import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import HomePage from './pages/HomePage';
import store from './store';

import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {

 
  return (
    <Provider store={store}>
      <View style={{flex: 1, justifyContent:'flex-end',backgroundColor: '#ecf0f1',}}>
        <Text style={styles.title}>todos</Text>
      </View>
      <View style={styles.container}>
        <HomePage />
      </View>
      <View style={styles.container2} />
    </Provider>
  );
}

const styles = StyleSheet.create({
  title:{
    // flex: 1,
    fontSize: 64,
    fontWeight: '500',
    color: '#74b9ff',
    // backgroundColor: '#ecf0f1',
    width: '100%',
    textAlign: 'center',
    // textAlignVertical: 'center',
    // justifyContent:'center'
  },
  container: {
    flex: 2,
    backgroundColor: '#ecf0f1',
    paddingHorizontal: 20,
  },
  container2: {
    flex: 2,
    backgroundColor: '#ecf0f1',
  }
})