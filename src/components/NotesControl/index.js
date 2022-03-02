import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Styles } from './styles';
import { Text, View, Pressable } from 'react-native';

import Mic from 'react-native-vector-icons/Feather';
import Rocket from 'react-native-vector-icons/Entypo';
import Swap from 'react-native-vector-icons/AntDesign';

import ActionSheet from '../ActionSheet';
import useCamera from '../../Hooks/useCamera';
import { useDispatch, useSelector} from 'react-redux';
import { toggleText } from '../../Store/Actions';

const NotesControl = () => {
    const [takePhotoFromCamera, takePhotoFromGallery] = useCamera();
    const Toggle = useSelector(state => state.Localization);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    return (
        <View style={Styles.sectionContainer}>
            <View style={Styles.localizationContainer}>
                <Pressable style={Styles.languageContainer}>
                    <Text style={Styles.language}>
                        { Toggle?'Arabic':'العربية'}
                    </Text>
                </Pressable>
                <Pressable >
                    <Swap name="swap" size={30} style={Styles.swap} onPress={()=>{dispatch(toggleText(!Toggle))}} />
                </Pressable>
                <Pressable style={Styles.languageContainer}>
                    <Text style={Styles.language}>
                        { Toggle?'English':'الانجليزية'}
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
