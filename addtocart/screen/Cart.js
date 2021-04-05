import React, { useContext } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CartScreen from '../components/CartScreen';
import ValueContext from '../contexts/ValueContext';

import { stylesCart } from './controller/style'

export default function Cart(){
    const [ cartItems, handlerDecrease, handleIncrese, deletedItem ] = useContext(ValueContext);
    
    return(
        <FlatList 
        data={cartItems}
        renderItem={({item}) => 
            <View style={stylesCart.wrapper}>
                <CartScreen 
                    cartItems={item} 
                    handlerDecrease={handlerDecrease} 
                    handleIncrese={handleIncrese}
                    deletedItem={deletedItem}
                />
            </View>
        }
        keyExtractor={(item) => `${item.id}`}
        />
    )
}



  