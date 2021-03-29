import { StyleSheet } from 'react-native'

  
export const stylesAddWorkPage = StyleSheet.create({
    container: {
      flex: 1,
      margin: 30,

    },
    InputTitle: {
      fontSize: 24,
      borderBottomWidth: 2,
      borderColor: '#ecf0f1',
      backgroundColor : "#FFFFFF",
      elevation: 15
      
    },
    InputWork: {
      // borderWidth: 2,
      // fontSize: 24,
      backgroundColor : "#FFFFFF",
      elevation: 15,
      marginBottom: 15
    },
    ButtonView:{
      flexDirection: 'row',
      justifyContent: 'center',
    },
    Button: {
      width: '30%',
      borderRadius: 20
    },
    
    Text: {
      fontSize: 20,
      color: 'white',
      textAlign: 'center',
      width: '100%',
      paddingVertical: 10,
      backgroundColor: '#6c5ce7',
      borderRadius: 20
    },
    warning: {
      color: 'red'
    },
    success: {
      color: 'black'
    }
})