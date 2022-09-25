import React, { Component, useState, createRef } from 'react';
import {ScrollView, View, Text, TextInput, StyleSheet, Button, 
  Image, Keyboard, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
import AppText from '../components/AppText';



export default class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state={email: '', password: '', telephone: '', eventtype: ''}
  }
  
  InsertRecord = () =>{
    var email = this.state.email;
    var password = this.state.password;
    var telephone = this.state.telephone;
    var eventtype = this.state.eventtype;

    if(email.length == 0 || password.length == 0 || telephone.length == 0 || eventtype.length == 0)
    {
      alert("Required field is missing");
    }else{
      alert("Success - Fetching the API code here.");
    }
  }
  render() {  
    return (
      
      
      <ScrollView style={styles.ViewStyle}>
        <KeyboardAvoidingView>
        <Button
            title="Already Registered Login Here"
            onPress={() => this.props.navigation.navigate('LoginScreen')}
            style={{marginBottom: 10, padding: 20,}}
        />
        <Image style={{width: 100, height: 100, marginLeft: 90, marginBottom: 10, marginTop: 10}}
              resizeMode='center'
              source = {require('../assets/event1.png')}
        />
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Event Registration Form</Text>
        
        <TextInput 
            placeholder={"E-mail"}
            name = "email"
            placeholderTextColor={"#FF0000"}
            keyboardType="email-address"
            style={styles.txtStyle}
            onChange={email=>this.setState({email})}
        />
        <TextInput 
            placeholder={"Password"}
            name = "password"
            placeholderTextColor={"#FF0000"}
            secureTextEntry={true}
            style={styles.txtStyle}
            onChange={password=>this.setState({password})}
        />
      
        <TextInput 
            placeholder={"Telephone"}
            name = "telephone"
            placeholderTextColor={"#FF0000"}
            style={styles.txtStyle}
            onChange={telephone=>this.setState({telephone})}
        />
      
        <TextInput 
            placeholder={"Event Type"}
            name = "eventtype"
            placeholderTextColor={"#FF0000"}
            style={styles.txtStyle}
            onChange={eventtype=>this.setState({eventtype})}
        />
        
        <Button style={styles.registerButton}
        title={"Save Event"}  onPress ={this.InsertRecord}/>
        
        <View>
        <Text>Appmart Integrated Limited Event Registration</Text>
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