
import React, { useState } from 'react'
import { StyleSheet, View,KeyboardAvoidingView } from 'react-native'
import {  Text,Input,Button } from 'react-native-elements'

const EditTrip = ({route, navigation}) => {

    const trip = route.params.trip
     const [values, setValues] = useState({
        mode:trip.mode,
        fee:trip.fee,
        destination:trip.destination,
        from:trip.from,
        vehicleType:trip.vehicleType,
        departureTime:trip.departureTime,
        capacity:trip.capacity
    })

    
        const handleChange = (name) => (text) => {
            setValues({...values, [name]:(text)})
        }


    const HandleEditTrip= () => {

    }

    return (
         <KeyboardAvoidingView style={styles.container} >
                <View style={styles.subContainer} >

                        {/* <View> */}
                            <Text h4 style={{borderBottomColor:'gray',textAlign:'center',color:'white', borderBottomWidth:0.5,marginBottom:30, width:"70%"}} >Edit Trip</Text>
                            
                            <Input
                                label = "Mode"
                                style={{width:300}}
                                placeholder="Enter trip mode (Night or regular) "
                                onChangeText={(text) => setValues({ ...values, mode:text})}
                                autoFocus
                                value={values.mode}
                            />
                            <Input
                                label = "Fee"
                                placeholder="Enter the trip's fee"
                                onChangeText={(text) => setValues({...values, fee:text})}
                                value={values.fee}
                            />
                            <Input
                                label = "Destination"
                                placeholder="Enter the trip's destination"
                                onChangeText={(text) => setValues({...values, destination:text})}
                                value={values.destination}
                            />
                            <Input
                                label = "From"
                                placeholder="Enter where the trip is from"
                                onChangeText={(text) => setValues({...values, from:text})}
                                value={values.from}
                            />
                            <Input
                                label = "VehicleType"
                                placeholder="Enter the trip's vehicle-Type e.g (mini-bus, sienna e.t.c)"
                                onChangeText={(text) => setValues({...values, vehicleType:text})}
                                value={values.vehicleType}
                            />
                            <Input
                                label = "Departure Time"
                                placeholder="Enter the trip's departure Time"
                                onChangeText={(text) => setValues({...values, departureTime:text})}
                                value={values.departureTime}
                            />
                            <Input
                                label = "Capacity"
                                placeholder="Enter the trip's capacity"
                                onChangeText={(text) => setValues({...values, capacity:text})}
                                value={values.capacity}
                            />
                            <Button title='Post Modified trip'
                            onPress={HandleEditTrip} 
                            color="green"
                            disabled={!values.capacity } 
                            containerStyle={{marginTop:10, width:200}} 
                            />
                </View>
            </KeyboardAvoidingView>
      
    )
}

export default EditTrip

const styles = StyleSheet.create({
      container: {
        
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
       
        marginTop:20,
        justifyContent: 'center',
    },
    subContainer: {
        padding:10,
        color:'white',
        backgroundColor: '#2c68ed',
        alignItems: 'center',
        borderRadius:5,
        width:'70%'
        // justifyContent: 'center',
        
    },
   
})
