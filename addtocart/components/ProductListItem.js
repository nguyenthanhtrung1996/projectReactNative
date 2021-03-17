import React from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProductListItem(props){
    const { cartItems, handleBuy } = props;
    return(
        <View style={styles.shadow}>
            <View style={styles.container}>
                <Image style={styles.img} source={{ url: cartItems.images}} />
                <View style={styles.info}>
                    <Text style={styles.name}>{cartItems.name}</Text>
                    <View style={styles.priceRow}>
                        <Text style={styles.price}>{cartItems.price}</Text>
                        <TouchableOpacity>
                            <Button
                             style={styles.cartText}
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

const styles = StyleSheet.create({
    cartText: {
        textTransform: 'uppercase',
        fontSize: 16,
        color: '#2f95dc'
    },
    container: {
        marginBottom: 20,
        borderRadius: 4,
        backgroundColor: '#FFF',
        overflow: 'hidden'
    },
    shadow: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 }
    },
    info: {
        padding: 8
    },
    img: {
        width: '100%',
        height: 200,
        borderRadius: 4
    },
    name: {
        fontSize: 16,
        marginBottom: 8
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    price: {
        fontSize: 16,
        color: '#888',
        flex: 1
    }
})