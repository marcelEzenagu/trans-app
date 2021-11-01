import React, {useState} from 'react'
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { Button, Input ,Text} from 'react-native-elements'

const Booking = () => {
    

    const [from, setFrom] = useState('');
    const [departure, setDeparture] = useState('')
    const [destination, setDestination] = useState('')
    const [traveller, setTraveller] = useState('')

    
    return (

        <View style={styles.container}>
            <KeyboardAvoidingView style={{padding: 20,width:'90%',backgroundColor:'#2c68ed', borderRadius:4}}>
                <Text  h4 style={{marginBottom:10, alignSelf:'center', color:'white'}} >Interested in a private trip? </Text>
                <Input
                    label="Travelling From"
                    keyboardType='default'
                    inputStyle={styles.input}
                    labelStyle={styles.label}
                    placeholder="Enter Depature Terminal"
                    value={from}
                    onChangeText={(text) => setFrom(text)}
                />


                <Input
                    label="Travelling To"
                    inputStyle={styles.input}
                    labelStyle={styles.label}
                    placeholder="Arrival Terminal"
                    keyboardType='default'
                    value={destination}
                    onChangeText={(text) => setDestination(text)}
                
                />

                <Input
                    label="Depature"
                    
                    keyboardType='default'
                    inputStyle={styles.input}
                    labelStyle={styles.label}
                    placeholder="dd/mm/yyyy"
                    value={departure}
                    onChangeText={(text) => setDeparture(text)}
                    
                    />

                <Input
                label="Traveller(s)"
                inputStyle={styles.input}
                labelStyle={styles.label}
                placeholder="Choose a number"
                value={traveller}
                keyboardType='default'
                onChangeText={(text) => setTraveller(text)}
                
                />

                <Button color={'red'} containerStyle={{width:200, alignSelf:'center'}} title="Send" />
            </KeyboardAvoidingView>
            
        </View>
    )
}

export default Booking

const styles = StyleSheet.create({
    container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // width:'100%',
    marginTop:10,
    justifyContent: 'center',
  },
    input: {width:'100%',color:'white'},
    label:{color:'white'},
    
})
