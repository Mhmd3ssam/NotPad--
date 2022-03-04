import React,{useState} from 'react';

import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { saveImages } from '../Store/Actions';
import useDay from './useDay';

import { launchCamera, launchImageLibrary } from "react-native-image-picker";

export default function useUpdateCamera() {

  const dispatch = useDispatch();
  const [day, timeOfDay] = useDay();
  const navigation = useNavigation();
  const[cameraImage,setCameraImage] = useState();
  const[galleryImage,setGalleryImage] = useState();

  const takePhotoFromCamera = () => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };

    launchCamera(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error:', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: 'data:image/jpeg;base64,' + response.assets[0].base64 };
        setCameraImage(source);
      }
    });
  }

  const takePhotoFromGallery = () => {
     const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        const source = { uri: 'data:image/jpeg;base64,' + response.assets[0].base64 };
        setGalleryImage(source);
      }
    })
  };

  const features = [takePhotoFromCamera, cameraImage, takePhotoFromGallery,galleryImage];

  return features;
}

