import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from './../coreScreens/Dashboard'
import Messages from './../screens/Messages';
import Chat from './../screens/Chat';
import Account from './../screens/customer/Account';
import Booking from './../screens/Booking';
import TicketingScreen from './../screens/customer/TicketingScreen';
import BookingStatus from './../screens/customer/BookingStatus';
import Trips from './../screens/customer/Trips';
import TravelHistory from './../screens/TravelHistory';
import CreateTrip from './../screens/Admin/CreateTrip';
import EditTrip from './../screens/Admin/EditTrip';
import { useDispatch } from 'react-redux';
import { getAdminTrips } from './../redux/trip/adminTripSlice';


const Stack = createStackNavigator();

  const globalOption = {
    headerStyle:{backgroundColor: "#2c68ed"},
    headerTitleStyle: {color:'white'},
    headerTintColor:"white"
  }

  
  const EntryPoint = () => {
    const dispatch = useDispatch()

  useEffect(()=> {
        dispatch(getAdminTrips())
  }, [])
    return (
            <Stack.Navigator screenOptions={globalOption} 
            initialRouteName="Dashboard" 
            >
                <Stack.Screen name="TravelHistory" component={TravelHistory} /> 
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Messages" component={Messages} /> 
                <Stack.Screen name="Chat" component={Chat} /> 
                <Stack.Screen name="Account" component={Account} /> 
                <Stack.Screen name="Booking" component={Booking} /> 
                <Stack.Screen name="EditTrip" component={EditTrip} /> 
                
                <Stack.Screen name="TicketingScreen" component={TicketingScreen} /> 
                <Stack.Screen name="BookingStatus" component={BookingStatus} /> 
                <Stack.Screen name="Trips" component={Trips} /> 
                <Stack.Screen name="CreateTrip" component={CreateTrip} /> 

        
            </Stack.Navigator>
    )
}

export default EntryPoint

const styles = StyleSheet.create({})
