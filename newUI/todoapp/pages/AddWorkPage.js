import React, { useContext } from 'react';
// import { Text, View } from 'react-native';
import AddWorkScreen from '../components/AddWorkScreen';
import { TodoContext } from '../context/todo';

function AddWorkPage(props) {
    const { navigation, route } = props;
    
    const [ todoList, addTodo, getTimeCurrent, removeTodo, todoEveryday, getTodoEveryday, innitValue, anim ] = useContext(TodoContext);
    // console.log(anim)
    return (
        <AddWorkScreen anim={anim} navigation={navigation}/>
    );
}

export default AddWorkPage;