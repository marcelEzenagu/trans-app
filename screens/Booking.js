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
                <Text  h4 style={{marginBottom:10}} >Looking to make a private trip? </Text>
                <KeyboardAvoidingView style={{padding: 20,width:'80%',backgroundColor:'brown', borderColor:'grey', borderRadius:4}}>
                    <View>
                        <Input
                            label="Travelling From"
                            
                            keyboardType='default'
                            style={styles.input}
                            placeholder="Enter Depature Terminal"
                            value={from}
                            onChangeText={(text) => setFrom(text)}
                        />
                    </View>


                    <View>
                        <Input
                            label="Travelling To"
                            style={styles.input}
                            placeholder="Arrival Terminal"
                            
                            keyboardType='default'
                            value={destination}
                            onChangeText={(text) => setDestination(text)}
                       
                        />
                    </View>
                    <View style={{flexDirection:'row'}}>

                        <View>
                            <Input
                                label="Depature"
                                
                                keyboardType='default'
                                style={styles.input}
                                placeholder="dd/mm/yyyy"
                                value={departure}
                                onChangeText={(text) => setDeparture(text)}
                        
                            />
                        </View>

                        <View>
                            <Input
                                label="Traveller(s)"
                                style={styles.input}
                                placeholder="Choose a number"
                                value={traveller}
                                keyboardType='default'
                                onChangeText={(text) => setTraveller(text)}
                        
                            />
                        </View>
                    </View>
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
    justifyContent: 'space-evenly',
  },
    subContainer: {
        padding: 20,
        // marginTop:20,
        backgroundColor: 'blue',
        // alignItems: 'center',
        borderRadius:5,
        flex:1
    },
    
  input: {
      height:40,
      padding:5,
  }
})
