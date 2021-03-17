import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../screen/Cart'

const CartStack = createStackNavigator();

function CartStackScreen(){
  return(
      <CartStack.Navigator>
        <CartStack.Screen name='Cart' component={Cart} options={{ title: "Cart" }}/>
      </CartStack.Navigator>
  )
}

export default CartStackScreen;