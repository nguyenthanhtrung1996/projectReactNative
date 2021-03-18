import React from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import Img from '../assets/build-outline.png';
import { stylesCategoryListItem } from './controller/style';


export default function CategoryListItem(props){
    const { category, onPress } = props;
    return (
    <TouchableHighlight onPress={onPress}>
        <View style={stylesCategoryListItem.container}>
            <Text style={stylesCategoryListItem.title}> {category.name} </Text>
            <Image style={stylesCategoryListItem.categoryImage} source={Img} /> 
         
        </View>
    </TouchableHighlight>)
}
