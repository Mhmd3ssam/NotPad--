import React from 'react';
import { Text, View } from 'react-native';
import { NativeBaseProvider } from "native-base";

import ActionSheet from './components/ActionSheet';
const App = () => {


    return (
        <NativeBaseProvider>
            <Text>{"NotPad--"}</Text>
            <ActionSheet camera="" gallery=""/>
        </NativeBaseProvider>
    );
};



export default App;
