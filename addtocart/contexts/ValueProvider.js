import React,{useEffect, useState} from 'react';
import ValueContext from './ValueContext';
import axios from 'axios';
import { Alert } from 'react-native';

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
    }, []);

    const updateData = async (index, data) => {
        console.log(data);
        await axios.put(`https://602c78c930ba720017223021.mockapi.io/api/v1/product/${index}`, data)
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    
    function handlerDecrease(item){
        const index = cartItems.findIndex((i) => i.id === item.id);
        const newCartItem = [...cartItems];
        --newCartItem[index].quality;
        setCartItems(newCartItem);
    }

    function handleIncrese(item){
        const index = cartItems.findIndex((i) => i.id === item.id);
        const newCartItem = [...cartItems];
        ++newCartItem[index].quality;
        setCartItems(newCartItem);
        Alert.alert('Thành Công', 'Thêm 1 sản phẩm');
        updateData(index+1, newCartItem[index]);
    }
  
    return (
        <ValueContext.Provider value={[ cartItems, handlerDecrease, handleIncrese ]}>
            {props.children}
        </ValueContext.Provider>
    )
}

export default ValueProvider;