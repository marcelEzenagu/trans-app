import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem } from 'react-native-elements'

const UserListItem = ({name, id, enterChat }) => {
    return (
             <ListItem key={id} onPress={()=> enterChat(id,name)} >
                <ListItem.Content>
                    <ListItem.Title>
                    </ListItem.Title>
                    <ListItem.Subtitle>

                        {name}
                        </ListItem.Subtitle>
                    
                        <ListItem.Subtitle>
                            {Date.now()}
                        </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
     
    )
}

export default UserListItem

const styles = StyleSheet.create({})
