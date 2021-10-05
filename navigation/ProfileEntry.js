import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './../screens/Profile';
import EditProfile from './../screens/EditProfile';


const Stack = createStackNavigator();

  const globalOption = {
    headerStyle:{backgroundColor: "#2c68ed"},
    headerTitleStyle: {color:'white'},
    headerTintColor:"white",
  }

  
const ProfileEntry = () => {
    return (
           <Stack.Navigator screenOptions={globalOption} 
              initialRouteName="UserProfile" 
           >
                <Stack.Screen name="UserProfile" component={Profile} /> 
                <Stack.Screen name="EditProfile" component={EditProfile} /> 
                
            </Stack.Navigator>
         
    )
}

export default ProfileEntry

const styles = StyleSheet.create({})
