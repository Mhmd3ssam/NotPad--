import React from 'react';
import { Styles } from './styles'
import { NativeBaseProvider } from 'native-base';
import { Text, View, Pressable } from 'react-native';

import Mic from 'react-native-vector-icons/Feather';
import Rocket from 'react-native-vector-icons/Entypo';
import Swap from 'react-native-vector-icons/AntDesign';

import ActionSheet from '../ActionSheet';
import useCamera from '../../Hooks/useCamera';

const NotesControl = () => {
    const [takePhotoFromCamera, takePhotoFromGallery] = useCamera();

    return (
        <NativeBaseProvider>
            <View style={Styles.localizationContainer}>
                <Pressable>
                    <Text>
                        {'Arabic'}
                    </Text>
                </Pressable>
                <Pressable>
                    <Swap name="swap" size={50}/>
                </Pressable>
                <Pressable>
                    <Text>
                    {'English'}
                    </Text>
                </Pressable>
            </View>
            <View style={Styles.controlContainer}>
                <Pressable style={Styles.rocketAndCamContainer}>
                    <ActionSheet
                        camera={takePhotoFromCamera}
                        gallery={takePhotoFromGallery}
                        iconStyle={Styles.rocket}
                    />
                </Pressable>
                <Pressable style={Styles.micContainer}>
                    <Mic name="mic" size={50} style={Styles.mick} />
                </Pressable>
                <Pressable style={Styles.rocketAndCamContainer}>
                    <Rocket name="rocket" size={35} style={Styles.rocket} />
                </Pressable>
            </View >
        </NativeBaseProvider>

    );
};

export default NotesControl;
