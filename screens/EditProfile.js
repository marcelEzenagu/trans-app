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

        
    const scrollBehavior = Platform.OS === "ios" ? "padding" : "height"
    return (
      <ScrollView contentContainerStyle={styles.container} >
        <Text h4 style={{color:'white',marginTop:10,}} >{user?.name}'s profile</Text>
        {(user?.isAdmin) ?
        (
            <KeyboardAvoidingView style={{width:'80%',}} behavior={scrollBehavior}  >
    
                <Input
                    placeholderTextColor = {"black"}
                    inputStyle={styles.input}
                    labelStyle={styles.label}                                 
                    label="Full name"
                    placeholder="Enter your full name"
                    onChangeText={(text) => setValues({...values, fullName:text})}
                    value={values.fullName}
                />
                <Input
                    placeholderTextColor = {"black"}
                    inputStyle={styles.input}
                    labelStyle={styles.label}                            
                    label="Email"                                
                    placeholder="Enter your email"
                    onChangeText={(text) => setValues({...values, email:text})}
                    value={values.email}
                />
                <Input
                    placeholderTextColor = {"black"}
                    inputStyle={styles.input}
                    labelStyle={styles.label}                           
                    label="Phone Number"                                
                    placeholder="Enter your Phone Number"
                    onChangeText={(text) => setValues({...values, phoneNumber:text})}
                    value={values.phoneNumber}
                />
                <Input
                    placeholderTextColor = {"black"}
                    inputStyle={styles.input}
                    labelStyle={styles.label}
                    label="Branch"                                
                    placeholder="Enter your branch"
                    onChangeText={(text) => setValues({...values, branch:text})}
                    value={values.branch}
                />
            </KeyboardAvoidingView>
            
        ) : (
            
            <KeyboardAvoidingView style={styles.subContainer}  >
                <Input
                    placeholderTextColor = {"black"}         
                    inputStyle={styles.input}
                    labelStyle={styles.label}                         
                    label="Full name"
                    placeholder="Enter your full name"
                    onChangeText={(text) => setValues({...values, fullName:text})} 
                    value={values.fullName}
                />
                <Input
                    placeholderTextColor = {"black"}
                    inputStyle={styles.input}
                    labelStyle={styles.label}
                    label="Phone Number"
                    placeholder="Enter your Phone Number"
                    onChangeText={(text) => setValues({...values, phoneNumber:text})}
                    value={values.phoneNumber}
                />
                <Input
                    placeholderTextColor = {"black"}
                    inputStyle={styles.input}
                    labelStyle={styles.label}
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
        backgroundColor: '#2c68ed',
        // backgroundColor: '#fff',
        alignItems: 'center',
        marginHorizontal:5,
        borderRadius:5,
       
        // justifyContent: 'center',
    },
    subContainer: {
        padding:10,
        color:'white',
        alignItems: 'center',
        borderRadius:5,
        width:'90%',
        // justifyContent: 'center',
        
    },
    input: {width:'100%',color:'white'},
    label:{color:'white',width:'100%'},
   
})