import React from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import { Styles } from './styles';


import Check from 'react-native-vector-icons/Feather';
import Handwrite from 'react-native-vector-icons/Entypo';
import Checkcircleo from 'react-native-vector-icons/AntDesign';

const TextControl = ({save}) => {

    return (
        <View >
            <View style={Styles.controlContainer}>
                <Pressable style={Styles.avatarContainer}>
                    <Handwrite name="round-brush" size={25} style={Styles.avatar}/>
                    <Text style={Styles.avatarText}>{'Handwrite'}</Text>
                </Pressable>
                <Pressable style={Styles.avatarContainer}>
                    <Checkcircleo name="checkcircleo" size={25} style={Styles.avatar}/>
                    <Text style={Styles.avatarText}>{'Checklist'}</Text>
                </Pressable>
                <Pressable onPress={save}>
                    <Check name="check" size={35} style={Styles.avatar}/>
                </Pressable>
            </View >
        </View>
    )
}

export default TextControl;