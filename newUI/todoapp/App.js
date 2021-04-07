
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddWorkPage from './pages/AddWorkPage';
import Homepage from './pages/Homepage';
import { TodoProvider } from './context/todo'

const Stack = createStackNavigator();

function App(){
  return(
    <TodoProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
            <Stack.Screen name="Home" component={Homepage} />
            <Stack.Screen name="AddWorkPage" component={AddWorkPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </TodoProvider>
  )
}
export default App;
