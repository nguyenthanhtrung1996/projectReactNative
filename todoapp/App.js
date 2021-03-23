import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
// import { Provider } from 'react-redux';
import { stylesApp } from './controller/style';
import HomePage from './pages/HomePage';
import ToDoScreen from './components/ToDoScreen'
import AddWorkPage from './pages/AddWorkPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { TodoProvider } from './context/todo'

const Stack = createStackNavigator();

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default function App() {

  const [ view, setView ] = useState(false);
  // function changeFlex(boolean){
  //   console.log(boolean);
  //   setView(boolean);
  // }

  
 
  return (
    // <Provider store={store}>
    <TodoProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="ToDoScreen" component={ToDoScreen} />
          <Stack.Screen name="AddWorkPage" component={AddWorkPage} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <HomePage /> */}
      {/* <View style={stylesApp.container}>
        <View style={stylesApp.containerTitle}>
          <Text style={stylesApp.title}>todos</Text>
        </View>
        <View style={stylesApp.container1}>
          <HomePage changeFlex={changeFlex}/>
        </View>
        <View style={view ? stylesApp.displayNone : stylesApp.container2} />
      </View> */}
    </TodoProvider> 
    // </Provider>
  );
}
