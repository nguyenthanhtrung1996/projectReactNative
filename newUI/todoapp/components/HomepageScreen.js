import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { stylesHomepageScreen } from './controller/style'

function HomepageScreen(props) {
    const { todoList, navigation } = props;
    const [active,setActive] = useState('-1');

    return (
        <View style={stylesHomepageScreen.container}>
            <View style={stylesHomepageScreen.body}>
                <View style={stylesHomepageScreen.mostTimer}>
                    <Text style={stylesHomepageScreen.title} >Most used timer</Text>
                    <View  style={stylesHomepageScreen.mostTimer__box__1}>
                            <Text style={stylesHomepageScreen.mostTimer__workName}>Breakfast</Text>
                            <Text style={stylesHomepageScreen.mostTimer__timeBlack}>15m</Text>
                    </View>
                    <View  style={stylesHomepageScreen.mostTimer__box__2}>
                        <View style={stylesHomepageScreen.mostTimer__box__2__left}>
                            <Text style={stylesHomepageScreen.mostTimer__workName}>Lunch</Text>
                            <Text style={stylesHomepageScreen.mostTimer__timeBlack}>60min</Text>
                        </View>
                        <View style={stylesHomepageScreen.mostTimer__box__2__right}>
                            <Text style={stylesHomepageScreen.mostTimer__workName}>Dinner</Text>
                            <Text style={stylesHomepageScreen.mostTimer__timeBlack}>30min</Text>
                        </View>
                    </View>

                </View>
                
                <View style={stylesHomepageScreen.otherTimer}>
                    <ScrollView>
                        <Text style={stylesHomepageScreen.title} >Other Timer</Text>
                        <View style={stylesHomepageScreen.otherTimer__total}>
                            {todoList.map((todo,index) => {
                                return (<View 
                                            style={active == index ?  stylesHomepageScreen.otherTimer__box__active : stylesHomepageScreen.otherTimer__box}
                                            onStartShouldSetResponder={()=>{
                                                setActive(index);
                                            }}
                                        >
                                            <Text style={stylesHomepageScreen.otherTimer__workName}>{todo.title}</Text>
                                            <Text style={stylesHomepageScreen.otherTimer__time}>{todo.time}</Text>
                                        </View>)
                            })}
                           
                        </View>
                    </ScrollView>
                </View>
                
            </View>
            <View style={stylesHomepageScreen.footer}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('AddWorkPage');
                    }}
                    style={stylesHomepageScreen.button}
                    // onPress={}
                >
                    <Text style={stylesHomepageScreen.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default HomepageScreen;