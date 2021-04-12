import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';

import HomepageScreen from '../components/HomepageScreen';
import { TodoContext } from '../context/todo';

function Homepage(props) {
    const { navigation, route } = props;

    const [ todoList, addTodo, getTimeCurrent, removeTodo, todoEveryday, getTodoEveryday ] = useContext(TodoContext);

    const [ newTodo, setNewTodo ] = useState([]);

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
        }, 2000);
        return () => {
            clearInterval(check);
        }
    }, [todoList])

    
    useEffect(() => {
        // if(todoList.length == 0) return;
        const formatTime = setInterval(()=>{
            formatTodoList();
        }, 2000)
        console.log('useeffect 1');
        return () => {
            clearInterval(formatTime)
        }
    }, [todoList]);

    function formatTodoList(){
        const newFormatList = [...todoList];
        newFormatList.forEach(todo => {
            todo.formatMinutes = `${Math.floor((todo.time - getTimeCurrent())/60000)}`;
        });
        setNewTodo(newFormatList);
    }

    
    
    console.log('Homepage render');

    return (
        <HomepageScreen newTodo={newTodo} todoEveryday={todoEveryday} removeTodo={removeTodo} navigation={navigation}/>
    );
}

export default Homepage;