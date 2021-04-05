import { StyleSheet } from 'react-native';

export const stylesCartScreen = StyleSheet.create({
    quality:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
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
        elevation: 15,
        
    },
    product: {
        
        flexDirection: 'row'

    },
    info: {
        flex: 1,
        padding: 8,

        flexDirection: 'column',
        justifyContent: 'center',
    },
    img: {
        flex: 1,
        width: '100%',
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

export const stylesCategoryListItem = StyleSheet.create({
    categoryImage: {
        width: 64,
        height: 64
    },
    
    container: {
        alignItems: 'center',
        backgroundColor: '#FFF',

        marginBottom: 16,
        marginTop: 8,
        padding: 16,
        
        borderRadius: 4,
        elevation: 10,
    },
    title:{
        textTransform: 'uppercase',
        marginBottom: 0,
        fontWeight: "700"
    }
})

export const stylesProductListItem = StyleSheet.create({
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
        height: 150,
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

export const stylesSettingScreen = StyleSheet.create({
    button: {
        backgroundColor: '#3498db',
        padding: 10
    }
})