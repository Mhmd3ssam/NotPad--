import React from 'react';

import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { saveImages } from '../Store/Actions';
import useDay from './useDay';

import { launchCamera, launchImageLibrary } from "react-native-image-picker";

export default function useCamera() {

  const dispatch = useDispatch();
  const [day, timeOfDay] = useDay();
  const navigation = useNavigation();


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
        let cameraImage = {
          id: Math.floor(Math.random() * 10),
          image: source,
          time:`${day} ${timeOfDay} Image`,
          type:"image"

        }
        dispatch(saveImages(cameraImage));
        navigation.navigate("Notes");
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
        let gallaryImage = {
          id: Math.floor(Math.random() * 10),
          image: source,
          time:`${day} ${timeOfDay} Image`,
          type:"image"
        }
        dispatch(saveImages(gallaryImage));
        navigation.navigate("Notes");

      }
    })
  };

  const features = [takePhotoFromCamera,  takePhotoFromGallery];

  return features;
}

