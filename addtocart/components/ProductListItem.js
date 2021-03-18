import React from 'react';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { stylesProductListItem } from './controller/style';

export default function ProductListItem(props){
    const { cartItems, handleBuy } = props;
    return(
        <View style={stylesProductListItem.shadow}>
            <View style={stylesProductListItem.container}>
                <Image style={stylesProductListItem.img} source={{ url: cartItems.images}} />
                <View style={stylesProductListItem.info}>
                    <Text style={stylesProductListItem.name}>{cartItems.name}</Text>
                    <View style={stylesProductListItem.priceRow}>
                        <Text style={stylesProductListItem.price}>{cartItems.price}</Text>
                        <TouchableOpacity>
                            <Button
                             style={stylesProductListItem.cartText}
                             title='MUA +'
                             onPress = { () => {
                                handleBuy(cartItems);
                             } }
                            ></Button>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
