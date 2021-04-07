import React from 'react';
// import { Text, View } from 'react-native';
import AddWorkScreen from '../components/AddWorkScreen';

function AddWorkPage(props) {
    const { navigation, route } = props;
    console.log(route.params)
    return (
        <AddWorkScreen navigation={navigation}/>
    );
}

export default AddWorkPage;