import React from 'react'
import { StyleSheet,  View,TouchableOpacity } from 'react-native'
import {Text, ListItem } from 'react-native-elements'

const TripListItem = ({ trip }) => {
   
    console.log("trips at tripList: ", trip)
    return (
            <View>
                <View  style={{alignItems:'center', marginBottom:10}}  >
                    <Text>
                            <Text h4>

                            {trip.from}
                            </Text> to  <Text h4>{trip.destination}</Text>
                            <Text h4>
                            {" "}Fee: {" "}
                            </Text>
                            #{trip.fee}
                            <Text h4>Trip type: </Text>
                            {trip.mode} trip
                        
                        <Text h4>By: {" "} </Text>
                            {trip.vehicleType}
                        <Text h4>Passenger space: {" "} </Text>
                            {trip?.capacity}
                            <Text h4>Trip schedule {' '} </Text>
                            {trip.departureTime}
                        </Text>
                </View>
                            
                         

            </View>
                
    )
}

export default TripListItem

const styles = StyleSheet.create({})
