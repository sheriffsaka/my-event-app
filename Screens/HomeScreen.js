import React, { Component, useState, createRef } from 'react';
import {ScrollView, View, Text, TextInput, StyleSheet, Button, Image, Keyboard, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import AppText from '../components/AppText';
// import styles from './scanStyle';
// import { TextInput } from 'react-native-gesture-handler';
// import { TextInput } from 'react-native';



export default class HomeScreen extends Component {
  
  render() {
    return (
             
      <ScrollView style={styles.ViewStyle}>
        <KeyboardAvoidingView>
        <Button
            title="Already Registered Login Here"
            // onPress={() => this.props.navigation.navigate('EventScreen')}
            onPress={() => this.props.navigation.navigate('LoginScreen')}
            style={{marginBottom: 10, padding: 20,}}
        />
        <Image style={{width: 100, height: 100, marginLeft: 90, marginBottom: 10, marginTop: 10}}
              resizeMode='center'
              source = {require('../assets/event1.png')}
        />
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Event Registration Form</Text>
        <AppText>Email</AppText>
        <TextInput 
            placeholder={"E-mail"}
            placeholderTextColor={"#FF0000"}
            keyboardType="email-address"
            style={styles.txtStyle}
        />
        <TextInput 
            placeholder={"Password"}
            placeholderTextColor={"#FF0000"}
            style={styles.txtStyle}
        />
        <TextInput 
            placeholder={"Telephone"}
            placeholderTextColor={"#FF0000"}
            style={styles.txtStyle}
        />
        <TextInput 
            placeholder={"Event Type"}
            placeholderTextColor={"#FF0000"}
            style={styles.txtStyle}
        />

        <Button style={styles.registerButton}
        title={"Save Event"}  onPress ={()=>
        alert("You have been regsitered successfully")}/>
        <View>
        <Text>SacTech Computers</Text>
        </View>

        </KeyboardAvoidingView>
      </ScrollView>
      
      
    )
  }
};

const styles = StyleSheet.create({
    ViewStyle:{
        flex:1,
        padding: 20,
        marginTop: 40
    },
    txtStyle:{
        borderBottomWidth: 2,
        borderBottomColor:'red',
        marginBottom: 20,
        width: "100%"
    },

    registerButton:{
      width: "100%",
      height: 70,

    },
    space:{
      marginBottom: 20,
    },
    image:{
      width: "100%",
      height: "100%",
      justifyContent: 'center'
    }
});