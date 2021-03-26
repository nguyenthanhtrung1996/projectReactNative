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
        backgroundColor: '#ecf0f1',
        paddingHorizontal:20,
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
    buttonBox:{
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center'
    },
    button: {
        justifyContent: 'flex-start',

    },
    buttonText: {
        color: 'white',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
        

        fontSize: 20,
        backgroundColor: '#6c5ce7',
    },
    content:{
        paddingHorizontal: 30,
        borderRadius: 20,
        backgroundColor: 'white',
        elevation: 10

    },
    contentFlex:{
        flex: 1,
        paddingHorizontal: 30,
        borderRadius: 20,
        backgroundColor: 'white',
        elevation: 10
    },
    nothing:{
        fontSize: 32,
        opacity: 0.5
    },
    contentBox:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 3,
        borderBottomColor: '#ecf0f1',
        backgroundColor: 'white',
        textAlign: 'center'
    },
    contentBox1:{
        width: '80%',
        flexDirection: 'row',
        textAlign: 'center'
    },
    time: {
        paddingVertical: 5,
        fontSize: 24,
    },
    contentFalse: {
        paddingVertical: 5,
        fontSize: 24,
    },
    contentTrue: {
        paddingVertical: 5,
        fontSize: 24,
        opacity: 0.5,
        textDecorationLine: 'line-through',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
   
})