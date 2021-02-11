import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Image,TouchableOpacity } from 'react-native';

// import Card from "./components/Card"
class SecondActivity extends React.Component {
  static navigationOptions = {

    title: 'Book Details',
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
      <View style={styles.container}>
       <Image style={styles.logo} source={require("./assets/Bookimage.png")} />
       <Text style={styles.title}>
           Current Pediatric Protocol
        </Text>
      <Text style={styles.text}>
           Author Nmae
        </Text>
        <Image style={styles.grid} source={require("./assets/Grid.png")} />
        <TouchableOpacity
             onPress={() => this.props.navigation.navigate('Second')}>
          <Image
            style={styles.button}
            source={require('./assets/BuyNow.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#733EB7',
    flexDirection:"column",
    height:"100%"
  },
  logo:{
    height:"40%",
    width:"50%",
    position:"absolute",
    marginTop:"10%",
    resizeMode: 'contain',
  },
  title:{
    fontSize:"150%",
    fontWeight:'bold',
    color:"#000",
    position:"absolute",
    marginTop:"78%"
  },
  text:{
    fontSize:"80%",
    fontWeight:'bold',
    color:"#000",
    position:"absolute",
    marginTop:"90%"
  },
  grid:{
    height:"40%",
    width:"80%",
    position:"absolute",
    marginTop:"100%",
    resizeMode: 'contain',
  },
  button:{
    backgroundColor:"#32EF25",
    width:190,
    height:50,
    marginTop:"300%",
  }

});
export default SecondActivity;