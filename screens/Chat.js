import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const Chat = ({navigation, route}) => {
    return (
        <View>
            <Text>I'm chat With {route.params.name}</Text>
            <ScrollView>
                        <View key={route.params.id}>
                            <Text style={{fontWeight:'bold', marginLeft:15}} >{route.params.name} </Text>
                            
                        </View>
            </ScrollView>
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({})
