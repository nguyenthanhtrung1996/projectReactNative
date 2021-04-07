import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';

import HomepageScreen from '../components/HomepageScreen';
import { TodoContext } from '../context/todo';

function Homepage(props) {
    const { navigation, route } = props;

    const [ todoList, addTodo ] = useContext(TodoContext);

    useEffect(()=>{
        // console.log('useEffect route: ',route.params);
        if(route.params == undefined) return;
        addTodo(route.params);
    }, [route.params])
    // console.log(route);
    return (
        <HomepageScreen todoList={todoList} navigation={navigation}/>
    );
}

export default Homepage;