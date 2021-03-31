import React, { useEffect, useState } from 'react';
import { Button, View, Text, TextInput, TouchableHighlight } from 'react-native';
import { stylesAddWorkPage } from './controller/style'

function Reminder({ route, navigation }) {
    // const [ day, setDay ] = useState('00');
    // const [ month, setMonth ] = useState();
    // const [ year, setYear ] = useState();
    
    const [ minute, setMinute ] = useState('00');
    const [ hours, setHours ] = useState();
    const [ check, setCheck ] = useState(true);
    
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
      console.log('set data')
      var d = new Date();
      var n = d.toLocaleTimeString();
      setCurrentDate(n);
      var h = (d.getHours()+1).toString();
      setHours(h);

      // var y = (d.getFullYear()).toString();
      // setYear(y);

      // var m = (d.getMonth()).toString();
      // setMonth(m);

      // var date = (d.getDate()).toString();
      // setDay(date);

      // console.log(date);
      console.log('currentDate: ', currentDate);
    }, []);
    
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
            navigation.navigate('AddWorkPage', { objTime });
        }
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
          <Text style = {{fontSize:22}}>Current Time: {currentDate}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems:'center'}}>
          <Text style = {{fontSize:22}}>Remind at: </Text>
          <TextInput 
              style={{backgroundColor: 'white'}}
              
              placeholder='00'
              keyboardType='numeric'
              onChangeText = { (data) =>{
                console.log(data);
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
              }
              }
              onFocus = {() => setMinute('')}
              value={minute}
          />
        </View>
           
            {check == false ? 
            <Text style={stylesAddWorkPage.warning}>
              * Time Error
            </Text> : <Text></Text>}
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