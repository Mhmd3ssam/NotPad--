import React from 'react';
import { Text, View } from 'react-native';
import Camera from '../../components/Camera';
import Note from '../../components/Note';


const Notes = ()=>{
    return(
        <View>
            <Text>{'Notes'}</Text>
            <Camera />
            <Note/>
        </View>
    )
}

export default Notes;