import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';

function AddWorkScreen(props) {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('time');
    const [show, setShow] = useState(false);

    const { navigation } = props;

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        console.log(selectedDate);
    };
    return (
        <View style={{flex: 1, padding: 15, backgroundColor: '#020f38'}}>
            <View style={{flex:1, justifyContent:'flex-end'}}>
                <View style={{flexDirection: 'row'}}>
                    <Icon 
                       name='chevron-back-outline' 
                       size={32} 
                       color='white'
                       onPress={
                           () => {
                               navigation.navigate('Home');
                           }
                       }
                    />
                    <Text style={{fontSize: 24, color: 'white'}}>New timer</Text>
                </View>
            </View>
            <View style={{flex:6}}>
                <View style={{flex:1}}>
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                        )}
                    <View style={{flex: 1, paddingVertical: 20}}>
                        {/* <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>Select time</Text> */}
                        <TouchableOpacity
                            onPress={()=>{
                                setShow(true);
                            }}
                        >
                        <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>Select time</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 2}}>
                        <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
                            Name
                        </Text>
                        <View>
                            <View style={{flexDirection: 'row',justifyContent:'space-between',paddingVertical: 15}}>
                                <TouchableOpacity
                                    style={{width: '40%',justifyContent: 'center', backgroundColor: '#363d5a', borderRadius: 15,}}
                                >
                                    <Text style={{textAlign:'center',paddingVertical:10, fontSize: 16,color: 'white'}}>Workout</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{width: '54%',justifyContent: 'center', backgroundColor: '#363d5a', borderRadius: 15,}}
                                >
                                    <Text style={{textAlign:'center',paddingVertical:10, fontSize: 16,color: 'white'}}>Animation</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                                <TouchableOpacity
                                    style={{width: '29%',justifyContent: 'center', backgroundColor: '#363d5a', borderRadius: 15,}}
                                >
                                    <Text style={{textAlign:'center',paddingVertical:10, fontSize: 16,color: 'white'}}>Design</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{width: '29%',justifyContent: 'center', backgroundColor: '#363d5a', borderRadius: 15,}}
                                >
                                    <Text style={{textAlign:'center',paddingVertical:10, fontSize: 16,color: 'white'}}>Egg</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{width: '29%',justifyContent: 'center', backgroundColor: '#363d5a', borderRadius: 15,}}
                                >
                                    <Text style={{textAlign:'center',paddingVertical:10, fontSize: 16,color: 'white'}}>Meditation</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{flex:1}}>

            </View>
        </View>
    );
}

export default AddWorkScreen;