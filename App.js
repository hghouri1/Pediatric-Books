import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import WelcomeActivity from './Screens/Welcome-Page.js';
import FirstActivity from './Screens/First-Page.js';
import SecondActivity from "./Screens/Second-Page.js"
const RootStack = createStackNavigator(
{
  Home: { screen: WelcomeActivity },
  First: { screen:  FirstActivity},
  Second: { screen:  SecondActivity},
},
{
    initialRouteName: 'Home',
}

);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}