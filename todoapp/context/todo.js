import React, { useEffect, useState } from 'react';
// import { AsyncStorage }
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const TodoContext = React.createContext();

export function TodoProvider(props){
    const [ todoList, setTodoList ] = useState([]);

    useEffect(() => {

        retrieveToDo = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('todoList')
                console.log(JSON.parse(jsonValue));
                if(jsonValue !== null){
                    setTodoList(JSON.parse(jsonValue))
                }
            } catch(error) {
                console.log(error);
            }
            console.log('get....');
          };
        retrieveToDo();
    }, []);

    const setAsyncStorage = async (object) => {
        console.log(object);
        try {
            await AsyncStorage.setItem(
              'todoList',
              JSON.stringify(object),
              () => {
                  AsyncStorage.mergeItem(
                  'todoList',
                  JSON.stringify(todoList),
                  );
              }
            );
          } catch (error) {
          }
    };

    function setData(obj){
        setAsyncStorage(obj);
        setTodoList(obj);
    }

       

   
    function check(item){
        if(item == '' || item == 'undefined') {
            Alert.alert('Error', `Work isn't empty or undefined!!`)
            return true;
        }
        item = item.replace(/\s+/g,' ').trim();
        for (const obj of todoList) {
            if(item.toLowerCase() === obj.work.toLowerCase()){
                Alert.alert('Error', 'Work haved!!')
                return true;
            }
        }
        return false;
    }
    function handlerSubmitInput(item){
        console.log(item);
        if(check(item) == true){
            return;
        } else {
            item = item.replace(/\s+/g,' ').trim();
            const newItem = {
                id:  todoList[todoList.length-1] ? parseInt(todoList[todoList.length-1].id)+1 : 1,
                work: item,
                isComplete: false
            }
            const newList = [...todoList];
            newList.push(newItem);
            setData(newList);
        }
    }

    function handlerOnChangActive(item){
        const newList = [...todoList];
        newList[item.id-1].isComplete = !newList[item.id-1].isComplete;
        setData(newList);
    }
    
    function handlerAllCompleted(){
        const newList = [...todoList];
        for (const items in newList) {
            if(newList[items].isComplete == false) {
                newList[items].isComplete = true;
            }
        }
        setData(newList);
    }

    function handlerOnFilterItem(text){
            const filterName = text;
            if(filterName == 'All'){
                
            } else if ( filterName == 'Active') {
                const action = activeWork(filterName);
                dispatch(action);
            } else if ( filterName == 'Completed') {
                const action = completeWork(filterName);
                dispatch(action);
            } else if ( filterName == 'Clear Completed') {
                for (const items in toDoList) {
                    if(toDoList[items].isComplete == true) {
                        dispatch(deleteToDo(toDoList[items].id));
                    }
                }
            }
            
        }

    return(
        <TodoContext.Provider 
            value={[
                todoList,
                handlerSubmitInput,
                handlerOnChangActive,
                handlerAllCompleted,
                // handlerOnFilterItem, 
            ]}
        >
            {props.children}
        </TodoContext.Provider>
    )
}

