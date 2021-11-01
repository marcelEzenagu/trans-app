
import { NavigationContainer } from '@react-navigation/native'
import React, { useState,  } from 'react'
import { StyleSheet,  Keyboard,View,KeyboardAvoidingView,TouchableWithoutFeedback, ScrollView } from 'react-native'
import { Input, Button,Text } from 'react-native-elements'
import { useSelector } from 'react-redux'
import { postTrip } from '../../helpers/apicalls'
import DatePicker from 'react-native-date-picker'
import Notificator from '../../components/Notificator'

const CreateTrip = ({navigation}) => {
    
    const user = useSelector(state => state.user.userProfile)
  
    const [values, setValues] = useState({
        
                    mode: '',
                    fee: '',
                    destination: '',
                    from: '',
                    vehicleType: '',
                    departureTime: new Date(),
                    capacity: '', 
                    error:"",
                    success:"",
                    open:false
    })

    
    const createTrip = async(e) => {
        e.preventDefault()
        console.log("values:", {...values})
        // postTrip({id: user._id}, {...values}).then(data => {
        //     console.log(data)
        //     if(data.data) {
        //         setValues({...values,open:true, success:data.data })
        //         // navigation.push("Dashboard")
        //     }
        // })
        // .catch(error => console.log(error))
    }

    
    const handleCloseNotificator = () => {

        setValues({...values, open:false})
        navigation.push('Dashboard')
    }
    
    const scrollBehavior = Platform.OS === "ios" ? "padding" : "height"
    return (
        <KeyboardAvoidingView  style={styles.container} behavior={scrollBehavior}>
        { !values.open ? 
            <View style={styles.subContainer}  >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss()} >
            <ScrollView  showsVerticalScrollIndicator={false}  > 
            <Text h4 style={{borderBottomColor:'gray',textAlign:'center',color:'white',marginBottom:30}} >Post a New Trip</Text>
            <Input
                    inputStyle={styles.input}
                    labelStyle={styles.label}
                    label = "Mode"
                    placeholder="Enter (Night or regular) "
                    onChangeText={(text) => setValues({ ...values, mode:text})}
                    value={values.mode}
                    // ref={el => inputRef.current['mode'] = el}
                    />
                    <Input
                    inputStyle={styles.input}
                    labelStyle={styles.label}
                    label = "Fee"
                    placeholder="Enter the trip's fee"
                    onChangeText={(text) => setValues({...values, fee:text})}
                    value={values.fee}
                    
                    // ref={el => inputRef.current['fee'] = el}
                    />
                    <Input
                    inputStyle={styles.input}
                    labelStyle={styles.label}
                    label = "Destination"
                    placeholder="Enter the trip's destination"
                    onChangeText={(text) => setValues({...values, destination:text})}
                    value={values.destination}
                    
                    // ref={el => inputRef.current['destination'] = el}
                    />
                <Input
                    inputStyle={styles.input}
                    labelStyle={styles.label}
                    label = "From"
                    placeholder="Enter where the trip is from"
                    onChangeText={(text) => setValues({...values, from:text})}
                    value={values.from}
                    
                    // ref={el => inputRef.current['from'] = el}
                    />
                    <Input
                    inputStyle={styles.input}
                    labelStyle={styles.label}
                    label = "VehicleType"
                    placeholder="Enter the trip's vehicle-Type e.g (mini-bus, sienna e.t.c)"
                    onChangeText={(text) => setValues({...values, vehicleType:text})}
                    value={values.vehicleType}
                    
                    
                    // ref={el => inputRef.current['vehicleType'] = el}
                    />
                    {/* <Input
                        inputStyle={styles.input}
                        labelStyle={styles.label}
                        label = "Departure Time"
                        placeholder="Enter the trip's departure Time"
                        // value={values.departureTime}
                        
                        
                        >
                        <DatePicker date={values.departureTime} onDateChange={() => setValues('departureTime')}  />
                    </Input> */}
                    <Text style={[styles.label, {fontWeight:'bold', fontSize:17}]} > Select Trip Departuretime</Text>
                    <DatePicker 
                        mode = "datetime"
                        placeholder="Select Date"
                        date={values.departureTime}
                        onDateChange={(date) => setValues({...values,departureTime:date})}  
                     />
                    
                    <Input
                    inputContainerStyle={styles.input}
                    labelStyle={styles.label}
                    label = "Capacity"
                    placeholder="Enter the trip's capacity"
                    onChangeText={(text) => setValues({...values, capacity:text})}
                    value={values.capacity}
                    
                    // ref={el => inputRef.current['capacity'] = el}
                    />
                    <Button title='Post trip'
                    onPress={ createTrip} 
                    
                    disabled={!values.capacity} 
                    containerStyle={{marginTop:10, width:200,alignSelf:'center'}} 
                    />
                    </ScrollView>
                    </TouchableWithoutFeedback>
                    </View>
                    
                    :
                    <Notificator 
                        message={values.success.message}
                        closeNotifier={handleCloseNotificator}
                    />
                }
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
        // alignItems: 'center',
        borderRadius:5,
        width:'90%',
        marginHorizontal:10,
        
    },
    input: {width:'100%',color:'white'},
    label:{color:'white',width:'100%'},
   
})
