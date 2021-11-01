import React, { useCallback, useEffect,useLayoutEffect, useState } from 'react'
import { StyleSheet, View ,ScrollView ,TouchableOpacity , RefreshControl} from 'react-native'
import { Button, Avatar, Text } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import TripListItem from './../components/TripListItem'
import { clearJWT, isAuthenticated } from '../helpers/authHelpers'
import { getUserProfile } from './../redux/userProfile/userProfileSlice'
import AdminBoard from './../screens/Admin/AdminBoard'
import CustomerBoard from './../screens/customer/CustomerBoard'
import { getTrips } from '../redux/trip/tripSlice'


const Dashboard = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false)

  const [auth, setAuth] = useState()
  const trips = useSelector(state => state?.trips?.tripList)
  const user = useSelector(state => state.user?.userProfile)
  const nav = navigation
    
  const dispatch = useDispatch()
  const onRefresh = useCallback(() => {
    setRefreshing(true)
    dispatch(getTrips()).then(() => setRefreshing(false));
  },[refreshing]);

  // console.log("Trips from store: ", trips)
  

  const enterTicketing = (trip) => {
      navigation.navigate("TicketingScreen", trip)
  }

    useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => 
          <View style={{marginRight:20, }}>
          <TouchableOpacity onPress={handleLogOut}>
            <Text style={{color:'#fff', fontWeight:'bold'}}> {" "}LogOut</Text>
          </TouchableOpacity>
        </View>
      
    })
  }, [])

    const handleLogOut = () => {
      clearJWT()
        navigation.replace("Login")
    }

    
    // use login details to get userProfile
    useLayoutEffect(()=> {
      const jwt = isAuthenticated().then((value) => {
             if (value?.token ) {
               dispatch(getUserProfile(value.user._id))    
                } 
            }
            ) 
    }, [])

    // emit realtime messaging if user is an Admin
    // useEffect(()=> {
    //   const jwt = isAuthenticated().then((value) => {
    //          if (value?.user.isAdmin ) {   
    //            socket.on("ticketPurchase", data => {
    //              console.log("recieved data fromsocket: ", data)
    //            })
    //             } 
    //         }
    //         )
    // })

    return (
      <View style= {styles.container}>
            { (user?.isAdmin) ? 
                 <AdminBoard navigation={nav} />
                 :
              <>

                <CustomerBoard navigation={nav} />
                
                <ScrollView  
                showsVerticalScrollIndicator={false} 
                  refreshControl = {<RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    />
                  }
                  >
                    <Text style={{fontWeight:'bold',fontSize:20,marginTop:10, alignSelf:'center'}}>Available Trips</Text>
                  {
                    trips.map((trip, i) => 
                    <TouchableOpacity 
                    activeOpacity={0.2}
                    style={{borderRadius:5 }}
                    key = {i} 
                    onPress={() => enterTicketing(trip) }
                      >
                              
                        <TripListItem 
                            
                            trip={trip} 
                            
                            />          
                        
                    </TouchableOpacity>
                )}
                </ScrollView>
                                
                                  

              </>
              
          } 
      
        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width:'100%',
    justifyContent: 'center',
    },  
    text: {
        padding:10, 
        color:'white', 
        fontWeight:'700'

    }
})
