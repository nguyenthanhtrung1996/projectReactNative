import React, { useEffect, useState } from 'react';
import { Animated, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { stylesHomepageScreen } from './controller/style';

function HomepageScreen(props) {
    const { todoList, todoEveryday, removeTodo, innitValue, anim, navigation } = props;
    const [active,setActive] = useState('-1');
    // const [ todoList, addTodo, getTimeCurrent, removeTodo, todoEveryday, getTodoEveryday ] = useContext(TodoContext);
    
    // const innitValue = useRef(new Animated.Value(100)).current;

    useEffect(() => {
        anim()
    }, [])
    console.log('HomepageScreen re-render', todoList);
    return (
        <View style={stylesHomepageScreen.container}>
            <View style={stylesHomepageScreen.body}>
                <View style={stylesHomepageScreen.mostTimer}>
                    <Text style={stylesHomepageScreen.title} >Most used timer</Text>
                    <View  style={stylesHomepageScreen.mostTimer__box__1}>
                            <Text style={stylesHomepageScreen.mostTimer__workName}>Breakfast</Text>
                            <Text style={stylesHomepageScreen.mostTimer__timeBlack}>{todoEveryday[0]} min</Text>
                    </View>
                    <View  style={stylesHomepageScreen.mostTimer__box__2}>
                        <View style={stylesHomepageScreen.mostTimer__box__2__left}>
                            <Text style={stylesHomepageScreen.mostTimer__workName}>Lunch</Text>
                            <Text style={stylesHomepageScreen.mostTimer__timeBlack}>{todoEveryday[1]} min</Text>
                        </View>
                        <View style={stylesHomepageScreen.mostTimer__box__2__right}>
                            <Text style={stylesHomepageScreen.mostTimer__workName}>Dinner</Text>
                            <Text style={stylesHomepageScreen.mostTimer__timeBlack}>{todoEveryday[2]} min</Text>
                        </View>
                    </View>
                </View>
                <View style={stylesHomepageScreen.otherTimer}>
                    <ScrollView>
                        <Text style={stylesHomepageScreen.title} >Other Timer</Text>
                        <View style={stylesHomepageScreen.otherTimer__total}>
                            {todoList.map((todo,index) => {
                                // console.log(index+1 == newTodo.length)
                                if(index+1 == todoList.length){
                                    return (
                                        <Animated.View 
                                            style={[active == index ?  
                                                stylesHomepageScreen.otherTimer__box__active 
                                                : 
                                                stylesHomepageScreen.otherTimer__box, 
                                                { transform: [{ translateX: innitValue }] }
                                            ]}
                                            onStartShouldSetResponder={()=>{
                                                setActive(index);
                                            }}
                                        >
                                            <Text style={stylesHomepageScreen.otherTimer__workName}>{todo.title}</Text>
                                            <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                                                <Text style={stylesHomepageScreen.otherTimer__time}>
                                                    {todo.formatMinutes} min
                                                </Text>
                                                <Icon 
                                                    style={active == index ? {textAlignVertical:'center'} : {display:'none'}} 
                                                    color='white' 
                                                    name='pause-sharp' 
                                                    size={24}
                                                    onPress={() => {
                                                        removeTodo(todo,index);
                                                    }}
                                                />
                                            </View>
                                        </Animated.View>
                                    )
                                }
                                else if(index != todoList.length) {
                                        return(
                                            <View 
                                                style={[active == index ?  
                                                    stylesHomepageScreen.otherTimer__box__active 
                                                    : 
                                                    stylesHomepageScreen.otherTimer__box,
                                                    // { transform: [{ translateX: innitValue }] }
                                                ]}
                                                onStartShouldSetResponder={()=>{
                                                    setActive(index);
                                                }}
                                            >
                                                <Text style={stylesHomepageScreen.otherTimer__workName}>{todo.title}</Text>
                                                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                                                    <Text style={stylesHomepageScreen.otherTimer__time}>
                                                        {todo.formatMinutes} min
                                                    </Text>
                                                    <Icon 
                                                        style={active == index ? {textAlignVertical:'center'} : {display:'none'}} 
                                                        color='white' 
                                                        name='pause-sharp' 
                                                        size={24}
                                                        onPress={() => {
                                                            removeTodo(todo,index);
                                                        }}
                                                    />
                                                </View>
                                            </View>
                                        )
                                }
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
                >
                    <Text style={stylesHomepageScreen.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default React.memo(HomepageScreen);