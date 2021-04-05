import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
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
                const newList = [...todoList];
                for (const todo of newList) {
                    if(todo.time.hours == h && todo.time.minute == m && todo.isComplete == false){
                        todo.isComplete = true;
                        Alert.alert(`Remind: ${todo.title}`, `${todo.work}`);
                        setData(newList);
                        
                    }
                }
            }, 5000);
        }
        return () => {
            clearInterval(check);
        }
    }, [todoList]);

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

    const removeData = async () => {
        try {
            await AsyncStorage.removeItem('todoList');
            setTodoList([]);
        } catch (error) {
        console.log(error);
        }
    };

    function setData(obj){
        setTodoList(obj);
        setAsyncStorage(obj);
    }



    function handlerOnChangActive(item){
        const newList = [...todoList];
        const index = newList.indexOf(item);
        newList[index].isComplete = !newList[index].isComplete;
        setData(newList);
    }
    
  
    function addWork(obj){
        if(obj == undefined && obj == undefined) return;
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

