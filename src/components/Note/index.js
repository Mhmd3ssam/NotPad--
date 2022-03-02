import React from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';


const Note = () => {

    const Notes = useSelector(state => state.Text);
    const Item = ({ item }) => {
        return (
            <View>
                <Text>{item.title}</Text>
                <Text>{item.text}</Text>
            </View>
        )
    };
    const renderItem = ({ item }) => {
        return <Item item={item} />        
    };


    return (
        <SafeAreaView >
            <FlatList
                data={Notes}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView >
    )
}

export default Note;


