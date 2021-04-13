import React, { useContext, useEffect, useState } from 'react';
import { Animated, View } from 'react-native';

import HomepageScreen from '../components/HomepageScreen';
import { TodoContext } from '../context/todo';

function Homepage(props) {
    const { navigation, route } = props;

    const [ todoList, addTodo, getTimeCurrent, removeTodo, todoEveryday, getTodoEveryday, innitValue, anim ] = useContext(TodoContext);

    

    useEffect(()=>{
        if(route.params == undefined) return;
        addTodo(route.params);
    }, [route.params])


    // useEffect(() => {
    //     const todo =[...todoList];
    //     setNewTodo(todo);
    // }, )
    

    
    console.log('Homepage render');

    return (
        <HomepageScreen newTodo={todoList} todoEveryday={todoEveryday} removeTodo={removeTodo} anim={anim} innitValue={innitValue} navigation={navigation}/>
    );
}

export default Homepage;