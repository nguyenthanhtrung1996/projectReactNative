import React,{useEffect, useState} from 'react';
import ValueContext from './ValueContext';
import axios from 'axios';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function ValueProvider(props){
    const [ cartItems, setCartItems ] = useState();

    useEffect( async () => {
        await axios.get('https://602c78c930ba720017223021.mockapi.io/api/v1/product')
         .then( res => {
            setCartItems(res.data);
          })
          .catch( error => {
                  console.error(error);
                })
        getStorage();
    }, []);

    const getStorage =  async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('CartItems')
                console.log(JSON.parse(jsonValue));
                if(jsonValue !== null){
                    setCartItems(JSON.parse(jsonValue))
                }
            } catch(error) {
                console.log(error);
            }
            console.log('get....');
    };
        
    

    const setAsyncStorage = async(item) => {
            try {
              await AsyncStorage.setItem(
                'CartItems',
                JSON.stringify(item),
                () => {
                    AsyncStorage.mergeItem(
                    'CartItems',
                    JSON.stringify(cartItems),
                    );
                }
              );
            } catch (error) {
            }
    };
        
    



    // const updateData = async (index, data) => {
    //     console.log(data);
    //     await axios.put(`https://602c78c930ba720017223021.mockapi.io/api/v1/product/${index}`, data)
    //     .then(function (response) {
    //         console.log(response);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    // }
    
    
    function handlerDecrease(item){
        const index = cartItems.findIndex((i) => i.id === item.id);
        const newCartItem = [...cartItems];
        --newCartItem[index].quality;
        setCartItems(newCartItem);
        setAsyncStorage(newCartItem);
    }

    function handleIncrese(item){
        const index = cartItems.findIndex((i) => i.id === item.id);
        const newCartItem = [...cartItems];
        ++newCartItem[index].quality;
        setCartItems(newCartItem);
        setAsyncStorage(newCartItem);
        Alert.alert('Thành Công', 'Thêm 1 sản phẩm');
        // updateData(index+1, newCartItem[index]);
        
    }

    
  
    return (
        <ValueContext.Provider value={[ cartItems, handlerDecrease, handleIncrese ]}>
            {props.children}
        </ValueContext.Provider>
    )
}

export default ValueProvider;