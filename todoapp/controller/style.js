import { StyleSheet } from 'react-native'

export const stylesApp = StyleSheet.create({
    container:{
      flex: 1,
      // paddingTop: 50,
      paddingHorizontal: 20,
      // paddingBottom: 200,
      backgroundColor: '#ecf0f1'
    },
    containerTitle: {
        flex: 1, 
        justifyContent:'flex-end',
    },
    title:{
      fontSize: 64,
      fontWeight: '500',
      color: '#74b9ff',
      width: '100%',
      textAlign: 'center',
  
    },
    container1: {
      flex: 2,
    },
    container2: {
      flex: 2,
    }
  })