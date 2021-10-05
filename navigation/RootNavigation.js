import React, {useEffect, useLayoutEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import Login from './../coreScreens/Login';
import Main from './Main';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import { getTrips } from './../redux/trip/tripSlice';
import SignUpScreen from './../coreScreens/SignUpScreen';
import ForgotPassword from './../coreScreens/ForgotPassword';






const Stack = createStackNavigator();

  const globalOption = {
    headerStyle:{backgroundColor: "#2c68ed"},
    headerTitleStyle: {color:'white'},
    headerTintColor:"white"
  }

    const RootNavigation = () => {

    const dispatch = useDispatch()
        useLayoutEffect(() => {
        dispatch(getTrips())
    },[])

    


    return (
        <NavigationContainer>

          <Stack.Navigator screenOptions={globalOption} initialRouteName="Login" >
              <Stack.Screen name="Login" component={Login} />     
              <Stack.Screen name="SignUp" options={{ headerShown: false}} component={SignUpScreen} /> 
              <Stack.Screen  name="Main" component={Main} options={{ headerShown: false }} /> 
              <Stack.Screen name="ForgotPassword" options={{ headerShown: false}} component={ForgotPassword} />   
          </Stack.Navigator>

        </NavigationContainer>
    )
}

export default RootNavigation

const styles = StyleSheet.create({})
