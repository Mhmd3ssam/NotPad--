import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Taps from '../Taps';

const StackNavagation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Taps" component={Taps} options={{ headerShown: false }} />
        </Stack.Navigator>
    )

}

export default StackNavagation;