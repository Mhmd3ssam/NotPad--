import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../../screens/Home';
import NotesScreen from '../../screens/Notes';

const TapNavagation = ()=>{
    const Tab = createMaterialTopTabNavigator();

    return (
        <Tab.Navigator screenOptions={{
          tabBarLabelStyle: {
            fontWeight: "bold",
            color: "white"
          },
          tabBarStyle: { backgroundColor: 'black'},
        }}>
          <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: "Home" }} />
          <Tab.Screen name="Notes" component={NotesScreen} />
        </Tab.Navigator>
      )

}

export default TapNavagation; 