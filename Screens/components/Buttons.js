import * as React from 'react';
import { Text, View, StyleSheet, Image, Button,TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
export default function AssetExample() {
  return (
    <View style={styles.container}>
      
      <Image style={styles.logo} source={require('../assets/Professor.png')} />

    <TouchableOpacity onPress={()=>alert("How are you?")} >
      <Image style={styles.logo} source={require('../assets/Pediatric-Books.png')} />
    </TouchableOpacity>
      
      <Image style={styles.logo} source={require('../assets/RecentUpdates.png')} />
      <Image style={styles.logo} source={require('../assets/Contacts.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:20,
    marginBottom:'20%',
  },
  paragraph: {
    marginTop: 30,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    width:200,
  },
  logo: {
    margin:10,
    height: 70,
    width: 250,
    borderRadius:20,
    padding:10,
  }
});
