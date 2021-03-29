import React, { useEffect, useState } from 'react';
import { Text, View, Button, TextInput, TouchableHighlight } from 'react-native';
import { stylesAddWorkPage } from './controller/style'
import Icon from 'react-native-vector-icons/Ionicons';

function AddWorkPage({ route, navigation }) {
    const [ textWork, setTextWork ] = useState()
    const [ textTitle, setTextTitle ] = useState()
    const [ time, setTime ] = useState();

    useEffect(() => {
      console.log(route.params);
      
      if(route.params !== undefined){
        setTextWork(route.params.item.work);
        setTextTitle(route.params.item.title);
      }
    }, []);
 
     function getTime(objTime){
        console.log("time ne: ",objTime);
        const newTime = {...objTime}
        setTime(newTime);
        console.log('time: ',time);
     }
    

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
                  navigation.navigate('Reminder', { getTime: (obj) => { getTime(obj) } })
                }}
            >
              
              <Text style={{color: '#95a5a6'}}>Reminder</Text>
              <Icon style={{ color: '#95a5a6', fontSize: 24 ,textAlignVertical:'center'}} name='chevron-forward' />
              
            </View>
           
            
            <View style={stylesAddWorkPage.ButtonView}>
              <TouchableHighlight 
              style={stylesAddWorkPage.Button}
              onPress={() => {
                navigation.navigate('ToDoScreen', 
                { 
                  id: route.params ? 
                  route.params.item.id : 
                  undefined , 
                  title: textTitle, 
                  work: textWork,
                  hours: time.hours,
                  minute: time.minute,
                 })
              }}
              >
              
                <Text style={stylesAddWorkPage.Text}>Add</Text>
              </TouchableHighlight>
            </View>
        </View>
          
    );
  }
export default AddWorkPage;