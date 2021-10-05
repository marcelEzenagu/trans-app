import React, { useEffect, useState } from 'react'
import {  StyleSheet, View } from 'react-native'
// import socket from '../../helpers/socket'
import {placeBooking} from '../../helpers/apicalls'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input ,Text} from 'react-native-elements'
import { getTrips } from '../../redux/trip/tripSlice'

const TicketingScreen = ({navigation, route}) => {
    const dispatch =useDispatch()
    const [quantity, setQuantity] = useState(1)
    const [values, setValues] = useState({
        error: "",
        message: ""
    })
    const user = useSelector(state => state.user.userProfile)

let ticketDetails = {
    'tripId': route.params._id,
    'destination': route.params.destination,
    'fee': route.params.fee * quantity,
    'from':route.params.from,
    'admin':route.params.createdBy,
    'quantity': quantity
}


    const ticket = {...ticketDetails, "userId":user._id}

    const handleTicketing = (e) => {
        e.preventDefault()
        // console.log("here's ticketDetails: ", ticketDetails)
        placeBooking({id: user._id, tripId:route.params._id}, ticketDetails).then(data =>{
            console.log("data recieved at ticketingScreen: ", data)
            if (!data.error) {
                setValues({...values, message: data.data})
                 dispatch(getTrips())
            }else {
                setValues({...values, error: data.error})
            }
        })
        // socket.emit("ticketingNotice", ticket)
    }
    return (
        <View style= {styles.container}>
            {route.params ?
            
                <View key={route.params._id} style={{ borderRadius:5,color:'white',padding:10,backgroundColor:'#2c68ed'}} >
                    <Text h4> Trip Identity: {''}
                        <Text style={styles.subText}>
                            {route.params._id} 
                        </Text>
                    </Text>
                    <Text h4 > Destination:{''}
                        <Text style={styles.subText}>
                            
                            {route.params.destination} 
                        </Text>
                    </Text>
                    <Text h4 > From: {''}
                        <Text style={styles.subText}>
                            
                         {route.params.from}
                        </Text>
                   
                     </Text>
                      <Text h4 > Passenger Spaces: {''}
                        <Text style={styles.subText}>
                            
                            {route.params.capacity.toString()}
                        </Text>
                      </Text> 
                   
                    <Text h4 > Cost: {''}
                        <Text style={styles.subText}>
                            
                           # {route.params.fee * quantity}
                        </Text>
                      </Text> 
                    <Input
                      label = "Number of travellers"
                    labelStyle ={styles.label}
                    inputStyle={styles.input}
                    placeholder="Choose number of passagers"
                    onChangeText={(text) => setQuantity(text)}
                    autoFocus
                    value={quantity.toString()}
                            
                    
                    />
                    <View>


                          <Button title='Pay for Ticket'
                            onPress={handleTicketing} 
                            color="black"
                             disabled={values.message || values.error} 
                            style={{marginTop:10, width:"contain", alignSelf:'center'}} 
                            />
                            { (!values.error && values.message) ?
                                <View>
                                    <Text style={{
                                        borderColor:'green',
                                        borderWidth:1.5,
                                        borderRadius:3,
                                        padding: 10,
                                        marginBottom:10,
                                        backgroundColor:'white',
                                        color:'green', 
                                        fontWeight:'bold'}} > {values.message} </Text>
                            
                                </View>
                            : null
                            }
                             {(!values.message && values.error) ?
                                <View>
                                    <Text style={{ 
                                        borderColor:'red',
                                        backgroundColor:'white',
                                        textAlign:'center',
                                        borderWidth:1.5,
                                        borderRadius:3,
                                        padding: 10,
                                        marginBottom:10,
                                        color:'red', 
                                        fontWeight:'bold'}} > {values.error} </Text>
                            
                                </View>
                                : null
                            }
                          </View>

                </View>

            : 
                
            <Text>Im booking Screen</Text>
            }

        </View>
    )
}

export default TicketingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
       
        justifyContent: 'center',
    },
    subText: {
        color: 'white',fontWeight:'500', fontSize:15,
    },
            input: {width:300,color:'white'},
            label:{color:'black', fontSize:20}
})
