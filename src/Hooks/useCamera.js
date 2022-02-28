import React from 'react';

import { useDispatch } from 'react-redux';
import { saveImages } from '../Store/Actions';

import { launchCamera, launchImageLibrary } from "react-native-image-picker";

export default function useCamera() {

  const dispatch = useDispatch();

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
          image: source
        }
        dispatch(saveImages(cameraImage));
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
          image: source
        }
        dispatch(saveImages(gallaryImage));
      }
    })
  };

  const features = [takePhotoFromCamera,  takePhotoFromGallery];

  return features;
}

