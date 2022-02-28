import React from 'react';
import { Image, View } from 'react-native';


const Camera = ({imageUri,imageUriGallary}) => {
  return (
    <View>
      <View>
        <Image
          source={imageUri}
          style={{
            height: 100,
            width: 100,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: 'black',
            }}
        />
      </View>
      <View>
        <Image
          source={imageUriGallary}
          style={{
            height: 100,
            width: 100,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: 'black',
            }}
        />
      </View>
    </View>
  )
}

export default Camera;


