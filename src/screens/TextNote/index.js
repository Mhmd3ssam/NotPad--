import React, { useState } from 'react';
import { Styles } from './styles';
import noteAvatar from '../../../assets/note.png'
import { Text, View, TextInput } from 'react-native';

import { useDispatch } from 'react-redux';
import { saveText } from '../../Store/Actions';
import useDay from '../../Hooks/useDay';

import { useNavigation } from '@react-navigation/native';

import TextControl from '../../components/TextControl';

const TextNote = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [day, timeOfDay] = useDay();
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const saveTextNote = ()=>{
        let note = {
            id:Math.floor(Math.random() * 10),
            title:title,
            text:text,
            image:noteAvatar,
            time:`${day} ${timeOfDay} Note`,
            type:"note"

        };
        console.log(note);
        dispatch(saveText(note));
        navigation.navigate("Notes");
    }
    
    return (
            <View style={Styles.container}>
                <View >
                    <TextInput
                        value={title}
                        placeholder="Title"
                        placeholderTextColor="#666666"
                        onChangeText={(value)=>{setTitle(value)}}
                        style={Styles.title}
                    />
                </View>
                <View>
                    <Text style={{ color: "#666666" }}>{'Today 6:02 pm'}</Text>
                </View>
                <View style={Styles.text}>
                    <TextInput
                        placeholder="..."
                        placeholderTextColor="#666666"
                        value={text}
                        onChangeText={(value)=>{setText(value)}}
                    />
                </View>
                <TextControl save={saveTextNote}/>
            </View>
    )
}

export default TextNote;