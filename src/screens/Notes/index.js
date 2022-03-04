import React from 'react';
import { Text, View, SafeAreaView,FlatList,Image,Pressable} from 'react-native';

import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { Styles } from './styles';


const Notes = ()=>{
    const Notes = useSelector(state => state.Text);
    const Images = useSelector(state => state.Images);
    const Data = [].concat(Images,Notes);
    const AVATAR_SIZE = 70;
    const navigation = useNavigation();

    const Item = ({ item }) => {
        return (
            <Pressable style={Styles.itemContainer} onPress={() => { navigation.navigate("Details",{item}) }}>
                <Image
                    source={item.image}
                    style={{
                        width: AVATAR_SIZE,
                        height: AVATAR_SIZE,
                        borderRadius: AVATAR_SIZE,
                        marginRight: 20,         
                    }}
                />
                <View>
                    <Text style={Styles.titleContent}>
                        {item.title ? item.title : null}
                    </Text>
                    <Text style={Styles.timeContent}>
                        {item.time}
                    </Text>
                </View>
            </Pressable>
        )
    };
    const renderItem = ({ item }) => {
        return <Item item={item} />
    };

    return(
    <View style={{backgroundColor:"#c3e7ff",flex:1}}>
            <SafeAreaView >
            <FlatList
                data={Data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={{
                    padding:20,
                    paddingTop:  42
                }}
            />
        </SafeAreaView >
    </View>
    )
}

export default Notes;