import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Category from '../screen/Category'
import Categories from '../screen/Categories'

const CategoriesStack = createStackNavigator();

function CategoriesStackScreen(){
  return(
    <CategoriesStack.Navigator>
      <CategoriesStack.Screen name="Categories" component={Categories} options={{ title: 'Categories' }}/>
      <CategoriesStack.Screen name="Category" component={Category}/>
    </CategoriesStack.Navigator>
  )
}

export default CategoriesStackScreen;