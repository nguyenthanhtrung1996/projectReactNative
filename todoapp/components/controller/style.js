import { StyleSheet } from 'react-native';

export const stylesToDoScreen = StyleSheet.create({
    formInput:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingRight: 5
    },
    checkAll: {
        opacity: 0.5
    },
    
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        width: '100%',
        backgroundColor: '#fff',
        // paddingTop: 16
        
        paddingVertical: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        flex:1,
    },
    focusInput: {
        height: 40,
        flex:1,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        padding: 5,
        borderRadius: 5,
        backgroundColor: '#74b9ff',
    },
    contentFalse: {
        paddingVertical: 5,
        width: '100%',
        fontSize: 24,

    },
    contentTrue: {
        paddingVertical: 5,
        width: '100%',
        fontSize: 24,

        opacity: 0.5,
        textDecorationLine: 'line-through',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
   
})