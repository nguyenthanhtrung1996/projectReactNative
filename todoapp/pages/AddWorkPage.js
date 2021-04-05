import React, { useContext, useEffect, useState } from 'react';
import { Text, TextInput, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TodoContext } from '../context/todo';
import { stylesAddWorkPage } from './controller/style';

function AddWorkPage({ route, navigation }) {
  const [ todoList, handlerOnChangActive, removeData, addWork, deleteToDo ] = useContext(TodoContext);
    const [ textWork, setTextWork ] = useState()
    const [ textTitle, setTextTitle ] = useState()
    const [ time, setTime ] = useState();

    useEffect(() => {
      
      if(route.params.objTime){
        console.log('time: ', route.params.objTime);
        setTime(route.params.objTime);
      }
      if(route.params.item){
        setTextWork(route.params.item.work);
        setTextTitle(route.params.item.title);
      }
    });
 

    return (
        <View style={stylesAddWorkPage.container}>
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
            <View 
                style={stylesAddWorkPage.reminder}  
                onStartShouldSetResponder={() => {
                  navigation.navigate('Reminder')
                }}
            >
              
              <Text style={stylesAddWorkPage.reminderText}>Reminder</Text>
              <Icon style={stylesAddWorkPage.reminderIcon} name='chevron-forward' />
              
            </View>
           
            
            <View style={stylesAddWorkPage.ButtonView}>
              <TouchableHighlight 
              style={stylesAddWorkPage.Button}
              onPress={() => {
                navigation.navigate('ToDoScreen');
                addWork(
                  { 
                    id: route.params.item ? 
                    route.params.item.id : 
                    undefined , 
                    title: textTitle, 
                    work: textWork,
                    time: time ? time : 0
                   }
                );
                
              }}
              >
              
                <Text style={stylesAddWorkPage.Text}>Add</Text>
              </TouchableHighlight>
            </View>
        </View>
          
    );
  }
export default AddWorkPage;