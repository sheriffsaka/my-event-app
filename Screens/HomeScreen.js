import React, { Component, useState, createRef } from 'react';
import {ScrollView, View, Text, TextInput, StyleSheet, Button, 
  Image, Keyboard, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
import AppText from '../components/AppText';



export default class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state={email: '', upassword: '', telephone: '', eventtype: ''}
  }
  
  InsertRecord = () =>{
    var email = this.state.email;
    var upassword = this.state.upassword;
    var telephone = this.state.telephone;
    var eventtype = this.state.eventtype;

    if(email.length == 0 || upassword.length == 0 || telephone.length == 0 || eventtype.length == 0)
    {
      alert("Required field is missing");
    }else{
      //alert("Success - Fetching the API code here.");
      // var InsertAPIURL = ("http://192.168.43.226:80/appmartproject/appmarttask/my-event-app/backend/addevent.php");
      var InsertAPIURL = ("http://192.168.43.226:80/appmartproject/appmarttask/my-event-app/backend/addevent.php");
      var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      };

      var Data = {
        email : email,
        upassword : upassword,
        telephone : telephone,
        eventtype : eventtype
      };

      fetch(InsertAPIURL,{
            method: 'POST',
            headers: headers,
            body: JSON.stringify(Data)

      })
      .then((response) => response.json())
      .then(response=>{
        alert(response[0].Message);
        this.props.navigation.navigate("LoginScreen");
      })
      .catch((error) =>{
        alert("Error" + error);
      })
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
            onChangeText={email=>this.setState({email})}
        />
        <TextInput 
            placeholder={"Password"}
            name = "upassword"
            placeholderTextColor={"#FF0000"}
            secureTextEntry={true}
            style={styles.txtStyle}
            onChangeText={upassword=>this.setState({upassword})}
        />
      
        <TextInput 
            placeholder={"Telephone"}
            name = "telephone"
            placeholderTextColor={"#FF0000"}
            style={styles.txtStyle}
            onChangeText={telephone=>this.setState({telephone})}
        />
      
        <TextInput 
            placeholder={"Event Type"}
            name = "eventtype"
            placeholderTextColor={"#FF0000"}
            style={styles.txtStyle}
            onChangeText={eventtype=>this.setState({eventtype})}
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