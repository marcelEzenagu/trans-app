
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

                
                <View style={{flexDirection:'row',width:'80%', justifyContent:'space-between', alignItems:'center', marginTop:20,}}>
                    {/* <Image alt={user?.name} /> */}
                    <Text style={{fontSize:18, color:'#2c68ed'}} >{user?.name}'s profile</Text>
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
                <View> 
                
                <KeyboardAvoidingView  style={styles.subContainer}>
                    <ScrollView>
                        <Text style={{color:'#2c68ed'}} >
                            Full Name: {" "} <Text>{user?.name}</Text>
                        </Text>
                        <Text style={{color:'#2c68ed'}} >
                            Email: {" "} <Text>{user?.email}</Text>
                        </Text>
                        <Text style={{color:'#2c68ed'}} >
                            Branch: {" "} <Text>{user?.branch}</Text>
                        </Text>
                        
                        <Text style={{color:'#2c68ed'}} >
                            Phone number: {" "} <Text >{user?.phoneNumber}</Text>
                        </Text>
                            
                        
                    </ScrollView>
                        
                    </KeyboardAvoidingView>
                </View>
                ) : (
                <View>
                    
                    <KeyboardAvoidingView  >
                        <ScrollView >
                        
                        
                        <Text  style={{color:'#2c68ed'}}>
                            Full Name: {" "} <Text>{user?.name}</Text>
                        </Text>     
                            <Text style={{color:'#2c68ed'}} >
                            Email: {" "} <Text>{user?.email}</Text>
                        </Text>
                        <Text style={{color:'#2c68ed'}} >
                            Phone number: {" "} <Text>{user?.phoneNumber}</Text>
                        </Text>
                    </ScrollView>
                    
                        
                    </KeyboardAvoidingView>
                </View>
                ) 
                }
            </View>

        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        
        flex: 1,       
        alignItems: 'center',
       
        marginTop:10,
        justifyContent: 'space-evenly',
    },
    
    
    subContainer: {
        padding: 20,
        backgroundColor: 'white',
        // alignItems: 'center'
        color:'white',
        borderRadius:5,
        width:'80%',

        flex:1
    },
    textArea: {
    height:35,
    margin:6,
    padding:5,
  },
})
