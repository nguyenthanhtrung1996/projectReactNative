import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function CartScreen(props){
    const { cartItems, handlerDecrease, handleIncrese } = props;
    console.log(cartItems);
    return(
        <View>
            {cartItems.quality > 0 && 
                <View style={styles.shadow}>
                <View style={styles.container}>
                    <Image style={styles.img} source={{ url: cartItems.images}} />
                    <View style={styles.info}>
                        <Text style={styles.name}>{cartItems.name}</Text>
                        <View style={styles.priceRow}>
                            <Text style={styles.price}>{cartItems.price}</Text>
                            <View style={styles.quality}>
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
                                        // Alert.alert('Thành Công', 'Đã thêm 1 sản phẩm')
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


const styles = StyleSheet.create({
    quality:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
        // textAlignVertical:'center',
        // fontSize: 16
        
    },
    cartText: {
        textTransform: 'uppercase',
        fontSize: 20,
        color: '#2f95dc'
    },
    container: {
        marginBottom: 20,
        borderRadius: 4,
        backgroundColor: '#FFF',
        overflow: 'hidden',
        flexDirection: 'row'
    },
    shadow: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 }
    },
    info: {
        padding: 8,
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        
    },
    img: {
        flex: 1,
        height: 150,
        borderRadius: 4
    },
    name: {
        fontSize: 16,
        marginBottom: 8
    },
    priceRow: {
        flexDirection: 'row',
        alignContent:'space-between'
    },
    price: {
        fontSize: 16,
        color: '#888',
        flex: 1
    }
})