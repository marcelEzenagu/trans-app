import React, { useEffect, useLayoutEffect, useState } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { StackActions,Link} from '@react-navigation/native'
import TripListItem from './../../components/TripListItem'
import { useSelector,useDispatch } from 'react-redux'
import { Button,  Text, } from 'react-native-elements'
import { getAdminTrips } from './../../redux/trip/adminTripSlice'
import { removeTrip } from './../../helpers/apicalls'

const AdminBoard = ({navigation}) => {
    const [tripList, setTripList] = useState([])
    const dispatch = useDispatch()
    const trips = useSelector(state => state.adminTripList.tripList)
     const user = useSelector(state => state.user.userProfile) 

    // regulates general display
    useLayoutEffect(() => {
        dispatch(getAdminTrips())
    },[])

    // regulates trip after a delete action
    useEffect(() => {
            setTripList(trips)      
    }, [trips])

    // handle trips

    // handle admin messages
    const handleAdminMessage = () => {
    }

    // handle customer message
    const handleCustomerMessage = () => {
        navigation.push('message')
    }

        // handle customer message
    const handleCreateTrip = () => {
        navigation.push('CreateTrip')
    }

    const handleRemoveTrip = (tripId) => {
        removeTrip(tripId).then(
            ()=> {dispatch(getAdminTrips())
        })
    }

    const handleEdit = (trip) => {
        // navigation.push('EditTrip', {trip})
    }

    const toCustomerMessages = () => {
        navigation.push('Messages')        
    }


    const toAdminMessages = () => {
        navigation.push('Messages')        
    }

    const toCreateTrip = () => {
        navigation.push('Messages')        
    }

    
    const toTrips = () => {
        navigation.push('Trips')        
    }

    return (
        <View style={{width:'80%'}}>
            <View  >
                <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                <TouchableOpacity onPress={toCustomerMessages} style={styles.button}>
     
                        <Text  style={styles.text}>Customer Messages
                            

                        </Text>
                  </TouchableOpacity>
                
                <TouchableOpacity onPress={toAdminMessages} style={styles.button}>
                        <Text  style={styles.text}>Co-Admin message
                            {/* <Text style={styles.superscript}>
                                {' '}10
                            </Text> */}
                        </Text>
                  
                </TouchableOpacity>
                 </View>
                <View style={{flexDirection:"row",justifyContent:'space-between',alignSelf:'center',marginTop:10, width:'90%'}}>

               
                    <TouchableOpacity onPress={toTrips} style={styles.button}>
                      
                            <Text   style={styles.text}>Trips</Text>
                      
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={toCreateTrip} style={styles.button}>
                        
                            <Text  style={styles.text}>CreateTrip</Text>
                        
                    </TouchableOpacity>
                </View>
            </View>
            {tripList.map((trip, i) => 
            <ScrollView showsVerticalScrollIndicator={false} key ={i} contentContainerStyle={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <TripListItem trip={trip}/>      
                    <Button
                        title='remove'
                        color='red'
                        containerStyle={{width:200,marginLeft:10,}}
                        onPress = {()=> handleRemoveTrip(trip._id)}
                    />
                    <TouchableOpacity>
                        <Link to='/EditTrip'
                            action={StackActions.push('EditTrip', {trip})}
                            style={styles.link}>
                            <Text h4 h4Style={{marginLeft:10,}} >Edit</Text>
                        </Link>
                    </TouchableOpacity>
                
            </ScrollView>
                )}
        </View>
    )
}

export default AdminBoard

const styles = StyleSheet.create({
      button: {backgroundColor:'blue',
     borderRadius:5 


    },
    link :{
      padding:10 ,
    },
    text: {
        padding:10, 
        color:'white', 
        fontWeight:'500',

    },
    superscript:
        {textAlignVertical:'top',
        lineHeight:0,
        color:'red',
        backgroundColor:'black',
        borderRadius:5,
        
        fontSize:15}
})
