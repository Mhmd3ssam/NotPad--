import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSelector} from 'react-redux';

import HomeScreen from '../../screens/Home';
import NotesScreen from '../../screens/Notes';

const TapNavagation = ()=>{
    const Tab = createMaterialTopTabNavigator();
    const Toggle = useSelector(state => state.Localization);

    return (
        <Tab.Navigator screenOptions={{
          tabBarLabelStyle: {
            fontWeight: "bold",
            color: "white"
          },
          tabBarStyle: { backgroundColor: 'black'},
        }}>
          <Tab.Screen name="Home" component={HomeScreen} 
          options={{ tabBarLabel: Toggle? "Home":"الرئيسية" }} />
          <Tab.Screen name="Notes" component={NotesScreen}
          options={{ tabBarLabel: Toggle? "Notes":"ملاحظاتي" }}
          />
        </Tab.Navigator>
      )

}

export default TapNavagation; 