import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';


function AddWorkPage({ route, navigation }) {
  console.log(route.params);
    return (
      <View style={{ flex: 1 }}>
        <TextInput 
          style={{flex:1}} 
          value = {route.params.item.work} 

        />
        <Button
          title="Go to Details... again"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }
export default AddWorkPage;