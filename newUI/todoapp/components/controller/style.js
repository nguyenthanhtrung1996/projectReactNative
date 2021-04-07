import { StyleSheet } from "react-native";

export const stylesAddWorkScreen = StyleSheet.create({
    container:{
        flex: 1,
        padding: 15,
        backgroundColor: '#020f38'
    },
    header:{
        flex:1, 
        justifyContent:'flex-end'
    },
    navbar:{
        flexDirection: 'row'
    },
    body:{
        flex:6
    },
    time:{
        flex: 1, 
        paddingVertical: 20
    },
    title:{
        color: 'white', 
        fontSize: 18, 
        fontWeight: '500'
    },
    time__content:{
        flex: 1, 
        flexDirection: 'row'
    },
    time__box:{
        flex:1,
        alignItems:'center', 
        justifyContent:'center' 
    },
    time__text:{
        color: '#223369', 
        fontSize: 18
    },
    work:{
        flex: 2
    },
    work__box__1:{
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingVertical: 15
    },
    work__box__2:{
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    work__text:{
        textAlign:'center',
        paddingVertical:10, 
        fontSize: 16,color: 'white'
    },
    work__workout:{
        width: '40%',
        justifyContent: 'center', 
        backgroundColor: '#363d5a', 
        borderRadius: 15,
    },
    work__activeWorkout:{
        width: '40%',
        justifyContent: 'center', 
        backgroundColor: '#ff90a1', 
        borderRadius: 15,
    },
    work__animation:{
        width: '54%',
        justifyContent: 'center', 
        backgroundColor: '#363d5a', 
        borderRadius: 15,
    },
    work__activeAnimation:{
        width: '54%',
        justifyContent: 'center', 
        backgroundColor: '#ff90a1', 
        borderRadius: 15,
    },
    work__name:{
        width: '29%',
        justifyContent: 'center', 
        backgroundColor: '#363d5a', 
        borderRadius: 15,
    },
    work__active:{
        width: '29%',
        justifyContent: 'center', 
        backgroundColor: '#ff90a1', 
        borderRadius: 15,
    },
    activeIcon: {
        color: '#ff90a1'
    },
    activeText:{
        color: 'white',
        fontSize: 18
    },
    footer:{
        flex:1,
    },
    button:{
        width:'100%', 
        backgroundColor:'#ff90a1', 
        borderRadius: 50
    },
    buttonText:{
        color: 'white',
        fontSize: 18,
        paddingVertical: 10,
        textAlign: 'center'
    }
})

export const stylesHomepageScreen = StyleSheet.create({
    container:{
        flex: 1, 
        padding: 15, 
        backgroundColor: '#020f38'
    },
    body:{
        flex: 10
    },
    mostTimer:{
        flex: 3
    },
    title:{
        marginBottom: 10, 
        color: 'white', 
        fontSize: 18, 
        fontWeight: '700'
    },
    mostTimer__box__1:{
        height: '40%',
        backgroundColor:'#ffeaec', 
        borderRadius: 10,
        marginBottom: 15, 
        paddingHorizontal:15, 
        justifyContent: 'center'
    },
    mostTimer__workName:{
        fontSize: 16, 
        fontWeight:'700'
    },
    mostTimer__timeBlack:{
        lineHeight: 32
    },
    mostTimer__box__2:{
        height: '40%',
        flexDirection: 'row'
    },
    mostTimer__box__2__left:{
        flex: 1, 
        justifyContent: 'center', 
        backgroundColor: '#82adff', 
        paddingLeft: 15, 
        borderRadius: 10, 
        marginRight:10
    },
    mostTimer__box__2__right:{
        flex: 2, 
        justifyContent: 'center', 
        backgroundColor: '#97d9b4', 
        paddingLeft: 15, 
        borderRadius: 10, 
        marginLeft:10 
    },
    footer:{
        flex: 1,
        alignItems:'center'
    },
    button:{
        width: 50, 
        height: 50
    },
    buttonText:{
        height: '100%', 
        textAlign:'center',
        fontSize: 34, 
        backgroundColor: '#ff90a1', 
        color: 'white',
        borderRadius: 50
    },
    otherTimer:{
        flex: 4
    },
    otherTimer__total:{
        flexDirection: 'row',
        justifyContent:'flex-start', 
        flexWrap: "wrap",
        width: '100%'
    },
    otherTimer__box:{
        width: '30%',
        paddingHorizontal: 10, 
        paddingVertical: 20,
        borderRadius: 10, 
        backgroundColor:'#363d5a', 
        marginBottom: 10,
        marginRight: 10
    },
    otherTimer__box__active:{
        width: '30%',
        paddingHorizontal: 10, 
        paddingVertical: 20,
        borderRadius: 10, 
        backgroundColor:'#ff90a1', 
        marginBottom: 10,
        marginRight: 10
    },
    otherTimer__workName:{
        fontSize: 18,
        color: 'white'
    },
    otherTimer__time:{
        lineHeight: 32,
        color: 'white'
    },
})