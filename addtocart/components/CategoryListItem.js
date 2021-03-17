import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Img from '../assets/build-outline.png';


export default function CategoryListItem(props){
    // console.log(props);
    const { category, onPress } = props;
    return (
    <TouchableHighlight onPress={onPress}>
        <View style={styles.container}>
            <Text style={styles.title}> {category.name} </Text>
            <Image style={styles.categoryImage} source={Img} /> 
         
        </View>
    </TouchableHighlight>)
}

const styles = StyleSheet.create({
    categoryImage: {
        width: 64,
        height: 64
    },
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        marginBottom: 16
    },
    title:{
        textTransform: 'uppercase',
        marginBottom: 0,
        fontWeight: "700"
    }
})