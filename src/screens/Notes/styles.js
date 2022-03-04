import { StyleSheet } from 'react-native';
export const Styles = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        padding: 20,
        marginBottom: 20,
        backgroundColor: "rgba(255,255,255,0.8)",
        borderRadius: 12,
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowColor: "#000",
        shadowRadius: 20
    },
    titleContent:{
        fontSize: 22,
        fontWeight: "700"
    },
    timeContent:{
        fontSize: 14,
        obacity:.8,
        color:"#0099cc"
    }

});