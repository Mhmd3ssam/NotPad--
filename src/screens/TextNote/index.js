import React, { useState } from 'react';
import { Styles } from './styles';
import { Text, View, TextInput } from 'react-native';

import TextControl from '../../components/TextControl';

const TextNote = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    return (
            <View style={Styles.container}>
                <View >
                    <TextInput
                        value={title}
                        placeholder="Title"
                        placeholderTextColor="#666666"
                        onChangeText={(value) => { setTitle(value) }}
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
                        onChangeText={(value) => { setText(value) }}
                    />
                </View>
                <TextControl />
            </View>
    )
}

export default TextNote;