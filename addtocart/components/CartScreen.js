import React from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { stylesCartScreen } from './controller/style';


export default function CartScreen(props){
    const { cartItems, handlerDecrease, handleIncrese, deletedItem } = props;

    return(
        <View>
            {cartItems.quality > 0 && 
                    <View style={stylesCartScreen.container}>
                        <TouchableOpacity style={{alignSelf: 'flex-end'}}>
                                    <Icon name={'close-sharp'}
                                            size={24}
                                            key={cartItems.id}
                                            onPress={ () => {
                                                deletedItem(cartItems);
                                                // Alert.alert('Thành Công', 'Đã xóa sản phẩm')
                                            }}
                                            
                                    />
                        </TouchableOpacity>
                        <View style={stylesCartScreen.product}>
                            <Image style={stylesCartScreen.img} source={{ uri: cartItems.images}} />
                            <View style={stylesCartScreen.info}>
                                <Text style={stylesCartScreen.name}>{cartItems.name}</Text>
                                <View style={stylesCartScreen.priceRow}>
                                    <Text style={stylesCartScreen.price}>{cartItems.price}</Text>
                                    <View style={stylesCartScreen.quality}>
                                    <TouchableOpacity>
                                        <Icon name={'remove-circle'}
                                                size={32}
                                                key={cartItems.id}
                                                onPress={ () => {
                                                    handlerDecrease(cartItems);
                                                    Alert.alert('Thành Công', 'Đã xóa 1 sản phẩm')
                                                }}
                                        />
                                    </TouchableOpacity>
                                    <Text>{cartItems.quality}</Text>
                                    <TouchableOpacity>
                                        <Icon name={'add-circle'}
                                            size={32}
                                            onPress={ () => {
                                                handleIncrese(cartItems);
                                                
                                            }}
                                        />
                                    </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
            }
        </View>
    )
}

