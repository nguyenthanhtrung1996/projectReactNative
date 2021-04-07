import React, { useState } from 'react'

export const TodoContext = React.createContext();

export function TodoProvider(props){
    const [ todoList, setTodoList ] = useState([{title: 'coffe', time: '00:45'},{title: 'breakfast', time: '00:45'},{title: 'coffe', time: '00:45'},{title: 'breakfast', time: '00:45'}]);

    function addTodo(objtodo){
        console.log('context add:',objtodo);
        const newList = [...todoList];
        newList.push(objtodo);
        setTodoList(newList);
    }

    return(
        <TodoContext.Provider 
            value={[
                todoList,
                addTodo,
            ]}
        >
            {props.children}
        </TodoContext.Provider>
    )
}