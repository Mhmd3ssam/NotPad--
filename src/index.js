import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from '@react-navigation/native';
import Stack from './Navagation/Stack';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './Store/Reducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}
const persistedReducer = persistReducer(persistConfig, reducer);
let store = createStore(persistedReducer)
let persistor = persistStore(store);



const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Stack />
                </NavigationContainer>
            </PersistGate>
        </Provider>);
};



export default App;
