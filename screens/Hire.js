import React, {useState} from 'react'
import { KeyboardAvoidingView,TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Hire = () => {
    const [departure, setDeparture] = useState('')
    const [destination, setDestination] = useState('')
    const [departing, setDeparting] = useState('')
    const [arriving, setArriving] = useState('')

    const [oneWay, setOneWay] = useState(true)

    const handleOneWay = () => {
        setOneWay(true)
    }

    
    const handleRoundTrip = () => {
        setOneWay(false)
    }


    return (
        <View style={{width:'60%'}}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <TouchableOpacity onPress={handleOneWay}>
                        <Text>One Way</Text>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleRoundTrip}>
                        <Text>Round Trip</Text>
                    </TouchableOpacity>

                </View>
            {oneWay ? (
                
            <View>
                
                <KeyboardAvoidingView>
                    
                        <View>
                            <Text style={styles.text}>Hire From</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Departure Point"
                                value={departure}
                                onChangeText={(text) => setDeparture(text)}
                        
                            />
                        </View>

                        <View>
                            <Text style={styles.text}>Hire Destination</Text>
                            <TextInput
                                style={styles.input}
                                placeholder= "Enter Destination"
                                value={destination}
                                onChangeText={(text) => setDestination(text)}
                        
                            />
                        </View>

                        <View>
                            <Text style={styles.text}>Departing On</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="dd/mm/yyyy"
                                value={departing}
                                onChangeText={(text) => setDeparting(text)}
                        
                            />
                        </View>
                        <View>
                            <Text style={styles.text}>Arriving On</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="dd/mm/yyyy"
                                value={arriving}
                                onChangeText={(text) => setArriving(text)}
                        
                            />
                        </View>




                </KeyboardAvoidingView>
            </View>
            
            ): (
                <>
                                <Text>Round Trip</Text>
                </>
            )
            }
        </View>
    )
}

export default Hire

const styles = StyleSheet.create({
    
  input: {
      height:40,
      margin:12,
      padding:5,
      borderWidth:1,
      borderColor:'grey'

  }
})
