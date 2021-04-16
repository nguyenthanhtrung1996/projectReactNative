import React, { useEffect, useRef, useState } from 'react'
import { Alert, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TodoContext = React.createContext();

export function TodoProvider(props){
    const [ todoList, setTodoList ] = useState([]);
    const [ todoEveryday, setTodoEveryday ] = useState([]);

    const innitValue = useRef(new Animated.Value(100)).current;
    const anim = () => {
        innitValue.setValue(100);
        Animated.timing(innitValue, {
            toValue: 0,
            duration: 500,
            useNativeDriver : true
        }).start();
    }

    useEffect(() => {
        const formatTime = setInterval(()=>{
            // console.log('before:',todoList);
            formatTodoList();
            // console.log('checking');
        }, 60000)
        return () => {
            clearInterval(formatTime)
        }
    }, [todoList]);

    const formatTodoList = () => {
        const newList = [...todoList];
        newList.forEach(element => {
            element.formatMinutes = `${Math.floor((element.time - getTimeCurrent())/60000).toString()}`;
        });
        // console.log('format check: ', todoList, newList);
        setTodoList(newList);
    }
    
    useEffect(()=>{
        if(todoList.length == 0) return;
        const check = setInterval(() => {
            const newFormatList = [...todoList];
            newFormatList.forEach((todo,index) => {
                if(todo.time <= getTimeCurrent()){
                    removeTodo(todo,index);
                    // console.log(todo.title);
                }
            });
        }, 2000);
        return () => {
            clearInterval(check);
        }
    }, [todoList])
    useEffect(() => {
        getTodoEveryday();
        const time = setInterval(() => {
            getTodoEveryday();
        }, 60000)
        return () => {
            clearInterval(time);
        }
    }, [])

    useEffect(() => {
        const retrieveToDo = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('todoList')
                console.log('todolist json', JSON.parse(jsonValue));
                if(jsonValue !== null){
                    setTodoList(JSON.parse(jsonValue))
                }
            } catch(error) {
                console.log(error);
            }
          };
        retrieveToDo();
        
        return () => {
            setAsyncStorage(todoList);
        }
    }, []);

    const getTodoEveryday = () => {
        const d = new Date();
        const timeBreakfast = new Date(d.getFullYear(),d.getMonth(),d.getDate(),6);
        const timeLunch = new Date(d.getFullYear(),d.getMonth(),d.getDate(),12);
        const timeDinner = new Date(d.getFullYear(),d.getMonth(),d.getDate(),18);
        if(d.getTime() > timeBreakfast.getTime()){
            const date = timeBreakfast.getDate()+1;
            timeBreakfast.setDate(date);
        }
        if(d.getTime() > timeLunch.getTime()){
            const date = timeLunch.getDate()+1;
            timeLunch.setDate(date);
        }
        if(d.getTime() > timeDinner.getTime()){
            const date = timeDinner.getDate()+1;
            timeDinner.setDate(date);
        }
        const getTimeBreakFast = Math.ceil((timeBreakfast.getTime()-d.getTime())/60000);
        const getTimeLunch = Math.ceil((timeLunch.getTime()-d.getTime())/60000);
        const getTimeDinner = Math.ceil((timeDinner.getTime()-d.getTime())/60000);
        if(getTimeBreakFast == 0 ){
            Alert.alert('Breakfast');
        } else if (getTimeLunch == 0){
            Alert.alert('Lunch');
        } else if (getTimeDinner == 0){
            Alert.alert('Dinner');
        }
        setTodoEveryday([getTimeBreakFast,getTimeLunch,getTimeDinner]);
    }

    const setAsyncStorage = async (obj) => {
        console.log(obj);
        try {
            await AsyncStorage.setItem(
              'todoList',
              JSON.stringify(obj),
              () => {
                  AsyncStorage.mergeItem(
                  'todoList',
                  JSON.stringify(todoList),
                  );
              }
            );
          } catch (error) {
              console.log(error);
          }
    };

    function addTodo(objtodo){
        const newList = [...todoList];
        const newObj = { ...objtodo, formatMinutes: `${(Math.floor((objtodo.time - getTimeCurrent())/60000)).toString()}` }
        newList.push(newObj);
        setTodoList(newList);
        // setNewTodo(newList);
        setAsyncStorage(newList);
        console.log(' call add ');
    }

    function removeTodo(todo, index){
        const newList = [...todoList];
        newList.splice(index,1);
        setTodoList(newList);
        
        Alert.alert(todo.title);
        setAsyncStorage(newList);
    }

    function getTimeCurrent(){
        const d = new Date();
        return d.getTime();
    }

    return(
        <TodoContext.Provider 
            value={[
                todoList,
                addTodo,
                getTimeCurrent,
                removeTodo,
                todoEveryday,
                getTodoEveryday,
                innitValue,
                anim,
            ]}
        >
            {props.children}
        </TodoContext.Provider>
    )
}