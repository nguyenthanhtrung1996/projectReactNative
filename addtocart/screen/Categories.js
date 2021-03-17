
import React, {  useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
// import CategoryListItem from '../components/CategoryListItem'

import CategoryListItem from '../components/CategoryListItem'

export default function Categories({ navigation }) {
  const [ categories, setCategories ] = useState([{ id:1, name:'Dụng cụ xây dựng'}]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#FFF'}}>
      <FlatList 
        data={categories}
        numColumns={3}
        renderItem={({item}) => 
          <View style={styles.wrapper}>
              <CategoryListItem category={item}
              onPress={() => navigation.navigate('Category',{
                categoryName: item.name
              })} />
          </View>
        }
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={styles.container}
      />
      
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    // justifyContent: 'center',
    // paddingHorizontal: 8
  },
  wrapper: {
    // flex: 1,
    paddingHorizontal: 16
  }
});
