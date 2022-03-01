import { StyleSheet } from 'react-native';


export const Styles = StyleSheet.create({
    sectionContainer:{
        backgroundColor:"#ffffff",
        paddingTop:20,
        paddingBottom:20
    },
    localizationContainer:{
        display:'flex',
        flexDirection:'row-reverse',
        alignItems:'center',
        justifyContent:'space-between',
        paddingRight:20,
        paddingLeft:20,
        marginBottom:20,

    },
    languageContainer:{
        height: 50,
        width: 100,
        borderRadius: 10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#f6f7fb",

    },
    language:{
        color:"#041944",
        fontSize: 15,
    },
    swap:{
        color:"#1f1f1f",
    },
    controlContainer:{
        display:'flex',
        flexDirection:'row-reverse',
        alignItems:'center',
        justifyContent:'space-between',
        paddingRight:20,
        paddingLeft:20,
        backgroundColor:"#ffffff"
    },
    micContainer:{
        height: 100,
        width: 100,
        borderRadius: 100,
        position:'relative', 
        backgroundColor:'#d3e3fd'
    },
    rocketAndCamContainer:{
        height: 60,
        width: 60,
        borderRadius: 100,
        position:'relative', 
        backgroundColor:'#c3e7ff'
    },
    rocket:{
        position:'absolute',
        bottom:0,
        left:12,
        top:12,
        color:"#041944"
    },
    mick:{
        position:'absolute',
        bottom:0,
        left:25,
        top:20,
        color:"#041944"
    }
});