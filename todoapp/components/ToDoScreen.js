import React, { useState, useContext } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { stylesToDoScreen } from './controller/style';
import { TodoContext } from '../context/todo';



function ToDoScreen({ navigation }){
    // const { todoList, handlerSubmitInput, handlerOnChangActive, handlerAllCompleted, changeFlex } = props;
    const [ todoList, handlerSubmitInput, handlerOnChangActive, handlerAllCompleted ] = useContext(TodoContext);
    // console.log(handlerSubmitInput);
    // , handlerSubmitInput, handlerOnFilterItem, handlerOnChangActive,handlerAllCompleted,
    const [ term, setTerm ] = useState();
    const [ focus, setFocus ]= useState(false);
    return (
        <View style={stylesToDoScreen.container}>
            <View style={stylesToDoScreen.formInput}>
                <View style={{justifyContent: 'center'}}>
                    <Icon 
                        name='chevron-down-outline' 
                        size={24} 
                        style={stylesToDoScreen.checkAll}
                        onPress={() => handlerAllCompleted()}
                    />
                </View>
                
                <TextInput 
                    style={focus ? stylesToDoScreen.focusInput : stylesToDoScreen.input}
                    onChangeText={(text) => {setTerm(text);}}
                    value={term}
                    placeholder='What Need To Be Done?'
                    onFocus={() => {
                        setFocus(true);
                        changeFlex(true);
                    }}
                    onBlur={() => {
                        setFocus(false);
                        changeFlex(false);
                    }}
                />
                <TouchableOpacity
                    style={stylesToDoScreen.button}
                    onPress={()=>{
                        handlerSubmitInput(term);
                        setTerm('');}}
                    >
                    <Text style={stylesToDoScreen.buttonText}>ADD</Text>
                </TouchableOpacity>
             </View>
            <View style = {{flex: 1,width: '100%'}}>

                <ScrollView>
                {todoList.map(function(item){
                    if(item.isComplete == false){
                        return (
                            <Text 
                                style={stylesToDoScreen.contentFalse}  
                                onPress={() => {
                                    handlerOnChangActive(item);
                                    navigation.navigate('AddWorkPage', { item });
                                }
                                }
                            >
                                <Icon name='checkmark-outline' size={24}/>
                                {item.work}
                            </Text>
                    )} else if ( item.isComplete == true){
                        return(
                            <Text 
                             style={stylesToDoScreen.contentTrue} 
                             onPress={() => handlerOnChangActive(item)}
                             >
                                <Icon name='checkmark-outline' size={24}/>
                                {item.work}
                            </Text>
                    )}
                })}
                
                </ScrollView>
            </View>
            
            
            {/* <View style={stylesToDoScreen.footer}>
                
                    <TouchableOpacity
                    style={stylesToDoScreen.button}
                    // onPress={()=>{
                    //     handlerOnFilterItem('All');
                    //     }}
                    >
                        <Text style={stylesToDoScreen.buttonText}>ALL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={stylesToDoScreen.button}
                    // onPress={()=>{
                    //     handlerOnFilterItem('Active');
                    //     }}
                    >
                        <Text style={stylesToDoScreen.buttonText}>ACTIVE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={stylesToDoScreen.button}
                    // onPress={()=>{
                    //     handlerOnFilterItem('Completed');
                    //     }}
                    >
                        <Text style={stylesToDoScreen.buttonText}>COMPLETED</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={stylesToDoScreen.button}
                        // onPress={()=>{
                        //     handlerOnFilterItem('Clear Completed');
                        //     }}
                        >
                            <Text style={stylesToDoScreen.buttonText}>CLEAR COMPLETED</Text>
                    </TouchableOpacity>
            </View> */}
        </View>
    )
}

export default ToDoScreen;
