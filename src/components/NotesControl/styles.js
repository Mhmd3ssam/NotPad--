import { StyleSheet } from 'react-native';


export const Styles = StyleSheet.create({
    localizationContainer:{
        display:'flex',
        flexDirection:'row-reverse',
        alignItems:'center',
        justifyContent:'space-between',
        paddingRight:20,
        paddingLeft:20,
        backgroundColor:"#ffffff"
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