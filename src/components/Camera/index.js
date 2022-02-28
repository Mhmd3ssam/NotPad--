import React from 'react';
import { Image, SafeAreaView, View, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';


const Camera = () => {

  const Images = useSelector(state => state);
  
  const Item = ({ item }) => (
    <Image
      source={item.image}
      style={{
        height: 100,
        width: 100,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'black',
      }}
    />
  );
  const renderItem = ( {item} ) => {
    return( <Item item={item}/>
  )};


  return (
    <SafeAreaView >
      <FlatList
        data={Images}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView >
  )
}

export default Camera;


