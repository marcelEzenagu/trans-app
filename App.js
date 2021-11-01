import React,{useEffect} from 'react';
import { StyleSheet} from 'react-native';
import { Provider} from 'react-redux';
import RootNavigation from './navigation/RootNavigation';
import store from './redux/store/store';

export default function App() {
  

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
