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

    const removeData = async (useName) => {
        try {
            await AsyncStorage.removeItem('todoList');
            setTodoList([]);
        } catch (error) {
        console.log(error);
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
        const index = newList.indexOf(item);
        newList[index].isComplete = !newList[index].isComplete;
        setData(newList);
    }
    

    function addWork(obj){
        console.log(obj);
        if(obj == undefined) return;
        if (obj.id !== undefined) {
            const newItem = {
                id:  obj.id,
                title: obj.title,
                work: obj.work,
                isComplete: false
            }
            const newList = [...todoList];
            newList[obj.id - 1]= {...newItem};
            setData(newList);
        } else {
            const newItem = {
                id:  todoList[todoList.length-1] ? parseInt(todoList[todoList.length-1].id)+1 : 1,
                title: obj.title,
                work: obj.work,
                isComplete: false
                }
                const newList = [...todoList];
                newList.push(newItem);
                setData(newList);
        }
    }
    function deleteToDo(obj){
        console.log(obj);
        const newList = [...todoList];
        const index = newList.indexOf(obj);
        newList.splice(index,1);
        setData(newList);
        
    }

    return(
        <TodoContext.Provider 
            value={[
                todoList,
                handlerOnChangActive,
                removeData,
                addWork,
                deleteToDo
            ]}
        >
            {props.children}
        </TodoContext.Provider>
    )
}

