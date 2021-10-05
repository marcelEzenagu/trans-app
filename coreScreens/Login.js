import React,{useState, useEffect, useLayoutEffect} from 'react'
import { KeyboardAvoidingView,TextInput, StyleSheet, View, Alert } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { StackActions,Link, NavigationContainer} from '@react-navigation/native'
import { authenticate, isAuthenticated } from '../helpers/authHelpers'
import { loginUser } from '../redux/auth/authSlice'
import { Button, Input ,Text} from 'react-native-elements'

const Login = ({navigation}) => {
    const[user, setUser] = useState({})
    const [values, setValues] = useState({
        phoneNumber:'',
        password:'',
        userName:false,
        loading:false    
    })

    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const trips = useSelector(state => state.tripList)

    useLayoutEffect(() => {
    navigation.setOptions({
        headerTitle: "Welcome to TransApp"
    
    })
    },[navigation])

    useLayoutEffect(() => {
         const jwt = isAuthenticated().then((value) => {

             if (value?.token ) {
                 navigation.replace('Main')
                } 
            }
            ) 

    }, [])


    let userDetails = {
       "phoneNumber": values.phoneNumber,
       "password": values.password
    }
    const handleLogin = (e) => {
        e.preventDefault();
        setValues({...values, loading: true})
        dispatch(loginUser(userDetails))
        
        .then((data) => {
            if (data.error){
                
        setValues({...values})
                setError(data.error.message)
            } else {
                setValues({...values})
                navigation.replace("Main")
                
            }
        })
        .catch(error => Alert.alert(error))
    }


    
    return (
            <KeyboardAvoidingView behavior="padding"  style={styles.container}>
                <View style={styles.subContainer}>
                    <Text h4 style={{color: '#fff',fontWeight:'400', fontSize:20, marginBottom:35}} >Log in to your account</Text>
                    <Text>
                    { error &&
                    <View>
                            <Text style={styles.error} > {error} </Text>
                    
                        </View>
                    }
                    </Text>
                        <Input
                            label = "Phone number"
                            inputStyle={styles.input}
                            labelStyle={styles.label}
                            placeholder="Enter your phoneNumber"
                            onChangeText={(text) => setValues({ ...values, phoneNumber:text})}
                            
                            value={values.phoneNumber}
                        />
                        <Input
                            label = "Password"
                            
                            inputStyle={styles.input}
                            labelStyle={styles.label}
                            placeholder="Enter password"
                            onChangeText={(text) => setValues({...values, password:text})}
                            value={values.password}
                        />
                        <Button title='Login'
                        onPress={handleLogin} 
                        color="white"
                         disabled={!values.phoneNumber || !values.password || values.loading} 
                        containerStyle={{marginTop:10, width:200,color:'blue', marginBottom:30}} 
                        />
                        
                            <Text style={{fontWeight: '600'}} >Are you New? {" "}
                                <Link to='/register'
                                    action={StackActions.replace('SignUp')}
                                    style={styles.link}>Create an account</Link>
                            </Text>
                     
                    </View>
                </KeyboardAvoidingView>
                
    )
}

export default Login

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        
        subContainer: {
            
            backgroundColor: '#2c68ed',
            alignItems: 'center',
            borderRadius:5,
            padding:20,
            width:'80%'
            // justifyContent: 'center',
        },
        link: {
            color: 'white',
            paddingLeft: 5
        },
          text:{
              fontWeight:'bold',
              padding:2.5
            },
            input: {width:'100%',color:'white'},
            label:{color:'white'},
            error: {
                fontWeight:'bold',
                color:'red',
                borderColor:'red',
                borderWidth:1.5,
                backgroundColor:'white',
                borderRadius:3,
                padding: 10,
                marginBottom:10

            }

})
