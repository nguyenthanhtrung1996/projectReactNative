import React, { useContext } from 'react';
import { View, Button, Text } from 'react-native';
import ToDoScreen from '../components/ToDoScreen';
import { TodoContext } from '../context/todo';
import { stylesHomePage } from './controller/style';

function HomePage(props){
    const { changeFlex, navigation } = props;
    
    const [ todoList, handlerSubmitInput, handlerOnChangActive, handlerAllCompleted ] = useContext(TodoContext);
    
    // function check(item){
    //     if(item == '' || item == 'undefined') {
    //         Alert.alert('Error', `Work isn't empty or undefined!!`)
    //         return true;
    //     }
    //     item = item.replace(/\s+/g,' ').trim();
    //     for (const obj of toDoToTal) {
    //         if(item.toLowerCase() === obj.work.toLowerCase()){
    //             Alert.alert('Error', 'Work haved!!')
    //             return true;
    //         }
    //     }
    //     return false;
    // }

    // function handlerSubmitInput(item){
    //     if(check(item) == true){
    //         return;
    //     } else {
    //         item = item.replace(/\s+/g,' ').trim();
    //         const newItem = {
    //             id:  toDoList[toDoList.length-1] ? parseInt(toDoList[toDoList.length-1].id)+1 : 1,
    //             work: item,
    //             isComplete: false
    //         }
    //         dispatch(postToDo(newItem));
    //     }
    // }

    // function handlerOnFilterItem(text){
    //     const filterName = text;
    //     if(filterName == 'All'){
    //         const action = allWork(filterName);
    //         dispatch(action);
    //     } else if ( filterName == 'Active') {
    //         const action = activeWork(filterName);
    //         dispatch(action);
    //     } else if ( filterName == 'Completed') {
    //         const action = completeWork(filterName);
    //         dispatch(action);
    //     } else if ( filterName == 'Clear Completed') {
    //         for (const items in toDoList) {
    //             if(toDoList[items].isComplete == true) {
    //                 dispatch(deleteToDo(toDoList[items].id));
    //             }
    //         }
    //     }
        
    // }

    // function handlerAllCompleted(){
    //     for (const items in toDoList) {
    //         if(toDoList[items].isComplete == false) {
    //             dispatch(putToDo(toDoList[items].id,toDoList[items]));
    //         }
    //     }
    // }

    // function handlerChangeActive(item){
    //     dispatch(putToDo(item.id,item));
    // }
    
    return(
            <View style={stylesHomePage.container}>
            <View style={stylesHomePage.containerTitle}>
                <Text style={stylesHomePage.title}>todos</Text>
            </View>
            <ToDoScreen 
                    todoList={todoList}
                    handlerSubmitInput={handlerSubmitInput} 
                    // handlerOnFilterItem={handlerOnFilterItem} 
                    handlerOnChangActive={handlerOnChangActive}
                    handlerAllCompleted={handlerAllCompleted}
                    changeFlex={changeFlex}
                />
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('AddWorkPage')}
                />
            </View>
    
    )
}


export default HomePage;

