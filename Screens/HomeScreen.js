import React, { Component, useState, createRef } from 'react';
import {ScrollView, View, Text, TextInput, StyleSheet, Button, 
  Image, Keyboard, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import AppText from '../components/AppText';

// const validationSchema = Yup.object.shape({
//   email:Yup.string().email('Please enter valid email address').required('Email is required').label('E-mail'),
//   password: Yup.string().matches(/\w*[a-z]\w*/,'Password must have small letters')
//   .matches(/\w*[A-Z]\w*/,'Password must have small letters')
//   .matches(/\d/, 'Passowrd must have m=number')
//   .min(8, ({min}) => `Password must be at least ${min} characters`)
//   .required('Password is required').label('Password')
// });



export default class HomeScreen extends Component {
    
  render() {  
    return (
      
      <Formik 
      // validationSchema = {validationSchema}
           initialValues={{email: '', password: '', telephone: '', eventtype: '' }}
           onSubmit={values => console.log(values)}
      >
        {({
           handleChange, handleBlur, handleSubmit, values, errors, touched,
       }) => (
        <>
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
        
        <TextInput 
            placeholder={"E-mail"}
            name = "email"
            placeholderTextColor={"#FF0000"}
            keyboardType="email-address"
            style={styles.txtStyle}
        />
        <Text style={{color: 'red'}}>{errors.email}</Text>
        <TextInput 
            placeholder={"Password"}
            name = "password"
            placeholderTextColor={"#FF0000"}
            secureTextEntry={true}
            style={styles.txtStyle}
        />
        <Text style={{color: 'red'}}>{errors.password}</Text>
        <TextInput 
            placeholder={"Telephone"}
            name = "telephone"
            placeholderTextColor={"#FF0000"}
            value = {values.telephone}
            style={styles.txtStyle}
        />
        <Text style={{color: 'red'}}>{errors.telephone}</Text>
        <TextInput 
            placeholder={"Event Type"}
            name = "eventtype"
            placeholderTextColor={"#FF0000"}
            style={styles.txtStyle}
        />
        <Text style={{color: 'red'}}>{errors.eventtype}</Text>

        <Button style={styles.registerButton}
        title={"Save Event"}  onPress ={handleSubmit}/>
        
        <View>
        <Text>Appmart Integrated Limited Event Registration</Text>
        </View>

        </KeyboardAvoidingView>
      </ScrollView>
          </>
       )}
      </Formik>
      
      
    )
  }
};


// const validationSchema = Yup.object.shape({
//   email:Yup.string().email('Please enter valid email address').required('Email is required').label('E-mail'),
//   password: Yup.string().matches(/\w*[a-z]\w*/,'Password must have small letters')
//   .matches(/\w*[A-Z]\w*/,'Password must have small letters')
//   .matches(/\d/, 'Passowrd must have m=number')
//   .min(8, ({min}) => `Password must be at least ${min} characters` )
//   .required('Password is required').label('Password')
// });

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