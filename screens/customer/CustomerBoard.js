import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StackActions,Link} from '@react-navigation/native'
import { isAuthenticated } from './../../helpers/authHelpers'
import { useSelector } from 'react-redux'

const CustomerBoard = ({navigation}) => {
    const user = useSelector(state => state.user.userProfile) 

    const toMessages = () => {
            navigation.push('Messages')
    }

    const toBooking = () => {
        navigation.push('Booking')        
    }
    const toStatus = () => {
        navigation.push('BookingStatus')        
    }
    const toAccount = () => {
        navigation.push('Account')        
    }
    
    
    
    
    return (
        <View style={{width:'100%'}} >
            {/* <Text style={{fontWeight:'500',marginLeft:15}}>Hello {user? (user?.name): "User"}</Text> */}
            <View >
                <View style={{flexDirection:"row",justifyContent:'space-evenly', marginVertical:10}}>
                    <TouchableOpacity onPress={toBooking} style={styles.button}>


                            <Text style={styles.text}>
                                             Book a Trip
                            </Text>

                        </TouchableOpacity>
                          <TouchableOpacity onPress={toStatus} style={styles.button}>

                        <Text style={styles.text}>
                                          Check Bookings Status
                        </Text>
                    </TouchableOpacity>  

                </View>

                <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                    <TouchableOpacity onPress={toMessages} style={styles.button}>
                        <Text style={styles.text}>
                            Talk to us
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.button}>
                        <Text style={styles.text}>
                            Check Your account
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default CustomerBoard

const styles = StyleSheet.create({
    button: {backgroundColor:'#2c68ed',
     borderRadius:5 

    },
    text: {
        padding:10, 
        color:'white', 
        fontWeight:'500',
        // marginHorizontal:10

    }
})
