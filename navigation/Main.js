import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Booking from './../screens/Booking';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EntryPoint from './EntryPoint';

import { createStackNavigator } from '@react-navigation/stack';
import ProfileEntry from './ProfileEntry';

  
const Tab = createBottomTabNavigator()
const tabBarOptions = {
    showLabel: true,
    activeTintColor: 'green',
    style: {
        height:'10%',
    },
};



const Stack = createStackNavigator();

  const globalOption = {
    headerStyle:{backgroundColor: "#2c68ed"},
    headerTitleStyle: {color:'white'},
    headerTintColor:"white"
    
  }


const Main = () => {
    return (
        
           <Tab.Navigator initialRouteName='EntryPoint' screenOptions={tabBarOptions} >
                <Tab.Screen name='Booking' component={Booking} />
                <Tab.Screen name="EntryPoint" component={EntryPoint} options={{ headerShown: false}} />
                <Tab.Screen  name='Profile' component={ProfileEntry} options={{ headerShown: false}} />
            </Tab.Navigator>
            
    )
}

export default Main

const styles = StyleSheet.create({})
