import React, { useState, useContext, useEffect } from 'react';
import { Dimensions, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { stylesToDoScreen } from './controller/style';
import { TodoContext } from '../context/todo';



function ToDoScreen({ route, navigation }){
    const [ todoList, handlerOnChangActive, removeData, addWork, deleteToDo, currentDate ] = useContext(TodoContext);
    // console.log(clearTime);
    useEffect(()=>{
        addWork(route.params);
        // decreaseTime();
    }, [route.params]);


    const [ focus, setFocus ]= useState(false);

  

    return (
        <View style={stylesToDoScreen.container}>
            
             <View style={stylesToDoScreen.buttonBox}>
                <TouchableOpacity
                    style={stylesToDoScreen.button}
                    onPress={() => {
                        navigation.navigate('AddWorkPage', { });
                    }}
                    >
                     <Icon style={{textAlignVertical: 'center'}} name='add-circle' size={48} color="#6c5ce7"/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={stylesToDoScreen.button}
                    onPress={() => removeData()}
                    >
                    <Text style={stylesToDoScreen.buttonText}>Empty</Text>
                </TouchableOpacity>
             </View>
             
            <View style = {todoList.length > 11 ? stylesToDoScreen.contentFlex : stylesToDoScreen.content }
                >
                <ScrollView>
                {todoList.length == 0 ? 
                    <View >
                        <Text style={stylesToDoScreen.nothing}>Nothing...</Text>
                    </View> : 
                todoList.map(function(item){
                    if(item.isComplete == false){
                        return (
                            <View style = {stylesToDoScreen.contentBox}>
                                <View style = {stylesToDoScreen.contentBox1}>
                                    <Icon 
                                        style={{textAlignVertical:'center', color: '#6c5ce7'}} 
                                        name='ellipse-outline' 
                                        size={20}
                                        onPress={()=>{
                                            handlerOnChangActive(item);
                                        }}
                                    />
                                    <Text 
                                        style={stylesToDoScreen.contentFalse}  
                                        onPress={() => {
                                            navigation.navigate('AddWorkPage', { item });
                                        }
                                        }
                                        numberOfLines={1}
                                    >
                                        {item.title}
                                    </Text>
                                    
                                </View>
                                {/* { item.time.hours == null  ? 
                                    <Text style={stylesToDoScreen.time}>{item.time.minute}</Text> */}
                                <Text style={stylesToDoScreen.time}>{item.time.hours}:{item.time.minute}</Text>
                                
                                
                                
                            </View>
                    )} else if ( item.isComplete == true){
                        return(
                            <View style = {stylesToDoScreen.contentBox}>
                                <View style = {stylesToDoScreen.contentBox1}>
                                    <Icon 
                                        style={{textAlignVertical:'center', color: '#6c5ce7'}} 
                                        name='ellipse' 
                                        size={20}
                                        onPress={()=>{
                                            handlerOnChangActive(item);
                                        }}
                                    />
                                    <Text 
                                        style={stylesToDoScreen.contentTrue}  
                                        onPress={() => {
                                            navigation.navigate('AddWorkPage', { item });
                                        }
                                        }
                                        numberOfLines={1}
                                    >
                                        {item.title}
                                    </Text>
                                </View>
                                <Icon 
                                    style={{textAlignVertical:'center'}} 
                                    name='trash-outline' 
                                    size={24}
                                    onPress={() => {
                                        deleteToDo(item);
                                    }}
                                />
                            </View>
                    )}
                })}
                
                </ScrollView>
            </View>
            
            
        </View>
    )
}

export default ToDoScreen;
