import React, { useContext } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { CartContext } from '../context/Cart';

function HomeScreen({ navigation }) {

    const [ products, addtocart ] = useContext(CartContext);
    
    console.log('HomeScreen: ', products);
    return (
        <View style={{flex: 1, padding: 10, backgroundColor: 'white'}}>
            <View style={{flexDirection: 'row', justifyContent:'space-around', paddingVertical: 10}}>
                <Text style={{flex: 2, textAlign: 'center',fontSize: 32, fontWeight: '700'}}>ADIDAS</Text>
                <View style={{flex: 1,flexDirection: 'row', justifyContent:'space-evenly'}}>
                    <Icon 
                        name="home" 
                        size={30} 
                        color='black'
                        style={{textAlignVertical: 'center'}}
                    />
                    <Icon 
                        name="cart-outline" 
                        size={30} 
                        color='black'
                        style={{textAlignVertical: 'center'}}
                        onPress={() => {
                            navigation.navigate('CartPage');
                            // console.log('clicked', props);
                        }}
                    />
                    
                </View>
                
            </View>
            <View style={{flex: 1, backgroundColor: 'white',padding: 10,elevation: 10}}>
                <ScrollView>
                    {products.map((product) => {
                        return(
                            <View style={{width: '100%',padding: 10,borderWidth: 1, borderStyle: 'solid', borderColor: 'rgba(0,0,0,.125)', marginBottom: 10}}>
                                <Image 
                                    source={{uri: product.image}}
                                    style={{width: '100%',height: 383}}
                                />
                                <Text style={{fontSize: 20, fontWeight: '700'}}>{product.name}</Text>
                                <Text style={{color:'red', fontSize: 18}}>{product.price}$</Text>
                                <Text>{product.decription1}</Text>
                                <TouchableHighlight
                                    style={{backgroundColor: '#6c757d',borderRadius: 5,paddingVertical: 5,}}
                                    onPress={() => {
                                        addtocart(product.id);
                                    }}
                                >
                                    <Text style={{color:'white', textAlign: 'center',}}>Add To Cart</Text>
                                </TouchableHighlight>
                            </View>
                        )
                    })}
                    {/* <View style={{width: '100%',padding: 10,borderWidth: 1, borderStyle: 'solid', borderColor: 'rgba(0,0,0,.125)', marginBottom: 10}}>
                        <Image 
                            source={{uri: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy/05139ad2a6a94705aa6aac8a006f4141_9366/ultraboost-21-shoes.jpg'}}
                            // source={require('../image/shoes-1.png')}
                            style={{width: '100%',height: 383}}
                        />
                        <Text style={{fontSize: 20, fontWeight: '700'}}>ADIDAS SHOES 1</Text>
                        <Text style={{color:'red', fontSize: 18}}>66$</Text>
                        <Text>Minimalist running shoes that mix the real and virtual worlds</Text>
                        <TouchableHighlight
                            style={{backgroundColor: '#6c757d',borderRadius: 5,paddingVertical: 5,}}
                        >
                            <Text style={{color:'white', textAlign: 'center',}}>Add To Cart</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{width: '100%',padding: 10,borderWidth: 1, borderStyle: 'solid', borderColor: 'rgba(0,0,0,.125)', marginBottom: 10}}>
                        <Image 
                            source={{uri: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy/7fd3c605933d4c59a129aba50160ece5_9366/daily-3.0-shoes.jpg'}}
                            // source={require('../image/shoes-1.png')}
                            style={{width: '100%',height: 383}}
                        />
                        <Text style={{fontSize: 20, fontWeight: '700'}}>ADIDAS SHOES 2</Text>
                        <Text style={{color:'red'}}>66$</Text>
                        <Text>Minimalist running shoes that mix the real and virtual worlds</Text>
                        <TouchableHighlight
                            style={{backgroundColor: '#6c757d',borderRadius: 5}}
                        >
                            <Text style={{color:'white', textAlign: 'center',paddingVertical: 5,}}>Add To Cart</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{width: '100%',padding: 10,borderWidth: 1, borderStyle: 'solid', borderColor: 'rgba(0,0,0,.125)', marginBottom: 10}}>
                        <Image 
                            source={{uri: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy/05be0eb0b7544309b335ac850127180b_9366/zx-1k-boost-shoes.jpg'}}
                            // source={require('../image/shoes-1.png')}
                            style={{width: '100%',height: 383}}
                        />
                        <Text style={{fontSize: 20, fontWeight: '700'}}>ADIDAS SHOES 3</Text>
                        <Text style={{color:'red'}}>66$</Text>
                        <Text>Minimalist running shoes that mix the real and virtual worlds</Text>
                        <TouchableHighlight
                            style={{backgroundColor: '#6c757d',borderRadius: 5}}
                        >
                            <Text style={{color:'white', textAlign: 'center',paddingVertical: 5,}}>Add To Cart</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{width: '100%',padding: 10,borderWidth: 1, borderStyle: 'solid', borderColor: 'rgba(0,0,0,.125)', marginBottom: 10}}>
                        <Image 
                            source={{uri: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy/a69478d20a8849799153ac1e011375ed_9366/delpala-shoes.jpg'}}
                            // source={require('../image/shoes-1.png')}
                            style={{width: '100%',height: 383}}
                        />
                        <Text style={{fontSize: 20, fontWeight: '700'}}>ADIDAS SHOES 4</Text>
                        <Text style={{color:'red'}}>66$</Text>
                        <Text>Minimalist running shoes that mix the real and virtual worlds</Text>
                        <TouchableHighlight
                            style={{backgroundColor: '#6c757d',borderRadius: 5}}
                        >
                            <Text style={{color:'white', textAlign: 'center',paddingVertical: 5,}}>Add To Cart</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{width: '100%',padding: 10,borderWidth: 1, borderStyle: 'solid', borderColor: 'rgba(0,0,0,.125)', marginBottom: 10}}>
                        <Image 
                            source={{uri: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy/b017acc2859540719b0bac4e00f7c0ee_9366/superstar-shoes.jpg'}}
                            // source={require('../image/shoes-1.png')}
                            style={{width: '100%',height: 383}}
                        />
                        <Text style={{fontSize: 20, fontWeight: '700'}}>ADIDAS SHOES 5</Text>
                        <Text style={{color:'red'}}>66$</Text>
                        <Text>Minimalist running shoes that mix the real and virtual worlds</Text>
                        <TouchableHighlight
                            style={{backgroundColor: '#6c757d',borderRadius: 5}}
                        >
                            <Text style={{color:'white', textAlign: 'center',paddingVertical: 5,}}>Add To Cart</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{width: '100%',padding: 10,borderWidth: 1, borderStyle: 'solid', borderColor: 'rgba(0,0,0,.125)', marginBottom: 10}}>
                        <Image 
                            source={{uri: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/e94fe4d49bc749cba9daa9d200e77f87_9366/Terrex_AX3_Shoes_Orange_BC0528_01_standard.jpg'}}
                            // source={require('../image/shoes-1.png')}
                            style={{width: '100%',height: 383}}
                        />
                        <Text style={{fontSize: 20, fontWeight: '700'}}>ADIDAS SHOES 6</Text>
                        <Text style={{color:'red'}}>66$</Text>
                        <Text>Minimalist running shoes that mix the real and virtual worlds</Text>
                        <TouchableHighlight
                            style={{backgroundColor: '#6c757d',borderRadius: 5}}
                        >
                            <Text style={{color:'white', textAlign: 'center',paddingVertical: 5,}}>Add To Cart</Text>
                        </TouchableHighlight>
                    </View> */}
                </ScrollView>
            </View>
            
        </View>
    );
}



export default HomeScreen;