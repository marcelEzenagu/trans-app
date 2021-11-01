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
        console.log("tripId:", tripId)
        removeTrip(tripId).then(
            ()=> {dispatch(getAdminTrips())
        })
    }

    const handleEdit = (trip) => {
        // navigation.push('EditTrip', {trip})
    }

    const toTickets = () => {
        navigation.push('Tickets')        
    }


    const toAdminMessages = () => {
        navigation.push('Messages')        
    }

    const toCreateTrip = () => {
        navigation.push('CreateTrip')        
    }

    
    const toTrips = () => {
        navigation.push('Trips')        
    }

    return (
        <View style={styles.container} >
            <>
                <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                    <TouchableOpacity onPress={toTickets} style={styles.button}>
        
                            <Text  style={styles.text}>Tickets
                            </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={toAdminMessages} style={styles.button}>
                            <Text  style={styles.text}>Messages
                                {/* <Text style={styles.superscript}>
                                    {' '}10
                                </Text> */}
                            </Text>
                    
                    </TouchableOpacity>
                 </View>
                <View style={{flexDirection:"row",justifyContent:'space-evenly',alignSelf:'center',marginVertical:10,}}>

               
                    <TouchableOpacity onPress={"#"} style={styles.button}>
                            <Text   style={styles.text}>Completed Trips</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={toCreateTrip} style={styles.button}>
                        
                            <Text  style={styles.text}>CreateTrip</Text>
                        
                    </TouchableOpacity>
            </View>
            </>
            <Text h4  >All Trips </Text>
            <ScrollView showsVerticalScrollIndicator={false}  contentContainerStyle={{
            backgroundColor: '#2c68ed',width:'95%', justifyContent:'center', alignItems:'center'}}>
            {tripList.map((trip, i) => 
                <View key={i} style={{flexDirection:"row",borderRadius:5, justifyContent:'center',alignItems:'center'}}>    
                    <TripListItem  trip={trip}/>  
                    <TouchableOpacity onPress= {()=> handleRemoveTrip(trip._id)}>
                            <Text h4 h4Style={{marginLeft:10}} >X{" "}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Link to='/EditTrip'
                            action={StackActions.push('EditTrip', {trip})}
                            style={styles.link}>
                            <Text h4 h4Style={{marginLeft:10}} >{" "}ED</Text>
                        </Link>
                    </TouchableOpacity>
                </View>
                )}
            </ScrollView>
        </View>
    )
}

export default AdminBoard

const styles = StyleSheet.create({
     container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width:'100%',
    justifyContent: 'center',
    marginTop:10
    },  
      button: {backgroundColor:'#2c68ed',
     borderRadius:3,marginLeft:5 
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
