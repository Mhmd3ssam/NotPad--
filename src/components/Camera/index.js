import React from 'react';
import { Image, View ,Pressable} from 'react-native';
import { Styles } from './styles';
import { editeImages } from '../../Store/Actions';

import {  NativeBaseProvider } from "native-base";
import ActionSheet from '../ActionSheet';
import useUpdateCamera from '../../Hooks/useUpdateCamera';
import useCamera from '../../Hooks/useCamera';
import { useSelector,useDispatch } from 'react-redux';

const Camera = ({ item }) => {
  const Images = useSelector(state => state.Images);
  console.log('jj',Images[2])
  const dispatch = useDispatch();
  const [takePhotoFromCamera, cameraImage, takePhotoFromGallery,galleryImage] = useUpdateCamera();
 
  const handelEdite =()=>{
    let filteredImages = Images.filter(image => image.id !== item.id);
    dispatch(editeImages(filteredImages));

  }
  return (
    <NativeBaseProvider>
      <View style={Styles.imageContainer}>
        <Image
          source={item.image}
          style={Styles.image}
        />
          <ActionSheet camera={takePhotoFromCamera} gallery={takePhotoFromGallery} edite={true} isEditeing={handelEdite}/>
      </View>
    </NativeBaseProvider>


  )
}

export default Camera;


