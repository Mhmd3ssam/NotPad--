import React from 'react';
import { Text, View } from 'react-native';
import Camera from '../../components/Camera';


const Notes = ()=>{
    return(
        <View>
            <Text>{'Notes'}</Text>
            <Camera />
        </View>
    )
}

export default Notes;