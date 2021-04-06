import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function HomepageScreen(props) {
    const { todoList, navigation } = props;
    console.log(props);
    return (
        <View style={{flex: 1, padding: 15, backgroundColor: '#020f38'}}>
            <View style={{flex: 10}}>
                <View style={{flex: 3}}>
                    <Text style={{marginBottom: 10, color: 'white', fontSize: 18, fontWeight: '700'}} >Most used timer</Text>
                    <View  style={{height: '40%',backgroundColor:'#ffeaec', borderRadius: 10,marginBottom: 15, paddingHorizontal:15, }}>
                        <View style={{height: '100%', justifyContent: 'center'}}>
                            <Text style={{fontSize: 16, fontWeight:'700'}}>Breakfast</Text>
                            <Text style={{lineHeight: 32}}>15m</Text>
                        </View>
                        
                    </View>
                    <View  style={{height: '40%',flexDirection: 'row'}}>
                        <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#82adff', paddingLeft: 15, borderRadius: 10, marginRight:10}}>
                            <Text style={{fontSize: 16, fontWeight:'700'}}>Lunch</Text>
                            <Text style={{lineHeight: 32}}>60min</Text>
                        </View>
                        <View style={{flex: 2, justifyContent: 'center', backgroundColor: '#97d9b4', paddingLeft: 15, borderRadius: 10, marginLeft:10 }}>
                            <Text style={{fontSize: 16, fontWeight:'700'}}>Dinner</Text>
                            <Text style={{lineHeight: 32}}>30min</Text>
                        </View>
                    </View>

                </View>
                <View style={{flex: 4}}>
                    <Text style={{marginBottom: 10, color: 'white', fontSize: 18, fontWeight: '700',lineHeight: 32}} >Other Timer</Text>
                    <View style={{flexDirection: 'row',justifyContent:'space-between', flexWrap: "wrap",width: '100%'}}>
                        {todoList.map((todo) => {
                            return (<View style={{width: '30%',paddingHorizontal: 10, paddingVertical: 20,borderRadius: 10, backgroundColor:'#363d5a', marginBottom: 15}}>
                                        <Text style={{fontSize: 18,color: 'white'}}>{todo.title}</Text>
                                        <Text style={{lineHeight: 32,color: 'white'}}>{todo.time}</Text>
                                    </View>)
                        })}
                    </View>
                </View>
            </View>
            <View style={{flex: 1,alignItems:'center'}}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('AddWorkPage');
                    }}
                    style={{width: 50, height: 50}}
                    // onPress={}
                >
                    <Text style={{height: '100%', textAlign:'center',fontSize: 34, backgroundColor: '#ff90a1', color: 'white',borderRadius: 50}}>+</Text>
                    {/* <Icon name='add-circle' size={32} style={{color: '#ff90a1'}}/> */}
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default HomepageScreen;