
import { StackActions,Link} from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Input, Text, Image } from 'react-native-elements'

import { useSelector } from 'react-redux'

const Profile = ({navigation}) => {
    const [authUser, setAuthUser] = useState()
    const user = useSelector(state => state.user.userProfile)
  
    return (
        <View style={styles.container}>
            <View style= {styles.subContainer}>
                <View style={{flexDirection:'row',width:'90%', justifyContent:'space-between', alignItems:'center', marginTop:20,}}>
                    {/* <Image alt={user?.name} /> */}
                    <Text style={{fontSize:18, }} >{user?.name}'s profile</Text>
                    <TouchableOpacity  >
                        <Link to='/EditProfile'
                            action={StackActions.push('EditProfile', {user})}
                            style={styles.link}>
                            <Text style={{marginLeft:10, fontWeight:'bold',}} >{" "}Edit</Text>
                        </Link>
                    </TouchableOpacity>
                </View>
                {(user?.isAdmin) ?
                (
                <KeyboardAvoidingView  style={styles.subContainer}>
                    <ScrollView>
                        <Text style={{}} >
                            Full Name: {" "} <Text>{user?.name}</Text>
                        </Text>
                        <Text style={{}} >
                            Email: {" "} <Text>{user?.email}</Text>
                        </Text>
                        <Text style={{}} >
                            Branch: {" "} <Text>{user?.branch}</Text>
                        </Text>
                        <Text style={{}} >
                            Phone number: {" "} <Text >{user?.phoneNumber}</Text>
                        </Text>
                    </ScrollView>
                </KeyboardAvoidingView>
                
                ) : (
                    
                <KeyboardAvoidingView  >
                    <ScrollView >
                        <Text  style={{}}>
                            Full Name: {" "} <Text>{user?.name}</Text>
                        </Text>     
                            <Text style={{}} >
                            Email: {" "} <Text>{user?.email}</Text>
                        </Text>
                        <Text style={{}} >
                            Phone number: {" "} <Text>{user?.phoneNumber}</Text>
                        </Text>
                    </ScrollView>
                    
                        
                </KeyboardAvoidingView>
             
                ) 
                }
            </View>

        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
     container: {
         backgroundColor: '#fff',
         alignItems: 'center',
         marginTop:5,
         flex: 1,
        // justifyContent: 'center',
    },
    subContainer: {
        padding:10,
        color:'white',
        backgroundColor:"#2c68ed",
        borderRadius:5,
        width:'90%',
        marginHorizontal:10,
        
    },
    textArea: {
        height:35,
        margin:6,
        padding:5,
  },
})
