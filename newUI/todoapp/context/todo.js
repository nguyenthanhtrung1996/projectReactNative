import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TodoContext = React.createContext();

export function TodoProvider(props){
    const [ todoList, setTodoList ] = useState([]);
    const [ todoEveryday, setTodoEveryday ] = useState([]);

    

    useEffect(() => {
        retrieveToDo = async () => {
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
            console.log('end app....');
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
        const getTimeBreakFast = Math.floor((timeBreakfast.getTime()-d.getTime())/60000)
        const getTimeLunch = Math.floor((timeLunch.getTime()-d.getTime())/60000)
        const getTimeDinner = Math.floor((timeDinner.getTime()-d.getTime())/60000)

        console.log(timeDinner.getTime());
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
        newList.push(objtodo);
        setTodoList(newList);
        setAsyncStorage(newList);
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
                getTodoEveryday
            ]}
        >
            {props.children}
        </TodoContext.Provider>
    )
}