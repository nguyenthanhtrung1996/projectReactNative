import React, { useEffect, useRef, useState } from 'react';
// import { AsyncStorage }
// import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const TodoContext = React.createContext();

export function TodoProvider(props){
    const [ todoList, setTodoList ] = useState([]);
    useEffect(() => {
        
        retrieveToDo = async (callback) => {
            try {
                const jsonValue = await AsyncStorage.getItem('todoList')
                console.log('todolist json', JSON.parse(jsonValue));
                if(jsonValue !== null){
                    setTodoList(JSON.parse(jsonValue))
                }
            } catch(error) {
                console.log(error);
            }
            callback();
          };
        retrieveToDo();
        
        return () => {
            
        }
    }, []);

    useEffect(()=>{
        if(todoList.length > 0) {
            var check  = setInterval( () => {
                const d = new Date();
                const h = d.getHours();
                const m = d.getMinutes();
                console.log(`đang check 2 ${h}:${m}, ${todoList}`);
                const newList = [...todoList];
                console.log(newList);
                for (const todo of newList) {
                    if(todo.time.hours == h && todo.time.minute == m && todo.isComplete == false){
                        todo.isComplete = true;
                        Alert.alert(`Remind: ${todo.title}`, `${todo.work}`);
                        
                    }
                    console.log(todo)
                }
                console.log(newList)
                setData(newList);
            }, 5000);
        }
        return () => {
            clearInterval(check);
        }
    }, [todoList]);

    const setAsyncStorage = async () => {
        // console.log(object);
        try {
            await AsyncStorage.setItem(
              'todoList',
              JSON.stringify(todoList),
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
        console.log(todoList)
    }



    function handlerOnChangActive(item){
        const newList = [...todoList];
        const index = newList.indexOf(item);
        newList[index].isComplete = !newList[index].isComplete;
        setData(newList);
    }
    
  
    function addWork(obj){
        
        if(obj == undefined) return;
        if (obj.id !== undefined) {
            const newItem = {
                id:  obj.id,
                title: obj.title,
                work: obj.work,
                time: obj.time,
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
                time: obj.time,
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
                deleteToDo,
            ]}
        >
            {props.children}
        </TodoContext.Provider>
    )
}

