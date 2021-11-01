import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import TripListItem from '../../components/TripListItem'
import { getMyTrips } from '../../helpers/apicalls'
// import socket from '../../helpers/socket'
import {Text} from 'react-native-elements'


const BookingStatus = ({navigation}) => {
    
    const user = useSelector(state => state.user.userProfile)
    const [trips, setTrips] = useState([]) 
            console.log("user:", user)
    // possibly get full trip details from db using id
    useEffect(() => {
            const abortController = new AbortController()
            const signal = abortController.signal
                 getMyTrips({userId:user._id}).then((data) => {
                    //  console.log("tripsBYID", data.data)
                     if (data && data.error) {
                         console.log(data.error)
                        } else {
                            setTrips(data.data)
                        }
                    })

        return function cleanup() {
            abortController.abort()
        }

    }, [])

    return (
        <View style= {styles.container}>
            {trips.length?

            <ScrollView contentContainerStyle={{borderRadius:6}}>    
              {  trips?.map((trip,i) => 
                

                  <TripListItem key={i} trip={trip}/>
                
                    )}
            </ScrollView>
                    :
            <Text h2>You have made no Bookings yet.</Text>
            }
            

        </View>
    )
}

export default BookingStatus

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginVertical:10,
        borderRadius:6,
        // width:'100%',
        justifyContent: 'center',
    },
})
