
import React, { useState } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CategoryListItem from '../components/CategoryListItem';
import { stylesCategories } from './controller/style';



export default function Categories({ navigation }) {
  const [ categories, setCategories ] = useState([{ id:1, name:'Dụng cụ xây dựng'}]);

  return (
    <View style={stylesCategories.container}>
      <FlatList 
        data={categories}
        numColumns={3}
        renderItem={({item}) => 
          <View style={stylesCategories.wrapper}>
              <CategoryListItem category={item}
              onPress={() => navigation.navigate('Category',{
                categoryName: item.name
              })} />
          </View>
        }
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={stylesCategories.contenContainer}
      />
    </View>
  );
  
}

