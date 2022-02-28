import React from 'react';
import { Text, View } from 'react-native';
import { NativeBaseProvider } from "native-base";
import Camera from './components/Camera';
import useCamera from './Hooks/useCamera';
import ActionSheet from './components/ActionSheet';
const App = () => {
    const [takePhotoFromCamera,imageUri,takePhotoFromGallery,imageUriGallary] = useCamera();

    return (<>
        <NativeBaseProvider>
            <Text>{"NotPad--"}</Text>
            <ActionSheet camera={takePhotoFromCamera} gallery={takePhotoFromGallery}/>
        </NativeBaseProvider>

    </>);
};



export default App;
