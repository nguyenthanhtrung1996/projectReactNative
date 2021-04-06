import React, { useState } from 'react';
import { View } from 'react-native';

import HomepageScreen from '../components/HomepageScreen';

function Homepage(props) {
    const { navigation } = props;
    const [ todoList, setTodoList ] = useState([{title: 'coffe', time: '45'},{title: 'breakfast', time: '45'},{title: 'coffe', time: '45'},{title: 'breakfast', time: '45'}])

    
    return (
        <HomepageScreen todoList={todoList} navigation={navigation}/>
    );
}

export default Homepage;