import React, { useEffect, useState } from 'react'
import {  StyleSheet, View,Picker } from 'react-native'
import {placeBooking} from '../../helpers/apicalls'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input ,Text} from 'react-native-elements'
import { getTrips } from '../../redux/trip/tripSlice'
import Notificator from '../../components/Notificator'
import socket from '../../helpers/socket'

const TicketingScreen = ({navigation, route}) => {
    const dispatch =useDispatch()
    const [quantity, setQuantity] = useState("1")
    const [values, setValues] = useState({
        error: "",
        message: "",
        open:false
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
        placeBooking({id: user._id, tripId:route.params._id}, {'quantity': quantity}).then(data =>{
            console.log("data recieved at ticketingScreen: ", data)
            if (!data.error) {
                setValues({...values,open:true, message: data.data})
                 dispatch(getTrips())
            }else {
                setValues({...values,open:true, error: data.error})
            }
        })
        socket.emit("ticketingNotice", ticket)
    }

    const handleCloseNotificator = () => {

        setValues({...values, open:false})
        navigation.push('Dashboard')
    }
    return (
        <View style= {styles.container}>
            {!values.open ?
            
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
                        <Text style={quantity < route.params.capacity ?styles.subText : styles.danger}>
                            
                           # {route.params.fee * quantity.toString()}
                        </Text>
                    </Text> 
                    <Input
                      label = "Number of travellers"
                    labelStyle ={styles.label }
                    inputStyle={route.params.capacity > quantity ? styles.input : styles.danger}
                    keyboardType='numeric'
                    
                    // placeholder="Choose number of passagers"
                    onChangeText={(text) => setQuantity(text)}
                    autoFocus={true}
                    value={quantity}
                />
                    <View>
                        <Button title='Pay for Ticket'
                            onPress={handleTicketing} 
                            color="black"
                            disabled={!quantity || (quantity > route.params.capacity)} 
                            style={{marginTop:10, width:"contain", alignSelf:'center'}} 
                        /> 
                    </View>
                </View>
            : 
                <Notificator 
                    message = {values.message}
                    error = {values.error}
                    closeNotifier = {handleCloseNotificator}
                />
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
        color: 'white',fontWeight:'500', fontSize:15},
    input: {width:300,color:'white'},
        label:{color:'black', fontSize:20},
        danger:{color:'red',textDecorationLine:'line-through',fontWeight:'bold', fontSize:20}

})
