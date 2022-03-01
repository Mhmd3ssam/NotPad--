import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Check from 'react-native-vector-icons/Feather';

import Taps from '../Taps';
import TextNoteScreen from '../../screens/TextNote';
const StackNavagation = () => {
    const Stack = createNativeStackNavigator();
    

    return (
        <Stack.Navigator>
            <Stack.Screen name="Taps" component={Taps} options={{ headerShown: false }} />
            <Stack.Screen name="TextNote" component={TextNoteScreen}options={{ headerShown: false }} />
        </Stack.Navigator>
    )

}

export default StackNavagation;