import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableHighlight, View } from 'react-native';
import { stylesReminder } from './controller/style';

function Reminder({ route, navigation }) {
    // const [ day, setDay ] = useState('00');
    // const [ month, setMonth ] = useState();
    // const [ year, setYear ] = useState();
    
    const [ minute, setMinute ] = useState('00');
    const [ hours, setHours ] = useState();
    const [ check, setCheck ] = useState(true);
    
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
      var d = new Date();
      var n = d.toLocaleTimeString();
      setCurrentDate(n);
      var h = (d.getHours()+1).toString();
      setHours((`0${h}`).slice(-2));

      console.log('currentDate: ', (`0${h}`).slice(-2));
    }, []);
    
    function getData(){
        if(check == true){
            const newHours = parseInt(hours);
            const minuteCheck = parseInt(minute);
            const objTime = { hours: newHours , minute: minuteCheck };
            navigation.navigate('AddWorkPage', { objTime });
        }
    }

    return (
      <View style={stylesReminder.container}>
        <View>
          <Text style = {stylesReminder.Text}>Current Time: {currentDate}</Text>
        </View>
        <View style={stylesReminder.reminder}>
          <Text style = {stylesReminder.Text}>Remind at: </Text>
          <TextInput 
              style={stylesReminder.input}
              placeholder='00'
              keyboardType='numeric'
              onChangeText = { (data) =>{
                const hoursCheck = parseInt(data);
                if(hoursCheck > 23 || hoursCheck < 0 || isNaN(hoursCheck) || !Number.isInteger(hoursCheck) ){
                    setCheck(false);
                    if(data == ''){
                        setHours(data);
                    }
                    return;
                }
                setCheck(true);
                setHours(data);
              }}
              value={hours}
          />
          <Text>:</Text>
          <TextInput 
              style={stylesReminder.input}
              placeholder='00'
              keyboardType='numeric'
              onChangeText = { (data) =>{
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
              }
              }
              onFocus = {() => setMinute('')}
              value={minute}
          />
        </View>
            {check == false ? 
            <Text style={stylesReminder.warning}>
              * Time Error
            </Text> : <Text></Text>}
            <TouchableHighlight 
              style={stylesReminder.Button}
              onPress={() => {
                getData();
              }}
              >
                <Text style={stylesReminder.TextAdd}>Add</Text>
              </TouchableHighlight>
      </View>
    );
  }

export default Reminder;