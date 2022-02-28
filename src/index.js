import React from 'react';
import { Text, View } from 'react-native';
import { NativeBaseProvider } from "native-base";

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Details from './screens/Details';

import Camera from './components/Camera';
import useCamera from './Hooks/useCamera';
import ActionSheet from './components/ActionSheet';



const App = () => {
    const Tab = createMaterialTopTabNavigator();
    const Stack = createNativeStackNavigator();

    const [takePhotoFromCamera,imageUri,takePhotoFromGallery,imageUriGallary] = useCamera();

    return (      
    <NavigationContainer>
        <NativeBaseProvider>
            <ActionSheet camera={takePhotoFromCamera} gallery={takePhotoFromGallery}/>
            <Camera imageUri={imageUri} imageUriGallary={imageUriGallary}/>
        </NativeBaseProvider>

        </NavigationContainer>);
};



export default App;
