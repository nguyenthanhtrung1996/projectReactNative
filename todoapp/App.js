import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ToDoScreen from './components/ToDoScreen';
import { TodoProvider } from './context/todo';
import AddWorkPage from './pages/AddWorkPage';
import Reminder from './pages/Reminder';


const Stack = createStackNavigator();



export default function App() {
  return (
    <TodoProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="ToDoScreen" component={ToDoScreen} />
          <Stack.Screen name="AddWorkPage" component={AddWorkPage} />
          <Stack.Screen name='Reminder' component={Reminder} />
        </Stack.Navigator>
      </NavigationContainer>
    </TodoProvider> 
  );
}
