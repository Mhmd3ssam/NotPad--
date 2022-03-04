import React from 'react';
import { Styles } from './styles';
import {  ScrollView , Text } from 'react-native';

const Note = ({item}) => {
    
    return (
        <ScrollView  style={Styles.noteContainer} >
            <Text style={Styles.title}>{item.title}</Text>
            <Text style={Styles.text}>{item.text}</Text>
        </ScrollView  >
    )
}

export default Note;


