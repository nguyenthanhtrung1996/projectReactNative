import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CartScreen from '../components/CartScreen';
import ValueContext from '../contexts/ValueContext';

export default function Cart(props){
    const [ cartItems, handlerDecrease, handleIncrese ] = useContext(ValueContext);
    return(
        <FlatList 
        data={cartItems}
        renderItem={({item}) => 
            <View style={styles.wrapper}>
                <CartScreen cartItems={item} handlerDecrease={handlerDecrease} handleIncrese={handleIncrese}/>
            </View>
        }
        keyExtractor={(item) => `${item.id}`}
        // contentContainerStyle={styles.container}
        />
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'stretch',
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      // paddingLeft: 16,
      // paddingRight: 16,
      
    },
    wrapper: {
      flex: 1,
      width: '100%',
      paddingHorizontal: 8,
      paddingTop: 16
    }
  });
  