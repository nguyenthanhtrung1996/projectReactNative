import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Text, TouchableOpacity, View, Image, TouchableHighlight, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { stylesAddWorkScreen } from './controller/style';

function AddWorkScreen(props) {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('time');
    const [show, setShow] = useState(false);

    const [activeTime, setActiveTime] = useState('');
    const [activeWork, setActiveWork] = useState('');
    
    const [time,setTime] = useState('')
    const { anim, navigation } = props;

    const getTimeCurrent = () => {
        const d = new Date();
        return d.getTime();
    }

    const checkValidate = (activeWork,time) => {
        if(activeWork == '' || time == ''){
            return false;
        }
        return true;
    }

    useEffect(() => {
        Animated.timing(innitValue, {
            toValue: 0,
            duration: 300,
            useNativeDriver : true
        }).start();
        Animated.timing(innitValue1, {
            toValue: 0,
            duration: 300,
            delay:100,
            useNativeDriver : true
            }).start();
        Animated.timing(innitValue2, {
            toValue: 0,
            duration: 300,
            delay:200,
            useNativeDriver : true
        }).start();
        Animated.timing(innitValue3, {
            toValue: 0,
            duration: 300,
            delay:300,
            useNativeDriver : true
            }).start();
    },)
    

    const innitValue = useRef(new Animated.Value(250)).current;
    const innitValue1 = useRef(new Animated.Value(250)).current;
    const innitValue2 = useRef(new Animated.Value(250)).current;
    const innitValue3 = useRef(new Animated.Value(250)).current;

    console.log('Add work screen');
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
                    <Ionicons 
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
                        <Text style={stylesAddWorkScreen.time__title}>Select time</Text>
                        <View style={stylesAddWorkScreen.time__box__total}>
                                {activeTime == '15' ?
                                    <View style={stylesAddWorkScreen.time__box}>
                                        <Image
                                            style={{ width: 80, height: 80}}
                                            source={require('../image/icon-time-1-active.png')}
                                        />
                                        <Text style={stylesAddWorkScreen.activeText}>15 min</Text>
                                    </View>
                                :
                                    <Animated.View 
                                        style={[stylesAddWorkScreen.time__box, { transform: [{ translateX: innitValue }] }]}
                                    >
                                        <TouchableHighlight 
                                            onPress={() => {
                                                setActiveTime('15');
                                                setTime(`${getTimeCurrent()+900000}`);
                                                console.log(time);
                                            }}
                                        >
                                            <Image
                                                style={{ width: 80, height: 80}}
                                                source={require('../image/icon-time-1.png')}                                                
                                            />
                                        </TouchableHighlight>
                                        <Text style={stylesAddWorkScreen.time__text}>15 min</Text>
                                    </Animated.View> 
                                }
                                {activeTime == '30' ?
                                    <View style={stylesAddWorkScreen.time__box}>
                                        <TouchableHighlight >
                                            <Image
                                                style={{ width: 80, height: 80}}
                                                source={require('../image/icon-time-2-active.png')}                                                
                                            />
                                        </TouchableHighlight>
                                        <Text style={stylesAddWorkScreen.activeText}>30 min</Text>
                                    </View>
                                :
                                    <Animated.View style={[stylesAddWorkScreen.time__box, { transform: [{ translateX: innitValue1 }] }]}>
                                        <TouchableHighlight
                                            onPress={() => {
                                                setActiveTime('30');
                                                setTime(`${getTimeCurrent()+1800000}`);
                                                console.log(time);
                                            }}  
                                        >
                                            <Image
                                                style={{ width: 80, height: 80}}
                                                source={require('../image/icon-time-2.png')}   
                                                                                           
                                            />
                                        </TouchableHighlight>
                                        <Text style={stylesAddWorkScreen.time__text}>30 min</Text>
                                    </Animated.View> 
                                }
                                {activeTime == '60' ?
                                    <View style={stylesAddWorkScreen.time__box}>
                                        <Image
                                            style={{ width: 80, height: 80}}
                                            source={require('../image/icon-time-3-active.png')}                                     
                                        />
                                        <Text style={stylesAddWorkScreen.activeText}>60 min</Text>
                                    </View>
                                :
                                    <Animated.View style={[stylesAddWorkScreen.time__box, { transform: [{ translateX: innitValue2 }] }]}>
                                            <TouchableHighlight
                                                onPress={() => {
                                                    setActiveTime('60');
                                                    setTime(`${getTimeCurrent()+3600000}`);
                                                    console.log(time);
                                                }}  
                                            >
                                                <Image
                                                    style={{ width: 80, height: 80}}
                                                    source={require('../image/icon-time-3.png')}   
                                                                                            
                                                />
                                            </TouchableHighlight>
                                            <Text style={stylesAddWorkScreen.time__text}>60 min</Text>
                                    </Animated.View> 
                                }
                                {activeTime == 'orther' ? 
                                    <View style={stylesAddWorkScreen.time__box}>
                                        <Icon 
                                            name='cog-clockwise' 
                                            style={{ width: 80, height: 80}}
                                            size={80} color='#ff90a1'
                                            onPress={()=>{
                                                setShow(true);
                                                setActiveTime('orther')
                                            }}
                                        />
                                        <Text style={stylesAddWorkScreen.activeText}>Orther...</Text>
                                    </View>
                                :
                                    <Animated.View style={[stylesAddWorkScreen.time__box, { transform: [{ translateX: innitValue3 }] }]}>
                                            <Icon 
                                                name='cog-clockwise' 
                                                style={{ width: 80, height: 80}}
                                                size={80} color='#223369'
                                                onPress={()=>{
                                                    setShow(true);
                                                    setActiveTime('orther')
                                                }}
                                            />
                                            <Text style={stylesAddWorkScreen.time__text}>Orther...</Text>
                                    </Animated.View>
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
                                        <Animated.View style={[stylesAddWorkScreen.work__workout, { transform: [{ translateX: innitValue }] }]}>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    setActiveWork('workout');
                                                }}
                                            >
                                                <Text style={stylesAddWorkScreen.work__text}>Workout</Text>
                                            </TouchableOpacity>
                                        </Animated.View>
                                    }
                                    {activeWork == 'Animation' ? 
                                        <TouchableOpacity
                                            style={stylesAddWorkScreen.work__activeAnimation}
                                            
                                        >
                                            <Text style={stylesAddWorkScreen.work__text}>Animation</Text>
                                        </TouchableOpacity>
                                        :
                                        <Animated.View style={[stylesAddWorkScreen.work__animation, { transform: [{ translateX: innitValue2 }] }]}>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    setActiveWork('Animation');
                                                }}
                                            >
                                                <Text style={stylesAddWorkScreen.work__text}>Animation</Text>
                                            </TouchableOpacity>
                                        </Animated.View>
                                    }
                                </View>
                            </View>
                            <View>
                                <Animated.View style={[stylesAddWorkScreen.work__box__2, { transform: [{translateX: innitValue }] }]}>
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
                                </Animated.View>
                            </View>
                        
                    </View>
                </View>
            <View style={stylesAddWorkScreen.footer}>
                <TouchableOpacity
                    style={stylesAddWorkScreen.button}
                    onPress={() => {
                        if(checkValidate(activeWork,time)){
                            navigation.navigate('Home',{ title: activeWork, time });
                            anim();
                        } else {
                            Alert.alert('Error');
                        }
                    }}
                >
                    <Text style={stylesAddWorkScreen.buttonText}>Add to timer</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default AddWorkScreen;