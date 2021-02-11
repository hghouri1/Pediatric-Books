import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Text,Image ,Button , TouchableOpacity} from 'react-native';

//import Card
import { Card } from 'react-native-elements';

// import Card from "./components/Card"

class ProfileActivity extends React.Component {
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
     <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Card style={styles.container}>
          {}
          <View>
          <Image style={styles.logo} source={require("./assets/Bookimage.png")} />
          <View>
          <Text style={styles.title}>
           Current Pediatric Tool
          </Text>
          <Text style={styles.text}>
           Author Nmae
          </Text>
          <Text style={styles.text}>
           Author Name
          </Text>
          </View>
          <TouchableOpacity
             onPress={() => this.props.navigation.navigate('Second')}>
          <Image
            style={styles.button}
            source={require('./assets/ViewButton.png')}
          />
        </TouchableOpacity>
          </View>
        </Card>
      </View>
      <View style={styles.container}>
        <Card style={styles.container}>
          {}
          <View>
          <Image style={styles.logo} source={require("./assets/Bookimage2.png")} />
          <View>
          <Text style={styles.title}>
           Beside Pediatrics
          </Text>
          <Text style={styles.text}>
           Author Name
          </Text>
          <Text style={styles.text}>
           Author Name
          </Text>
          </View>
          
          <Image
            style={styles.button}
            source={require('./assets/ViewButton.png')}
          />
        
          </View>
        </Card>
      </View>
      <View style={styles.container}>
        <Card style={styles.container}>
          {}
          <View>
          <Image style={styles.logo} source={require("./assets/Bookimage.png")} />
          <View>
          <Text style={styles.title}>
           Current Pediatric Tool
          </Text>
          <Text style={styles.text}>
           Author Nmae
          </Text>
          <Text style={styles.text}>
           Author Name
          </Text>
          </View>
          <TouchableOpacity
             onPress={() => this.props.navigation.navigate('Second')}>
          <Image
            style={styles.button}
            source={require('./assets/ViewButton.png')}
          />
        </TouchableOpacity>
          </View>
        </Card>
      </View>
      <View style={styles.container}>
        <Card style={styles.container}>
          {}
          <View>
          <Image style={styles.logo} source={require("./assets/Bookimage2.png")} />
          <View>
          <Text style={styles.title}>
           Beside Pediatrics
          </Text>
          <Text style={styles.text}>
           Author Name
          </Text>
          <Text style={styles.text}>
           Author Name
          </Text>
          </View>
         <Image
            style={styles.button}
            source={require('./assets/ViewButton.png')}
          />
        
          </View>
        </Card>
      </View>
    </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"column",
    backgroundColor:"#7C4AC2",
    
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
    marginLeft:60,
  },
  text: {
    
    fontSize: 10,
    textAlign: 'center',
    color: '#34495e',
    
  },
  logo:{
    width:50,
    height:50,
    position:"absolute"
  },
  button:{
    width:45,
    height:45,
    resizeMode: 'contain',
    marginLeft:200,
    marginTop:-30
  }
  
});
export default ProfileActivity;
