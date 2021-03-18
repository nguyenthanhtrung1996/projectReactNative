import React, { useState } from 'react';
import { Button, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { stylesToDoScreen } from './controller/style';


function ToDoScreen(props){
    const { toDoList, handlerSubmitInput, handlerOnFilterItem, handlerOnChangActive,handlerAllCompleted } = props;
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
                    onChangeText={(text) => setTerm(text)}
                    value={term}
                    placeholder='What Need To Be Done?'
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
                <TouchableOpacity>
                    <Button 
                        style={stylesToDoScreen.button} 
                        title={'Add'} 
                        onPress={()=>{
                            handlerSubmitInput(term);
                            setTerm('');}}
                        color='#74b9ff'
                            />
                </TouchableOpacity>
             </View>
            <View style = {{flex: 1,width: '100%'}}>
                <ScrollView>
                {toDoList.map(function(item){
                    if(item.isComplete == false){
                        return (
                            <Text style={stylesToDoScreen.contentFalse}>
                                <Icon name='checkmark-outline' size={24}  onPress={() => handlerOnChangActive(item)}/>
                                {item.work}
                            </Text>
                    )} else if ( item.isComplete == true){
                        return(
                            <Text style={stylesToDoScreen.contentTrue}>
                                <Icon name='checkmark-outline' size={24}  onPress={() => handlerOnChangActive(item)}/>
                                {item.work}
                            </Text>
                    )}
                })}
                
                </ScrollView>
            </View>
            <View style={stylesToDoScreen.footer}>
                <View style={stylesToDoScreen.leftFooter}>
                    <Button 
                        style={focus ? stylesToDoScreen.focusBtnFooter : stylesToDoScreen.btnFooter} 
                        onPress={() => handlerOnFilterItem('All')} 
                        onFocus={() => setFocus(true)}
                        title={'All'} 
                        color='#74b9ff'
                    />
                    {/* <Text 
                        style={focus ? stylesToDoScreen.focusBtnFooter : stylesToDoScreen.btnFooter} 
                        onPress={() => {
                            handlerOnFilterItem('All');
                        }}
                        
                        >
                            All
                    </Text> */}
                    <Button
                        style={stylesToDoScreen.btnFooter} 
                        onPress={() => handlerOnFilterItem('Active')} 
                        title={'Active'}
                        color='#74b9ff'
                    />
                    <Button 
                        style={stylesToDoScreen.btnFooter} 
                        onPress={() => handlerOnFilterItem('Completed')} 
                        title={'Completed'}
                        color='#74b9ff'
                    />
                </View>
                <View>
                    <Button 
                        onPress={() => handlerOnFilterItem('Clear Completed')} 
                        title={'Clear Completed'} 
                        color='#74b9ff'
                    >
                    </Button>
                    {/* <Text style={stylesToDoScreen.btnFooter} onPress={() => handlerOnFilterItem('Clear Completed')}>Clear Completed</Text> */}
                </View>
            </View>
        </View>
    )
}

export default ToDoScreen;
