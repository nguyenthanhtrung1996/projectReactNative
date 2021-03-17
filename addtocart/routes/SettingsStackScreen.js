import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screen/Setting'
import DetailsScreen from '../screen/DetailsScreen'

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

export default SettingsStackScreen;