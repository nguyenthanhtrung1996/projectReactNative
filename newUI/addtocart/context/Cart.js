import axios from 'axios';
import React, { useEffect, useState } from 'react';


export const CartContext = React.createContext();

export function CartProvider(props){
    const [ products, setProducts ] = useState([]);
    const [ cart, setCart ] = useState([])

    useEffect(() => {
        axios.get('https://60594847b11aba001745bd6f.mockapi.io/Products')
        .then((res)=>{
            setProducts(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    const addtocart = (product) => {
        const newCart = [...cart];
        ++product.quality;
        newCart.push(product);
        setCart(newCart);
        console.log(cart);
    }

    return(
        <CartContext.Provider
            value = {[
                products,
                addtocart
            ]}
        >
            {props.children}
        </CartContext.Provider>
    )
}