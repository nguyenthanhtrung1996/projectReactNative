import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { stylesSettingScreen } from './controller/style';
function SettingScreen(){
    const deleteAsyncStorage = async (key) => {
        try {
            await AsyncStorage.clear()
            alert('Storage successfully cleared!')
          } catch (e) {
            alert('Failed to clear the async storage.')
          }
    }
    return(
     <TouchableOpacity
     style={stylesSettingScreen.button}
     onPress = { () => deleteAsyncStorage('CartsItems')}
   >
     <Text style={{ color: 'white'}}>Delete AsyncStorage</Text>
   </TouchableOpacity>
    )
}

export default SettingScreen;