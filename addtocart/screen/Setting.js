import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import SettingScreen from '../components/SettingScreen';
import ValueContext from '../contexts/ValueContext';

function SettingsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings screen</Text>
        <SettingScreen />
      </View>
    );
}

export default SettingsScreen;
  