import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TodoContext } from '../context/todo';
import { stylesHomepageScreen } from './controller/style';

function HomepageScreen(props) {
    const { navigation } = props;
    const [active,setActive] = useState('-1');
    const [ todoList, addTodo, getTimeCurrent, removeTodo, todoEveryday, getTodoEveryday ] = useContext(TodoContext);
    const [ newTodo, setNewTodo ] = useState([]);

    useEffect(() => {
        // if(todoList.length == 0) return;
        const formatTime = setInterval(()=>{
            formatTodoList();
        }, 1000)
        return () => {
            clearInterval(formatTime)
        }
    }, [todoList]);

    useEffect(() => {
        const time = setInterval(() => {
            getTodoEveryday()
        }, 1000)
        return () => {
            clearInterval(time);
        }
    },[])

    function formatTodoList(){
        const newFormatList = [...todoList];
        newFormatList.forEach(todo => {
            todo.formatMinutes = `${Math.floor((todo.time - getTimeCurrent())/60000)}`;
        });
        setNewTodo(newFormatList);
    }

    return (
        <View style={stylesHomepageScreen.container}>
            <View style={stylesHomepageScreen.body}>
                <View style={stylesHomepageScreen.mostTimer}>
                    <Text style={stylesHomepageScreen.title} >Most used timer</Text>
                    <View  style={stylesHomepageScreen.mostTimer__box__1}>
                            <Text style={stylesHomepageScreen.mostTimer__workName}>Breakfast</Text>
                            <Text style={stylesHomepageScreen.mostTimer__timeBlack}>{Math.floor(todoEveryday[0]/60)} hours {todoEveryday[0]%60} min</Text>
                    </View>
                    <View  style={stylesHomepageScreen.mostTimer__box__2}>
                        <View style={stylesHomepageScreen.mostTimer__box__2__left}>
                            <Text style={stylesHomepageScreen.mostTimer__workName}>Lunch</Text>
                            <Text style={stylesHomepageScreen.mostTimer__timeBlack}>{Math.floor(todoEveryday[1]/60)} hours {todoEveryday[1]%60} min</Text>
                        </View>
                        <View style={stylesHomepageScreen.mostTimer__box__2__right}>
                            <Text style={stylesHomepageScreen.mostTimer__workName}>Dinner</Text>
                            <Text style={stylesHomepageScreen.mostTimer__timeBlack}>{Math.floor(todoEveryday[2]/60)} hours {todoEveryday[2]%60} min</Text>
                        </View>
                    </View>
                </View>
                <View style={stylesHomepageScreen.otherTimer}>
                    <ScrollView>
                        <Text style={stylesHomepageScreen.title} >Other Timer</Text>
                        <View style={stylesHomepageScreen.otherTimer__total}>
                            {newTodo.map((todo,index) => {
                                return (<View 
                                            style={active == index ?  stylesHomepageScreen.otherTimer__box__active : stylesHomepageScreen.otherTimer__box}
                                            onStartShouldSetResponder={()=>{
                                                setActive(index);
                                            }}
                                        >
                                            <Text style={stylesHomepageScreen.otherTimer__workName}>{todo.title}</Text>
                                            <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                                                <Text style={stylesHomepageScreen.otherTimer__time}>
                                                    {todo.formatMinutes}min
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
                >
                    <Text style={stylesHomepageScreen.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default HomepageScreen;