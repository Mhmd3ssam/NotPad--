import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    controlContainer:{
        display:'flex',
        flexDirection:'row-reverse',
        alignItems:'center',
        justifyContent:'space-between',
        paddingRight:20,
        paddingLeft:20,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#d3e3fd',
        borderBottomStartRadius: 10,
        borderTopStartRadius: 10,
        marginRight:70,
        marginBottom:70
    },
    avatarContainer:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    avatarText:{
        paddingTop:5,
        color:"#041944"
    },
    avatar:{
        color:"#041944"
    }
});