import React from 'react';
import { Text, View } from 'react-native';
import Camera from '../../components/Camera'
import Note from '../../components/Note'

const Details = ({ route, navigation })=>{
    const { item } = route.params;

    return(
        <View style={{ flex:1,backgroundColor:'#d3e3fd',}}>
            {(item.type === "image") ?<Camera item={item}/> : null}
            {(item.type === "note") ?<Note item={item}/> : null}
        </View>
    )
}

export default Details;