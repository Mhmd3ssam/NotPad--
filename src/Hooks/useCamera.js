import React,{useState} from 'react'
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

export default function useCamera() {
    
    const [imageUri, setimageUri] = useState("");
    const [imageUriGallary, setimageUriGallary] = useState("");

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
        setimageUri(source);
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
        setimageUriGallary(source);
        console.log(source.uri)
        console.log(source)

      }
    })
  };

  const features  = [takePhotoFromCamera,imageUri,takePhotoFromGallery,imageUriGallary];
  
  return features;
}

