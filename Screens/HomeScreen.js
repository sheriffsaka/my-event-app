import React, { Component } from 'react';
import {View, Text, TextInput, StyleSheet, Button, Image} from 'react-native';
// import styles from './scanStyle';
// import { TextInput } from 'react-native-gesture-handler';
// import { TextInput } from 'react-native';


export default class HomeScreen extends Component {
  render() {
    return (
             
      <View style={styles.ViewStyle}>
        <Image style={{width: 100, height: 100, marginLeft: 50}}
              resizeMode='center'
              source = {require('../assets/event1.png')}
        />
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Event Registration Form</Text>
        <Text>Email</Text>
        <TextInput 
            placeholder={"E-mail"}
            placeholderTextColor={"#FF0000"}
            style={styles.txtStyle}
        />
        <Text>Event Session</Text>
        <TextInput 
            placeholder={"Event Session"}
            placeholderTextColor={"#FF0000"}
            style={styles.txtStyle}
        />
        <Text>Date of Registration</Text>
        <TextInput 
            placeholder={"Date Registered"}
            placeholderTextColor={"#FF0000"}
        />

        <Button style={styles.registerButton}
        title={"Save Event"}  onPress ={()=>
        alert("You have been regsitered successfully")}/>
      </View>
      
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
        borderBottomWidth: 1,
        borderBottomColor:'red',
        marginBottom: 50,
        width: "100%"
    },

    registerButton:{
      width: "100%",
      height: 70,

    },
    image:{
      width: "100%",
      height: "100%",
      alignContent:'center'
    }
});