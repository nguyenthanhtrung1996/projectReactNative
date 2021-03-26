import React, { useEffect, useState } from 'react';
import { Text, View, Button, TextInput, TouchableHighlight } from 'react-native';
import { stylesAddWorkPage } from './controller/style'

function AddWorkPage({ route, navigation }) {
    const [ textWork, setTextWork ] = useState()
    const [ textTitle, setTextTitle ] = useState()
    const [ number, setNumber ] = useState();
    const [ check, setCheck ] = useState(true);

    useEffect(() => {
      console.log(route.params);
      if(route.params !== undefined){
        setTextWork(route.params.item.work);
        setTextTitle(route.params.item.title);
      }
    }, []);

    function checkNumber(number){
      const numbercheck = parseInt(number);
      
      // console.log(parseInt(numbercheck));
      if(numbercheck > 60 || numbercheck < 0 || isNaN(numbercheck) || !Number.isInteger(numbercheck)){
        setCheck(false);
        console.log('sai')
        return;
      }
      setCheck(true);
      console.log('đúng' , numbercheck);
      navigation.navigate('ToDoScreen', 
        { id: route.params ? 
          route.params.item.id : 
          undefined , 
          title: textTitle, 
          work: textWork,
          time: numbercheck
         })
      // setNumber(number);
    }

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
            <TextInput 
                style={{borderWidth: 1}}
                placeholder='Minute'
                keyboardType='numeric'
                onChangeText = { (data) =>{
                  setNumber(data);
                  // console.log(data)
                }
                }
                value={number}
            />
            {check == false ? 
            <Text style={stylesAddWorkPage.warning}>
              * Minute is Number and from 0 - 60.
            </Text> : 
            <Text>
            * Minute is Number and from 0 - 60.
            </Text>}
            
            <View style={stylesAddWorkPage.ButtonView}>
              <TouchableHighlight 
              style={stylesAddWorkPage.Button}
              onPress={() => {
                checkNumber(number);
              }}
              >
              
                <Text style={stylesAddWorkPage.Text}>Add</Text>
              </TouchableHighlight>
            </View>
        </View>
          
    );
  }
export default AddWorkPage;