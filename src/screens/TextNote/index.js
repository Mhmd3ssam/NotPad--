import React,{useState} from 'react'
import { Text, View, TextInput  } from 'react-native';

const TextNote = () => {
    const[text,setText] = useState('Write somthing');
    return (
        <View>
            <TextInput
                value={text}
                onChangeText={(value)=>{setText(value)}}
            />
        </View>
    )
}

export default TextNote;