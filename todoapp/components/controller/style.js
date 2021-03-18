import { StyleSheet } from 'react-native';

export const stylesToDoScreen = StyleSheet.create({
    formInput:{
        flexDirection: 'row',
        justifyContent: 'center',
        // flex: 1,
    },
    checkAll: {
        opacity: 0.5
    },
    
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        width: '100%',
        backgroundColor: '#fff',
        paddingTop: 16
    },
    input: {
        height: 40,
        borderColor: 'gray',
        // borderWidth: 0,
        flex:1,
        
        // borderStyle: none
    },
    focusInput: {
        height: 40,
        flex:1,
        // borderColor: 'gray',
        // borderStyle: 'solid',
        // borderWidth: 1,
        // borderColor: 'black',
    },
    button: {
        backgroundColor: '#3498db',
        color: 'white',
        borderStyle: 'solid'
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
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',

        borderStyle: 'solid',
        borderTopWidth: 1,
        borderColor: '#dfe6e9',
    },
    leftFooter: {
        flexDirection: 'row',
    },
   
})