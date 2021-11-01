
import React , {useLayoutEffect, useState}  from 'react'
import { StyleSheet,KeyboardAvoidingView,TextInput,  View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { StackActions,Link} from '@react-navigation/native'
import { create } from '../helpers/apicalls';
import { Button, Input ,Text} from 'react-native-elements'
import Navigator from '../components/Navigator';


const SignUpScreen = ({navigation}) => {
        const [values, setValues] = useState({
            name:'',
            phoneNumber:'',
            password:'',
            rePassword:'',
            error: '',
            message:'',
            open: false,
            loading:false
        })

        const handleChange = (name) => (text) => {
            setValues({...values, [name]:(text)})
        }

     useLayoutEffect(() => {
    navigation.setOptions({
        headerTitle: "Welcome to TransApp"
    
    })
    },[navigation])

        const handleSignUp = (e) => {
            e.preventDefault()
            setValues({...values, loading: true})
            if (values.password !== values.rePassword){

           Alert.alert("The passwords don't match")
            }else {
                
            const {name,password,phoneNumber} = {...values}
            const user = {name,password,phoneNumber}
                setValues({...values, loading:true})
              create(user).then(result => {
                    console.log(result, "from signUp")
                    if(result.data.error) {
                    setValues({...values,loading: false, error: result.data.error})
                } else {
                    setValues({...values,loading: false, error: '',message:result.data.message })
                }
            })
        }
        }


        
    const scrollBehavior = Platform.OS === "ios" ? "padding" : "height"
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView onSubmitEditing={handleSignUp} behavior={scrollBehavior}
                
                style={{width:'80%', padding:20,borderRadius:5, backgroundColor:'#2c68ed'}}
            >
            {/* <TouchableWithoutFeedback > */}
                <Text h4 style={{color: '#fff',fontWeight:'400',textAlign:'center', fontSize:20, marginBottom:35}} > Create Your Account </Text>
               
                {(values.error || values.message) ? 
                <Navigator 
                    error={values.error} 
                    message = {values.message}
                    navigation={navigation}
                     />  : null}
                <Input labelStyle={styles.label} label='Full Name' 
                    style={styles.textArea} value={values.name} 
                    onChangeText={(text) => setValues({...values, name:text})} placeholder="FullName"  />
                <Input labelStyle={styles.label} label='Phone Number' 
                    style={styles.textArea} value={values.phoneNumber} 
                    onChangeText={(text) => setValues({...values, phoneNumber:text})} placeholder="Phone Number"  />
                <Input labelStyle={styles.label} label='Password' 
                    style={styles.textArea} value={values.password} onSubmitEditing={() => navigation.navigate('Login')} onChangeText={(text) => setValues({...values, password:text})}
                    placeholder="Use atleast a 7 characters" secureTextEntry={true} />
                <Input labelStyle={styles.label} label='Repeat-Password' 
                    style={styles.textArea} value={values.rePassword} 
                    onChangeText={(text) => setValues({...values, rePassword:text})} 
                    placeholder="Enter Password again"  />
                
                <Button 
                    color="green"  
                    style={{width:100, alignSelf:'center'}}
                    title={values.loading ? "Loading..." : 'Sign Up' } 
                    onPress={handleSignUp}
                    disabled={!values.rePassword || values.loading || values.message} 
                />
                
                  
                <View>
                    <Text h5>Already have an account ? 
                        <Link 
                            to='/login'
                            action={StackActions.replace('Login')}
                            style={styles.link} 
                            > Sign In
                        </Link>
                    </Text>
                </View>
             {/* </TouchableWithoutFeedback> */}
             </KeyboardAvoidingView>

        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({ container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center'
        },
        textArea: {
      width:300,
      padding:10

    },
            input: {width:300,color:'white'},
            label:{color:'white'},
        link: {
            color: 'white',
            paddingLeft: 5
        },
          text:{
              fontWeight:'bold',
              padding:2.5
            },

})
