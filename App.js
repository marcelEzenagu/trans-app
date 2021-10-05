
import React,{useEffect} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { Provider} from 'react-redux';
// import socket from './helpers/socket';
import RootNavigation from './navigation/RootNavigation';

import store from './redux/store/store';



export default function App() {
  
    // useEffect(()=> {
    //     socket.connect();
    //         socket.on("connect_error", (err) => {
    //             if (err.message === "invalid name"){
    //             }
    //         })

    //       function destroyed() {
    //         socket.off("connect_error")
    //         }
    // }, [])


  return (
      <Provider store={store}>
            <RootNavigation style={styles.container} />
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width:'100%',
    marginTop:30,
    justifyContent: 'center',
  },
});
