import React, { useEffect, useState } from 'react';
import { Button, View, Text, TextInput, TouchableHighlight } from 'react-native';
import { stylesAddWorkPage } from './controller/style'

function Reminder({ route, navigation }) {
    const [ minute, setMinute ] = useState('00');
    const [ hours, setHours ] = useState('00');
    const [ check, setCheck ] = useState(true);
    
    
    function checkNumber(minute){
        const minuteCheck = parseInt(minute);
        const newHours = parseInt(hours);
      // console.log(parseInt(minuteCheck));
      if(minuteCheck > 60 || minuteCheck < 0 || isNaN(minuteCheck) || !Number.isInteger(minuteCheck)){
        setCheck(false);
        console.log('sai')
        return;
      }
      setCheck(true);
      const objTime = { hours: newHours , minute: minuteCheck };
      route.params.getTime(objTime);
      navigation.navigate('AddWorkPage');
    //   console.log('đúng' , numbercheck);
    }
    function getData(){
        if(check == true){
            const newHours = parseInt(hours);
            const minuteCheck = parseInt(minute);
            const objTime = { hours: newHours , minute: minuteCheck };
            route.params.getTime(objTime);
            navigation.navigate('AddWorkPage');
        }
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{flexDirection: 'row', alignItems:'center'}}>
              <TextInput 
                  style={{backgroundColor: 'white'}}
                  
                  placeholder='00'
                  keyboardType='numeric'
                  onChangeText = { (data) =>{

                    if(hours.length < 2){
                      setHours(data);
                    }
                    // console.log(data)
                  }
                  }
                  value={hours}
              />
              <Text>:</Text>
              <TextInput 
                  style={{backgroundColor: 'white'}}
                  placeholder='00'
                  keyboardType='numeric'
                  onChangeText = { (data) =>{
                    console.log(data);
                    const minuteCheck = parseInt(data);
                    if(minuteCheck > 60 || minuteCheck <= 0 || isNaN(minuteCheck) || !Number.isInteger(minuteCheck) ){
                        setCheck(false);
                        console.log('sai')
                        if(data == ''){
                            setMinute(data);
                        }
                        return;
                    }
                    setCheck(true);
                    setMinute(data);
                    console.log(minute);
                  }
                  }
                  onFocus = {() => setMinute('')}
                  value={minute}
              />
            </View>
           
            {check == false ? 
            <Text style={stylesAddWorkPage.warning}>
              * Minute is Number and from 0 - 60.
            </Text> : 
            <Text style={stylesAddWorkPage.black}>
            * Minute is Number and from 0 - 60.
            </Text>}
            <TouchableHighlight 
              style={stylesAddWorkPage.Button}
              onPress={() => {
                getData();
              }}
              
              >
              
                <Text style={stylesAddWorkPage.Text}>Add</Text>
              </TouchableHighlight>
      </View>
    );
  }

export default Reminder;