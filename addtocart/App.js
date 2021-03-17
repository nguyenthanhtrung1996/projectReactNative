import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ValueContext from './contexts/ValueContext';
import ValueProvider from './contexts/ValueProvider';
import CartStackScreen from './routes/CartStack';
import CategoriesStackScreen from './routes/CategoriesStackScreen';
import SettingsStackScreen from './routes/SettingsStackScreen';



const Tab = createBottomTabNavigator();



function App() {
  const context = useContext(ValueContext);
  
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
                        // <ion-icon name="home-outline"></ion-icon>
                        // <Icon name="rocket" size={30} color="#900" />
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
    // <View>
    //   <Text>Hello!!</Text>
    // </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
});


export default App;
// import React from 'react';
// import { StyleSheet, View, Text } from 'react-native'
// import CategoryListitem from './components/CategoryListitem'

// function App() {
//   return (
//     <View>
//       <CategoryListitem />
//       {/* <Text>Hello!!</Text> */}
//     </View>
//   )
// }

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'stretch',
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     paddingLeft: 16,
//     paddingRight: 16
//   },
// })