import React, { useEffect } from 'react';
import { Alert, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
    activeWork,
    allWork, completeWork,
    deleteToDo, fetchToDo,
    postToDo, putToDo
} from '../actions/addWork';
import ToDoScreen from '../components/ToDoScreen';
import { stylesHomePage } from './controller/style';

function HomePage(props){
    const toDoList = useSelector(state => state.todo.list);
    const toDoToTal = useSelector(state => state.todo.arrayClone);

    const { changeFlex } = props;

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchToDo());
    }, [fetchToDo]);
    
   

    function check(item){
        if(item == '' || item == 'undefined') {
            Alert.alert('Error', `Work isn't empty or undefined!!`)
            return true;
        }
        item = item.replace(/\s+/g,' ').trim();
        for (const obj of toDoToTal) {
            if(item.toLowerCase() === obj.work.toLowerCase()){
                Alert.alert('Error', 'Work haved!!')
                return true;
            }
        }
        return false;
    }

    function handlerSubmitInput(item){
        if(check(item) == true){
            return;
        } else {
            item = item.replace(/\s+/g,' ').trim();
            const newItem = {
                id:  toDoList[toDoList.length-1] ? parseInt(toDoList[toDoList.length-1].id)+1 : 1,
                work: item,
                isComplete: false
            }
            dispatch(postToDo(newItem));
        }
    }

    function handlerOnFilterItem(text){
        const filterName = text;
        if(filterName == 'All'){
            const action = allWork(filterName);
            dispatch(action);
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

    function handlerAllCompleted(){
        for (const items in toDoList) {
            if(toDoList[items].isComplete == false) {
                dispatch(putToDo(toDoList[items].id,toDoList[items]));
            }
        }
    }

    function handlerChangeActive(item){
        dispatch(putToDo(item.id,item));
    }
    return(
        <View style={stylesHomePage.container}>
            <ToDoScreen 
                toDoList={toDoList}
                handlerSubmitInput={handlerSubmitInput} 
                handlerOnFilterItem={handlerOnFilterItem} 
                handlerOnChangActive={handlerChangeActive}
                handlerAllCompleted={handlerAllCompleted}
                changeFlex={changeFlex}
            />
        </View>
    )
}


export default HomePage;

