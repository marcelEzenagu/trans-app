
import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet,  View,KeyboardAvoidingView, ScrollView, TextInput } from 'react-native'
import { Input, Button,Text } from 'react-native-elements'
import { useSelector } from 'react-redux'
import { postTrip } from '../../helpers/apicalls'

const CreateTrip = ({navigation}) => {
    
    const user = useSelector(state => state.user.userProfile)
    const [messages, setMessages] = useState({
        error:"",
        success:""
    })
    const [values, setValues] = useState({
        mode:'',
        fee:'',
        destination:'',
        from:'',
        vehicleType:'',
        departureTime:'',
        capacity:''
    })
    const createTrip = async(e) => {
        e.preventDefault()
        console.log({...values})
        postTrip({id: user._id}, {...values}).then(data => {
            console.log(data)
            if(data.data) {
                setMessages({...messages, success:data.data })
                navigation.push("Dashboard")
            }
        })
        .catch(error => console.log(error))
    }
    return (
        <KeyboardAvoidingView  style={styles.container}>
            <View style={styles.subContainer}  >
                
                <Text h4 style={{borderBottomColor:'gray',textAlign:'center', borderBottomWidth:0.5,marginBottom:30}} >Post a New Trip</Text>
             <ScrollView  showsVerticalScrollIndicator={false}  > 

                            
                <Input
                    
                    inputStyle={styles.input}
                    labelStyle={styles.label}
                    label = "Mode"
                    placeholder="Enter (Night or regular) "
                    onChangeText={(text) => setValues({ ...values, mode:text})}
                
                    value={values.mode}
                />
                <Input
                    
                    inputStyle={styles.input}
                    labelStyle={styles.label}
                    label = "Fee"
                    placeholder="Enter the trip's fee"
                    onChangeText={(text) => setValues({...values, fee:text})}
                    value={values.fee}
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
                    
                    inputContainerStyle={styles.input}
                    labelStyle={styles.label}
                    label = "Capacity"
                    placeholder="Enter the trip's capacity"
                    onChangeText={(text) => setValues({...values, capacity:text})}
                    value={values.capacity}
                />
                <Button title='Post trip'
                    onPress={createTrip} 
                    color="green"
                    disabled={!values.capacity} 
                    containerStyle={{marginTop:10, width:200}} 
                />
            </ScrollView>
 
        </View>
            </KeyboardAvoidingView>
               
    )
}

export default CreateTrip

const styles = StyleSheet.create({
     container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop:5,
        justifyContent: 'center',
    },
    subContainer: {
        padding:10,
        color:'white',

        backgroundColor: '#2c68ed',
        alignItems: 'center',
        borderRadius:5,
        width:'90%',
        marginHorizontal:10,
        
    },
    input: {width:'100%',color:'white'},
    label:{color:'white',width:'100%'},
   
})
