import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { CartContext } from '../context/Cart';

function CartScreen({ navigation }) {

    const [ products, addtocart ] = useContext(CartContext);

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
            <View style={{flex: 1, backgroundColor: 'white',padding: 10, }}>
                <View style={{width: '100%',padding: 10,borderWidth: 1, borderStyle: 'solid', borderColor: 'rgba(0,0,0,.125)', marginBottom: 10,}}>
                    <Image 
                        source={{uri: products[0].image}}
                        style={{width: '100%',height: 383}}
                    />
                    <Text style={{fontSize: 20, fontWeight: '700'}}>{products[0].name}</Text>
                    <Text style={{color:'red', fontSize: 18}}>{products[0].price}$</Text>
                    <Text>{products[0].decription1}</Text>
                </View>  
            
            </View>
        </View>
    );
}

export default CartScreen;