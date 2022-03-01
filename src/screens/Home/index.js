import React from 'react';
import { Styles } from './styles';
import { Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';



import NotesControl from '../../components/NotesControl';

const Home = () => {

    return (
        <NativeBaseProvider>
            <View style={Styles.HomeConatiner}>
                <View style={Styles.textConatiner}>
                    <Text style={Styles.text}>
                        {'Create and '}
                    </Text>
                    <Text style={Styles.text}>
                        {'design '}
                    </Text>
                    <Text style={Styles.text}>
                        {'your notes'}
                    </Text>
                    <Text style={Styles.text}>
                        {'easily'}
                    </Text>
                </View>
                <NotesControl />
            </View>
        </NativeBaseProvider>
    )
}

export default Home;