import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ValueProvider from './contexts/ValueProvider';
import CartStackScreen from './routes/CartStack';
import CategoriesStackScreen from './routes/CategoriesStackScreen';
import SettingsStackScreen from './routes/SettingsStackScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <ValueProvider>
      <NavigationContainer>
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Home') {
                      return (
                        <Icon
                          name={
                            focused
                              ? 'information-circle-outline'
                              : 'home-outline'
                          }
                          size={size}
                          color={color}
                        />
                      );
                    } else if (route.name === 'Settings') {
                      return (
                        <Icon
                          name={focused ? 'android-list-box' : 'android-list'}
                          size={size}
                          color={color}
                        />
                      );
                    } else if ( route.name ==="Cart") {
                      return (
                        // <ion-icon name="cart-outline"></ion-icon>
                        <Icon 
                          name={focused ? 'cart' : 'cart-outline'}
                          size={size}
                          color={color}
                        />
                      )
                    }
                  },
                })}
                tabBarOptions={{
                  activeTintColor: '#2f95dc',
                  inactiveTintColor: 'gray',
                }}
              >
                    <Tab.Screen name="Home" component={CategoriesStackScreen}  />
                    <Tab.Screen name="Cart" component={CartStackScreen}/>
                    <Tab.Screen name="Settings" component={SettingsStackScreen} />
              </Tab.Navigator>
      </NavigationContainer>
    </ValueProvider>
  );
  
}



export default App;