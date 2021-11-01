import React from 'react'
import { StyleSheet,  View} from 'react-native'
import {Text, ListItem } from 'react-native-elements'

const TripListItem = ({ trip }) => {
   
    return (
            <View style= {styles.container}>
                <View style={{ color:'white',padding:10}} >
                    <Text h4>Trip Identity: {''}
                        <Text style={styles.subText}>
                            {trip?._id} 
                        </Text>
                    </Text>
                    
                    <Text h4>Trip schedule: {''}
                        <Text style={styles.subText}>
                            
                            {trip?.departureTime} 
                        </Text>
                    </Text>
                    
                    <Text h4 >Destination: {''}
                        <Text style={styles.subText}>
                            
                            {trip?.destination} 
                        </Text>
                    </Text>
                    <Text h4 >From: {''}
                        <Text style={styles.subText}>
                            
                         {trip?.from}
                        </Text>
                   
                     </Text>
                     <Text h4 >By: {''}
                        <Text style={styles.subText}>
                            
                            {trip?.vehicleType} 
                        </Text>
                    </Text>
                   
                      <Text h4 >Passenger Spaces: {''}
                        <Text style={styles.subText}>
                            
                            {trip?.capacity.toString()}
                        </Text>
                      </Text> 
                   
                    <Text h4 >Cost: {''}
                        <Text style={styles.subText}>
                            
                           # {trip?.fee}
                        </Text>
                    </Text> 
                </View>            

            </View>
                
    )
}

export default TripListItem


const styles = StyleSheet.create({
    container: {
        flex: 1,backgroundColor:'#2c68ed',
        alignItems: 'center',
       
        justifyContent: 'center',
        },
    subText: {
        color: 'white',fontWeight:'500', fontSize:15,
        },
    input: {width:300,color:'white'},
    label:{color:'black', fontSize:20}
})
