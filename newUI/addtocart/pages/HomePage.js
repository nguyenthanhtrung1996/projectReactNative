import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import HomeScreen from '../components/HomeScreen';
function HomePage({ navigation }) {
    return (
        <HomeScreen navigation={navigation}/>
    );
}

export default HomePage;