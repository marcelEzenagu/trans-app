import React, { useEffect,useLayoutEffect, useState } from 'react'
import { StyleSheet, View ,ScrollView ,TouchableOpacity } from 'react-native'
import { Button, Avatar, Text } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import TripListItem from './../components/TripListItem'
import { clearJWT, isAuthenticated } from '../helpers/authHelpers'
import { getUserProfile } from './../redux/userProfile/userProfileSlice'
import AdminBoard from './../screens/Admin/AdminBoard'
import CustomerBoard from './../screens/customer/CustomerBoard'


const Dashboard = ({navigation}) => {

  const [auth, setAuth] = useState()
  const trips = useSelector(state => state?.trips?.tripList)
  const user = useSelector(state => state.user?.userProfile)
  const nav = navigation
    
  console.log("Trips from store: ", trips)
  const dispatch = useDispatch();

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
               
              <>

                <AdminBoard navigation={nav} />
    
              </>
              :
              <>

                 <CustomerBoard navigation={nav} />


                  <Text style={{fontWeight:'bold',fontSize:20,marginTop:10, alignSelf:'center'}}>Available Trips</Text>
                  <ScrollView  showsVerticalScrollIndicator={false} >

                            {
                              
                              trips.map((trip, i) => 
                              <TouchableOpacity 
                                      key = {i} onPress={() => enterTicketing(trip) }>
                                        
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
    // marginTop:20
    },  
  button: {backgroundColor:'blue',
     borderRadius:5 

    },
    text: {
        padding:10, 
        color:'white', 
        fontWeight:'700'

    }
})
