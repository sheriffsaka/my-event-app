import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, StyleSheet, Text, TextInput, View, Image, Button} from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EventScreen from './Screens/EventScreen';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name = "HomeScreen" component = {HomeScreen} />
          <Stack.Screen name = "EventScreen" component = {EventScreen} />
          <Stack.Screen name = "LoginScreen" component = {LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        
        );  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    paddingTop: Platform.OS === "android" ? 20:0
  },
});

