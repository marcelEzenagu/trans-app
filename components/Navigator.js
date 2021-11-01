import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const Navigator = ({error, message, navigation}) => {
    return (
        <View>
              {(!message && error) ?
                        <View>
                            <Text style={{ 
                                borderColor:'red',
                                borderWidth:1.5,
                                borderRadius:3,
                                padding: 10,
                                marginBottom:10,
                                backgroundColor:'white',
                                color:'red', 
                                fontWeight:'bold'}} > {error} 
                                </Text>
                    
                        </View>
                        : null
                    }
                    { (!error && message) ?
                        <View style={{
                                backgroundColor:'white', paddingBottom:10,
                                justifyContent:'center',alignItems:'center',borderRadius:10}}>
                            <Text style={{
                                backgroundColor:'white',
                                borderRadius:3,
                                padding: 10,
                                marginBottom:10,
                                color:'green', 
                                fontWeight:'bold'}} > {message} </Text>

                                <Pressable onPress={() => navigation.replace('Login')}>
                                    <Text style={{
                                backgroundColor:'green',padding:5,color:'white',borderRadius:10
                                }} >Sign In</Text>


                                </Pressable>
                    
                        </View>
                        : null
                    }
              </View>
    )
}

export default Navigator

const styles = StyleSheet.create({})
