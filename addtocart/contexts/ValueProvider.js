import React,{useEffect, useState} from 'react';
import ValueContext from './ValueContext';
import axios from 'axios';
import { Alert } from 'react-native';

function ValueProvider(props){
    const [ cartItems, setCartItems ] = useState();
    // ---------------- data ------------------
    // [
    //     {"id":"1","name":"Xe rùa","images":"https://3.bp.blogspot.com/-phS3Fb2wk-4/WtgRqoMwsgI/AAAAAAAAEiw/Ou6S45iBMVkVXA2FX6jJOR9533u5T38PwCLcBGAs/s400/dung%2Bcu%2Bnghe%2Bxay%2Bdung%2B%25285%2529.png","price":"500.000","quality":0},
    //     {"id":"2","name":"Bay","images":"https://tse2.mm.bing.net/th?id=OIP.m8DD-Kgl-98pVeTeE4T23QHaHa&pid=Api&P=0&w=300&h=300","price":"100.000","quality":0},
    //     {"id":"3","name":"Thước","images":"https://tse3.mm.bing.net/th?id=OIP.So4D5Xzay7dcpa4zFPDN5wHaHa&pid=Api&P=0&w=300&h=300","price":"200.000","quality":0},
    //     {"id":"4","name":"Xà Beng","images":"https://tse2.mm.bing.net/th?id=OIP.2hY3uIV7BB3HdRLAPKd2igHaE1&pid=Api&P=0&w=235&h=154","price":"300.000","quality":0},
    //     {"id":"5","name":"Khoan","images":"https://tse4.mm.bing.net/th?id=OIP.-DtCdKcXoMFRm474gXZOlwAAAA&pid=Api&P=0&w=258&h=181","price":"600.000","quality":0}
    // ]
    useEffect(() => {
        axios.get('https://602c78c930ba720017223021.mockapi.io/api/v1/product')
         .then( res => {
            setCartItems(res.data);
          })
          .catch( error => {
                  console.error(error);
                })
    }, []);
    
    
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
        console.log('Thành Công ', newCartItem[index].quality);
        setCartItems(newCartItem);
        Alert.alert('Thành Công', 'Thêm 1 sản phẩm');
    }
  
    return (
        <ValueContext.Provider value={[ cartItems, handlerDecrease, handleIncrese ]}>
            {props.children}
        </ValueContext.Provider>
    )
}

export default ValueProvider;