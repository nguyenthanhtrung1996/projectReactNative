
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ProductListItem from '../components/ProductListItem';
import ValueContext from '../contexts/ValueContext';

import { stylesCategory } from './controller/style'

export default function Category(props) {
  const [ cartItems, handleDecrese, handleIncrese ] = useContext(ValueContext);
  console.log(cartItems)
  return (
    <FlatList 
      data={cartItems}
      renderItem={({item}) => 
        <View style={stylesCategory.wrapper}>
          <ProductListItem cartItems={item} handleBuy={handleIncrese} />
        </View>
      }
      keyExtractor={(item) => `${item.id}`}
    />
    
  
    
  );
  
}
