import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button,TouchableOpacity, Image ,SafeAreaView, ImageBackground} from 'react-native';
const image = { source:"./assets/Path.png" };
class HomeActivity extends React.Component {
  static navigationOptions = {
    title: 'Pediatric Books',
    headerStyle: {
      backgroundColor: '#B31177',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize:"160%",
      width:"100%",
      
    },
  };
  render() {
    return (
      <ImageBackground source={image} style={styles.image}>
      <SafeAreaView style={styles.container }>
        
        <Image style={styles.logo} source={require('./assets/Professor.png')} />

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('First')}>
          <Image
            style={styles.logo}
            source={require('./assets/Pediatric-Books.png')}
          />
        </TouchableOpacity>

        <Image
          style={styles.logo}
          source={require('./assets/RecentUpdates.png')}
        />
        <Image style={styles.logo} source={require('./assets/Contacts.png')} />
      </SafeAreaView>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#7C4AC2"
  },
  paragraph: {
    marginBottom:"25%",
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    width:"100%",
  },
  logo: {
    margin:15,
    height: 70,
    width: 250,
    borderRadius:20,
    padding:10,
  },
   image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
export default HomeActivity;
