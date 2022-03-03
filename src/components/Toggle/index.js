import React from 'react';
import { Switch, VStack, NativeBaseProvider } from "native-base";

const Toggle= ({Press}) => {
    return (
        <NativeBaseProvider>
            <VStack space={4} alignItems="center">
                <Switch offTrackColor="indigo.100" onTrackColor="indigo.200" onThumbColor="indigo.500" offThumbColor="indigo.50" onToggle={Press}/>
            </VStack>
        </NativeBaseProvider>

    );
};

export default Toggle;