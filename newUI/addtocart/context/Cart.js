import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';


export const CartContext = React.createContext();

export function CartProvider(props){
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        
        if(products.length == 0){
            getUser();
        }
        // _removeData()
    }, []);

    const _removeData = async () => {
        try {
        await AsyncStorage.removeItem('products');
        } catch (error) {
        console.log(error);
        }
    };

    const getTotal = () => {
        let priceTotal = 0;
        products.forEach(element => {
            priceTotal += element.quality * element.price;
        })
        return priceTotal;
    }

    async function getUser() {
        try {
          const response = await axios.get('https://60594847b11aba001745bd6f.mockapi.io/Products');
          if(products.length == 0){
            console.log('axios get:');
            setProducts(response.data);
            }
        } catch (error) {
          console.error(error);
        }
        _retrieveData();
      }

    const _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('products');
          if (value !== null) {
            setProducts(JSON.parse(value))
            // console.log(value);
          }
        } catch (error) {
          console.log(error)
        }
    };

    const setAsyncStorage = async (obj) => {
        console.log(obj);
        try {
            await AsyncStorage.setItem(
              'products',
              JSON.stringify(obj),
              () => {
                  AsyncStorage.mergeItem(
                  'products',
                  JSON.stringify(products),
                  );
              }
            );
          } catch (error) {
              console.log(error);
          }
    };


    const addtocart = (id) => {
        const newCart = [...products];
        ++newCart[id-1].quality;
        setProducts(newCart);
        setAsyncStorage(newCart);
    }

    const decreaseProduct = (id) => {
        const newCart = [...products];
        --newCart[id-1].quality;
        setProducts(newCart);
        setAsyncStorage(newCart);
    }

    const removeProduct = (id) => {
        const newCart = [...products];
        newCart[id-1].quality = 0;
        setProducts(newCart);
        // setAsyncStorage(newCart);
    }

    return(
        <CartContext.Provider
            value = {[
                products,
                addtocart,
                decreaseProduct,
                removeProduct,
                getTotal
            ]}
        >
            {props.children}
        </CartContext.Provider>
    )
}