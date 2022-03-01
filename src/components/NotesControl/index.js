import React from 'react';
import { useNavigation } from '@react-navigation/native';
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
    const navigation = useNavigation();
    return (
        <NativeBaseProvider >
            <View style={Styles.sectionContainer}> 
                <View style={Styles.localizationContainer}>
                <Pressable style={Styles.languageContainer}>
                    <Text style={Styles.language}>
                        {'Arabic'}
                    </Text>
                </Pressable>
                <Pressable >
                    <Swap name="swap" size={30} style={Styles.swap}/>
                </Pressable>
                <Pressable style={Styles.languageContainer}>
                    <Text style={Styles.language}>
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
                <Pressable style={Styles.rocketAndCamContainer} onPress={()=>{navigation.navigate("TextNote");}}>
                    <Rocket name="rocket" size={35} style={Styles.rocket} />
                </Pressable>
            </View >
            </View>
            
        </NativeBaseProvider>

    );
};

export default NotesControl;
