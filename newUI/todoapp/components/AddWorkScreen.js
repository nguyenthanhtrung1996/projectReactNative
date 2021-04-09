import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { stylesAddWorkScreen } from './controller/style'

function AddWorkScreen(props) {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('time');
    const [show, setShow] = useState(false);

    const [activeTime, setActiveTime] = useState('');
    const [activeWork, setActiveWork] = useState('');
    
    const [time,setTime] = useState('')
    const { navigation } = props;

    const getTimeCurrent = () => {
        const d = new Date();
        return d.getTime();
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        setTime(`${event.nativeEvent.timestamp.getTime()}`)
        console.log(selectedDate, event.nativeEvent.timestamp);
    };
    return (
        <View style={stylesAddWorkScreen.container}>
            <View style={stylesAddWorkScreen.header}>
                <View style={stylesAddWorkScreen.navbar}>
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
            <View style={stylesAddWorkScreen.body}>
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
                    <View style={stylesAddWorkScreen.time}> 
                        <Text style={stylesAddWorkScreen.title}>Select time</Text>
                        <View style={stylesAddWorkScreen.time__content}>
                                {activeTime == '60' ?
                                    <View style={stylesAddWorkScreen.time__box}>
                                        <Icon
                                            name='ellipse' 
                                            size={96} 
                                            color='#ff90a1'
                                        />
                                        <Text style={stylesAddWorkScreen.activeText}>60 min</Text>
                                    </View>
                                :
                                    <View style={stylesAddWorkScreen.time__box}>
                                        <Icon 
                                            name='ellipse' 
                                            size={96} 
                                            color='#223369'
                                            onPress={() => {
                                                setActiveTime('60');
                                                setTime(`${getTimeCurrent()+3600000}`);
                                                console.log(time);
                                            }}
                                        />
                                        <Text style={stylesAddWorkScreen.time__text}>60 min</Text>
                                    </View>
                                }
                                {activeTime == 'orther' ? 
                                    <View style={stylesAddWorkScreen.time__box}>
                                        <Icon 
                                            name='pie-chart-sharp' 
                                            size={96} color='#ff90a1'
                                            onPress={()=>{
                                                setShow(true);
                                                setActiveTime('orther')
                                            }}
                                        />
                                        <Text style={stylesAddWorkScreen.activeText}>Orther time...</Text>
                                    </View>
                                :
                                    <View style={stylesAddWorkScreen.time__box}>
                                        <Icon 
                                            name='pie-chart-sharp' 
                                            size={96} color='#223369'
                                            onPress={()=>{
                                                setShow(true);
                                                setActiveTime('orther')
                                            }}
                                        />
                                        <Text style={stylesAddWorkScreen.time__text}>Orther time...</Text>
                                    </View>
                                }
                        </View>
                    </View>
                    <View style={stylesAddWorkScreen.work}>
                        <Text style={stylesAddWorkScreen.title}>
                            Name
                        </Text>
                        <View>
                            <View style={stylesAddWorkScreen.work__box__1}>
                                {activeWork == 'workout' ? 
                                    <TouchableOpacity
                                        style={stylesAddWorkScreen.work__activeWorkout}
                                    >
                                        <Text style={stylesAddWorkScreen.work__text}>Workout</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity
                                        style={stylesAddWorkScreen.work__workout}
                                        onPress={() => {
                                            setActiveWork('workout');
                                        }}
                                    >
                                        <Text style={stylesAddWorkScreen.work__text}>Workout</Text>
                                    </TouchableOpacity>
                                }
                                {activeWork == 'Animation' ? 
                                    <TouchableOpacity
                                        style={stylesAddWorkScreen.work__activeAnimation}
                                        
                                    >
                                        <Text style={stylesAddWorkScreen.work__text}>Animation</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity
                                        style={stylesAddWorkScreen.work__animation}
                                        onPress={() => {
                                            setActiveWork('Animation');
                                        }}
                                    >
                                        <Text style={stylesAddWorkScreen.work__text}>Animation</Text>
                                    </TouchableOpacity>
                                }
                            </View>
                        </View>
                        <View>
                            <View style={stylesAddWorkScreen.work__box__2}>
                            {activeWork == 'Design' ?
                                <TouchableOpacity
                                    style={stylesAddWorkScreen.work__active}
                                >
                                    <Text style={stylesAddWorkScreen.work__text}>Design</Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity
                                    style={stylesAddWorkScreen.work__name}
                                    onPress={() => {
                                        setActiveWork('Design');
                                    }}
                                >
                                    <Text style={stylesAddWorkScreen.work__text}>Design</Text>
                                </TouchableOpacity>
                            } 
                            {activeWork == 'Egg' ?
                                <TouchableOpacity
                                    style={stylesAddWorkScreen.work__active}
                                >
                                    <Text style={stylesAddWorkScreen.work__text}>Egg</Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity
                                    style={stylesAddWorkScreen.work__name}
                                    onPress={() => {
                                        setActiveWork('Egg');
                                    }}
                                >
                                    <Text style={stylesAddWorkScreen.work__text}>Egg</Text>
                                </TouchableOpacity>
                            } 
                            {activeWork == 'Meditation' ?
                                <TouchableOpacity
                                    style={stylesAddWorkScreen.work__active}
                                >
                                    <Text style={stylesAddWorkScreen.work__text}>Meditation</Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity
                                    style={stylesAddWorkScreen.work__name}
                                    onPress={() => {
                                        setActiveWork('Meditation');
                                    }}
                                >
                                    <Text style={stylesAddWorkScreen.work__text}>Meditation</Text>
                                </TouchableOpacity>
                            } 
                            </View>
                        </View>
                    </View>
                </View>
            <View style={stylesAddWorkScreen.footer}>
                <TouchableOpacity
                    style={stylesAddWorkScreen.button}
                    onPress={() => {
                        navigation.navigate('Home',{ title: activeWork, time })
                    }}
                >
                    <Text style={stylesAddWorkScreen.buttonText}>Add to timer</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default AddWorkScreen;