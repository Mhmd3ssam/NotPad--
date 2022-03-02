import React from 'react';
import { Styles } from './styles';
import { Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useSelector} from 'react-redux';



import NotesControl from '../../components/NotesControl';

const Home = () => {
    const Toggle = useSelector(state => state.Localization);
    return (
        <NativeBaseProvider>
            <View style={Styles.HomeConatiner}>
                <View style={Styles.textConatiner}>
                    <Text style={Styles.text}>
                        {Toggle?'Create and ':'انشأ'}
                    </Text>
                    <Text style={Styles.text}>
                        { Toggle?'design ':'و صمم'}
                    </Text>
                    <Text style={Styles.text}>
                        { Toggle?'your notes':'ملاحظاتك'}
                    </Text>
                    <Text style={Styles.text}>
                        { Toggle?'easily':'بكل سهوله'}
                    </Text>
                </View>
                <NotesControl />
            </View>
        </NativeBaseProvider>
    )
}

export default Home;