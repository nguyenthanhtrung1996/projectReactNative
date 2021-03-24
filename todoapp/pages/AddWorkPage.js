import React, { useEffect, useState } from 'react';
import { Text, View, Button, TextInput, TouchableHighlight } from 'react-native';
import { stylesAddWorkPage } from './controller/style'

function AddWorkPage({ route, navigation }) {
    const [ textWork, setTextWork ] = useState()
    const [ textTitle, setTextTitle ] = useState()
    useEffect(() => {
      console.log(route.params);
      if(route.params !== undefined){
        setTextWork(route.params.item.work);
        setTextTitle(route.params.item.title);
      }
    }, []);
    return (
        <View style={stylesAddWorkPage.container}>
          {/* <View style={stylesAddWorkPage.Input}> */}
            <TextInput 
              style={stylesAddWorkPage.InputTitle} 
              value = {textTitle ? textTitle : null} 
              onChangeText = {(text) => {setTextTitle(text)}}
              placeholder='Title'
              // numberOfLines={auto}
              multiline={true}
            />
            <TextInput 
              style={stylesAddWorkPage.InputWork} 
              value = {textWork ? textWork : null} 
              onChangeText = {(text) => {setTextWork(text)}}
              placeholder='Content'
              multiline={true}
            />
            <View style={stylesAddWorkPage.ButtonView}>
              <TouchableHighlight 
              style={stylesAddWorkPage.Button}
              onPress={() => navigation.navigate('ToDoScreen', { id: route.params ? route.params.item.id : undefined , title: textTitle, work: textWork })}
              >
                <Text style={stylesAddWorkPage.Text}>Add</Text>
              </TouchableHighlight>
            </View>
        </View>
          
    );
  }
export default AddWorkPage;