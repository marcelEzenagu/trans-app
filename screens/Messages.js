import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import UserListItem from '../components/UserListItem'

const Messages = ({navigation}) => {

    const data = [
        {_id:1, name:'Rishaa'},
        {_id:2, name:'Rahab'},
        {_id:3, name:'Ruth'},
        
    ]
  const  enterChat = (_id, name) => {
      navigation.push("Chat", {_id, name})

    }
    return (
        <View>
            <Text style={{fontWeight:'bold', marginLeft:15}}>Messages</Text>
            <ScrollView>
                {data.map(({_id, name}) => (
                <TouchableOpacity key={_id}>
                    <UserListItem name={name} id={_id} enterChat={enterChat}  />
                </TouchableOpacity>

                ))}
            </ScrollView>
            
        </View>
    )
}

export default Messages

const styles = StyleSheet.create({})
