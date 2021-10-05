import React, { useState } from 'react'
import { KeyboardAvoidingView, ScrollView, StyleSheet, View } from 'react-native'
import { Input, Text, Image, Button } from 'react-native-elements'

const EditProfile = ({route, navigation}) => {
    const user = route.params.user
      
    const [values, setValues] = useState({
            fullName:   user.name,
            email:  user.email,
            phoneNumber:    user.phoneNumber,
            branch: user.branch,
            password:"",

            rePassword:"",
            error: '',
            open: false
        })

    return (
      <ScrollView contentContainerStyle={styles.container} >
    
            <Text h4 >{user?.name}'s profile</Text>
            
        {(user?.isAdmin) ?
        (
            <KeyboardAvoidingView style={{width:'80%',}}  >
    
                <Input                                 
                    label="Full name"
                    placeholder="Enter your full name"
                    onChangeText={(text) => setValues({...values, fullName:text})}
                        
                    value={values.fullName}
                />
                <Input                            
                    label="Email"                                
                    placeholder="Enter your email"
                    onChangeText={(text) => setValues({...values, email:text})}
                    value={values.email}
                />
                <Input                           
                    label="Phone Number"                                
                    placeholder="Enter your Phone Number"
                    onChangeText={(text) => setValues({...values, phoneNumber:text})}
                    value={values.phoneNumber}
                />
                <Input
                    label="Branch"                                
                    placeholder="Enter your branch"
                    onChangeText={(text) => setValues({...values, branch:text})}
                    value={values.branch}
                />
                
                
            
                </KeyboardAvoidingView>
            
        ) : (
            
            <KeyboardAvoidingView style={styles.subContainer}  >
                
                    
                
                <Input                         
                    label="Full name"
                    placeholder="Enter your full name"
                    onChangeText={(text) => setValues({...values, fullName:text})}
                        
                    value={values.fullName}
                />
                <Input
                    label="Phone Number"
                    placeholder="Enter your Phone Number"
                    onChangeText={(text) => setValues({...values, phoneNumber:text})}
                    value={values.phoneNumber}
                />
                <Input
                    label="Email"
                    placeholder="Enter your email"
                    onChangeText={(text) => setValues({...values, email:text})}
                    
                    value={values.email}
                />
                    
                    
                <Button title='Save'
                    
                    disabled={!values.email} 
                    containerStyle={{marginTop:10, width:200,}} 
                />
                    
            </KeyboardAvoidingView>
            
            ) 
            }
        </ScrollView>
    )
}

export default EditProfile

const styles = StyleSheet.create({
      container: {
        
        marginTop:5,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
       
        justifyContent: 'space-evenly',
    },
    subContainer: {
        padding:10,
        color:'white',
        backgroundColor: '#2c68ed',
        alignItems: 'center',
        borderRadius:5,
        width:'80%',
        // justifyContent: 'center',
        
    },
   
})