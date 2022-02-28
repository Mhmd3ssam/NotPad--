import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './Navagation/Stack';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './Store/Reducer';

const store = createStore(reducer);


const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack />
            </NavigationContainer>
        </Provider>);
};



export default App;
