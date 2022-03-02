import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Styles } from './styles';
import { Text, View, Pressable } from 'react-native';
import { Switch, VStack, NativeBaseProvider } from "native-base";

import Mic from 'react-native-vector-icons/Feather';
import Rocket from 'react-native-vector-icons/Entypo';
import Swap from 'react-native-vector-icons/AntDesign';

import ActionSheet from '../ActionSheet';
import useCamera from '../../Hooks/useCamera';
import { useDispatch, useSelector } from 'react-redux';
import { toggleText } from '../../Store/Actions';

const NotesControl = () => {
    const [takePhotoFromCamera, takePhotoFromGallery] = useCamera();
    const ToggleState = useSelector(state => state.Localization);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const ToggleBtn = ({ Press }) => {
        return (
            <NativeBaseProvider>
                    <VStack space={4} alignItems="center">
                        <Switch offTrackColor="indigo.100" onTrackColor="indigo.200" onThumbColor="indigo.500" offThumbColor="indigo.50"  onToggle={()=>Press()} />
                    </VStack>
            </NativeBaseProvider>
        );
    };
    
    return (
        <View style={Styles.sectionContainer}>
            <View style={Styles.localizationContainer}>
                <Pressable style={Styles.languageContainer}>
                    <Text style={Styles.language}>
                        {ToggleState ? 'Arabic' : 'العربية'}
                    </Text>
                </Pressable>
                <Pressable >
                    <ToggleBtn Press={() => { dispatch(toggleText(!ToggleState)) }} />
                </Pressable>
                <Pressable style={Styles.languageContainer}>
                    <Text style={Styles.language}>
                        {ToggleState ? 'English' : 'الانجليزية'}
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
                <Pressable style={Styles.rocketAndCamContainer} onPress={() => { navigation.navigate("TextNote"); }}>
                    <Rocket name="rocket" size={35} style={Styles.rocket} />
                </Pressable>
            </View >
        </View>
    );
};

export default NotesControl;
