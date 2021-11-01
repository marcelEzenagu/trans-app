
import React, { useState } from 'react'
import { StyleSheet, ScrollView,KeyboardAvoidingView, View } from 'react-native'
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

    
    const scrollBehavior = Platform.OS === "ios" ? "padding" : "height"
    return (
        <KeyboardAvoidingView behavior={scrollBehavior} style={styles.container} >
            <ScrollView contentContainerStyle={styles.subContainer} >
                    {/* <ScrollView> */}
                <Text h4 style={{borderBottomColor:'gray',textAlign:'center',color:'white', borderBottomWidth:0.5,marginBottom:30, width:"70%"}} >Edit Trip</Text>
                
                <Input
                    inputStyle={styles.input}
                    labelStyle={styles.label}
                    label = "Mode"
                    placeholder="Enter trip mode (Night or regular) "
                    onChangeText={(text) => setValues({ ...values, mode:text})}
                    autoFocus
                    value={values.mode}
                />
                <Input
                    inputStyle={styles.input}
                    labelStyle={styles.label}
                    label = "Fee"
                    placeholder="Enter the trip's fee"
                    onChangeText={(text) => setValues({...values, fee:text})}
                    value={values.fee.toString()}
                />
                <Input
                    inputStyle={styles.input}
                    labelStyle={styles.label}
                    label = "Destination"
                    placeholder="Enter the trip's destination"
                    onChangeText={(text) => setValues({...values, destination:text})}
                    value={values.destination}
                />
                <Input
                    inputStyle={styles.input}
                    labelStyle={styles.label}
                    label = "From"
                    placeholder="Enter where the trip is from"
                    onChangeText={(text) => setValues({...values, from:text})}
                    value={values.from}
                />
                <Input
                    inputStyle={styles.input}
                    labelStyle={styles.label}
                    label = "VehicleType"
                    placeholder="Enter the trip's vehicle-Type e.g (mini-bus, sienna e.t.c)"
                    onChangeText={(text) => setValues({...values, vehicleType:text})}
                    value={values.vehicleType}
                />
                <Input
                    inputStyle={styles.input}
                    labelStyle={styles.label}
                    label = "Departure Time"
                    placeholder="Enter the trip's departure Time"
                    onChangeText={(text) => setValues({...values, departureTime:text})}
                    value={values.departureTime}
                />
                <Input
                    inputStyle={styles.input}
                    labelStyle={styles.label}
                    label = "Capacity"
                    placeholder="Enter the trip's capacity"
                    onChangeText={(text) => setValues({...values, capacity:text})}
                    value={values.capacity.toString()}
                />
                <Button title='Post Modified trip'
                onPress={HandleEditTrip} 
                color="green"
                disabled={!values.capacity } 
                containerStyle={{marginTop:10, width:200,}} 
                />
                <View style={{height:100}} />
            </ScrollView>
        </KeyboardAvoidingView>
      
    )
}

export default EditTrip

const styles = StyleSheet.create({
      container: {
        flex: 1,
       marginTop:10,
        justifyContent: 'center',
    },
    subContainer: {
        padding:10,
        // marginBottom:30,
        marginHorizontal:10,
        color:'white',
        backgroundColor: '#2c68ed',
        alignItems: 'center',
        borderRadius:5,
        width:'95%',
        justifyContent: 'center',
        
    },
    input: {width:'100%',color:'white'},
    label:{color:'white'},
   
})
