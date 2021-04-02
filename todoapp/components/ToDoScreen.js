import React, { useContext, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TodoContext } from '../context/todo';
import { stylesToDoScreen } from './controller/style';



function ToDoScreen({ route, navigation }){
    const [ todoList, handlerOnChangActive, removeData, addWork, deleteToDo, currentDate ] = useContext(TodoContext);
    // useEffect(()=>{
    //     addWork(route.params);
    // }, [route.params]);
    console.log(todoList);
    return (
        <View style={stylesToDoScreen.container}>
            
             <View style={stylesToDoScreen.buttonBox}>
                <TouchableOpacity
                    style={stylesToDoScreen.button}
                    onPress={() => {
                        navigation.navigate('AddWorkPage', { });
                    }}
                    >
                    <Icon 
                        style={{textAlignVertical: 'center'}} 
                        name='add-circle' 
                        size={48} 
                        color="#6c5ce7"
                    />
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
                                <Icon 
                                    name="pencil" 
                                    size={24} 
                                    style={{textAlignVertical:'center'}}
                                    onPress={() => {
                                        navigation.navigate('AddWorkPage', { item });
                                    }
                                    }
                                />
                                
                                
                                
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
