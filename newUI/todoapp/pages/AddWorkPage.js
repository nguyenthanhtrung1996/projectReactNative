import React from 'react';
// import { Text, View } from 'react-native';
import AddWorkScreen from '../components/AddWorkScreen';

function AddWorkPage(props) {
    const { navigation } = props;
    return (
        <AddWorkScreen navigation={navigation}/>
    );
}

export default AddWorkPage;