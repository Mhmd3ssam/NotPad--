import React from 'react';
import { Text, View } from 'react-native';
import { NativeBaseProvider } from "native-base";

import Camera from '../../components/Camera';
import useCamera from '../../Hooks/useCamera';
import ActionSheet from '../../components/ActionSheet';

const Home = ()=>{
    const [takePhotoFromCamera,takePhotoFromGallery] = useCamera();

    return(
        <NativeBaseProvider>
            <ActionSheet camera={takePhotoFromCamera} gallery={takePhotoFromGallery}/>
            <Camera />
        </NativeBaseProvider>
    )
}

export default Home;