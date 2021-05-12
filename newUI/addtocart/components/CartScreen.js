import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { CartContext } from '../context/Cart';

function CartScreen({ navigation }) {

    const [ products, addtocart, decreaseProduct, removeProduct, getTotal ] = useContext(CartContext);
    // const priceTotal = useRef(0);
    // useEffect(() => {
    //     products.forEach(element => {
    //         priceTotal += element.quality * element.price;
    //     });
    // }, [products])

    return (
        <View style={{flex: 1, padding: 10, backgroundColor: 'white'}}>
            <View style={{flexDirection: 'row', justifyContent:'space-around', paddingVertical: 10}}>
                <Text style={{flex: 2, textAlign: 'center',fontSize: 32, fontWeight: '700'}}>ADIDAS</Text>
                <View style={{flex: 1,flexDirection: 'row', justifyContent:'space-evenly'}}>
                    <Icon 
                        name="home-outline" 
                        size={30} 
                        color='black'
                        style={{textAlignVertical: 'center'}}
                        onPress={() => {
                            navigation.navigate('Home');
                            // console.log('clicked', props);
                        }}
                    />
                    <Icon 
                        name="cart" 
                        size={30} 
                        color='black'
                        style={{textAlignVertical: 'center'}}
                        
                    />
                </View>
            </View>
            <View style={{flex: 1, backgroundColor: 'white',padding: 10, elevation: 10}}>
                <ScrollView>
                    {
                        products.map((product) => {
                            if(product.quality > 0) {
                                return(
                                    <View style={{borderWidth: 1, borderStyle: 'solid', borderColor: 'rgba(0,0,0,.125)'}}>
                                        <View style={{alignItems: 'flex-end'}}>
                                            <Icon
                                                name='close-circle'
                                                color='black'
                                                size={20}
                                                onPress={() => {
                                                    removeProduct(product.id);
                                                }}
                                            />
                                        </View>
                                        <View style={{width: '100%',padding: 10, marginBottom: 10,}}>
                                            <Image 
                                                source={{uri: product.image}}
                                                style={{width: '100%',height: 383}}
                                            />
                                            <Text style={{fontSize: 20, fontWeight: '700'}}>{product.name}</Text>
                                            <Text style={{color:'red', fontSize: 16}}>{product.price}$</Text>
                                            <Text style={{fontWeight: '700'}}>{product.decription2}</Text>
                                            <View style={{flexDirection:'row'}}>
                                                <Icon 
                                                    name='remove-circle'
                                                    color='black'
                                                    size={20}
                                                    style={{textAlignVertical: 'center'}}
                                                    onPress={() => {
                                                        decreaseProduct(product.id);
                                                    }}
                                                />
                                                <Text style={{marginHorizontal: 12, fontSize: 20}}>{product.quality}</Text>
                                                <Icon 
                                                    name='add-circle'
                                                    color='black'
                                                    size={20}
                                                    style={{textAlignVertical: 'center'}}
                                                    onPress={() => {
                                                        addtocart(product.id);
                                                    }}
                                                />
                                            </View>
                                        </View> 
                                    </View>
                                )
                            }
                        })
                    }
                    <View style={{flexDirection: 'row', justifyContent:'center'}}>
                        <TouchableHighlight style={{paddingHorizontal: 15, paddingVertical: 5, backgroundColor: '#2d3436'}}>
                            <Text style={{fontSize: 20,color: 'white'}}>PAYMENT</Text>
                        </TouchableHighlight>
                        <Text style={{fontSize: 20,color: '#c0392b', fontWeight: '700'}}>ToTal: {getTotal()}$
                        </Text>
                    </View>
                    {/* <View style={{borderWidth: 1, borderStyle: 'solid', borderColor: 'rgba(0,0,0,.125)'}}>
                        <View style={{alignItems: 'flex-end'}}>
                            <Icon
                                name='close-circle'
                                color='black'
                                size={20}
                            />
                        </View>
                        <View style={{width: '100%',padding: 10, marginBottom: 10,}}>
                            <Image 
                                source={{uri: products[0].image}}
                                style={{width: '100%',height: 383}}
                            />
                            <Text style={{fontSize: 20, fontWeight: '700'}}>{products[0].name}</Text>
                            <Text style={{color:'red', fontSize: 18}}>{products[0].price}$</Text>
                            <Text>{products[0].decription2}</Text>
                        </View> 
                    </View> */}
                </ScrollView>
            </View>
        </View>
    );
}

export default CartScreen;