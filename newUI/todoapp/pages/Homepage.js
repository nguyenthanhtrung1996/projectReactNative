import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';

import HomepageScreen from '../components/HomepageScreen';
import { TodoContext } from '../context/todo';

function Homepage(props) {
    const { navigation, route } = props;

    const [ todoList, addTodo, getTimeCurrent, removeTodo ] = useContext(TodoContext);

    useEffect(()=>{
        if(route.params == undefined) return;
        addTodo(route.params);
    }, [route.params])

    useEffect(()=>{
        if(todoList.length == 0) return;
        const check = setInterval(() => {
            const newFormatList = [...todoList];
            newFormatList.forEach((todo,index) => {
                if(todo.time <= getTimeCurrent()){
                    removeTodo(todo,index);
                }
            });
        }, 1000);
        return () => {
            clearInterval(check);
        }
    }, [todoList])

    
    
    

    return (
        <HomepageScreen navigation={navigation}/>
    );
}

export default Homepage;