import React, { useContext, useEffect, useState } from 'react';
import { Text, View, Button, TextInput, TouchableHighlight } from 'react-native';
import { stylesAddWorkPage } from './controller/style'
import Icon from 'react-native-vector-icons/Ionicons';
import { TodoContext } from '../context/todo';

function AddWorkPage({ route, navigation }) {
  const [ todoList, handlerOnChangActive, removeData, addWork, deleteToDo, currentDate ] = useContext(TodoContext);
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
                style={{ flexDirection:'row', justifyContent:'space-between', padding: 10, backgroundColor: 'white',elevation: 15, marginBottom: 15 }}  
                onStartShouldSetResponder={() => {
                  navigation.navigate('Reminder')
                }}
            >
              
              <Text style={{color: '#95a5a6'}}>Reminder</Text>
              <Icon style={{ color: '#95a5a6', fontSize: 24 ,textAlignVertical:'center'}} name='chevron-forward' />
              
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