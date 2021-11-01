import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { getMyHandledTickets } from '../../helpers/apicalls'
import socket from '../../helpers/socket'

const Tickets = () => {
    const [tickets, setTickets] = useState([])
    
    const user = useSelector(state => state.user);
    let {userProfile} = user

    console.log("userProfile", userProfile._id)

    useEffect(() => {
        
        getMyHandledTickets({"adminId":userProfile._id})
            .then(item=> {
                console.log("item.data", item.data)
                setTickets(item.data.tickets)
            })


    },[])
    return (
        <View style={{justifyContent:'center',alignItems:'center', flex:1}}>
            {tickets.length ?
            <ScrollView>

                {tickets.map((item, i) => 
                    <View key={i} style={{paddingVertical:10}} >
                        <Text>{item.title}</Text>

                    </View>
                )}
            </ScrollView>
            :
            <View>
                <Text>You have no Tickets yet.</Text>
            </View>
                }
        </View>
    )
}

export default Tickets

const styles = StyleSheet.create({})
