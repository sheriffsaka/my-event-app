import React, { Component } from 'react'
import {ScrollView, View, AppText, Text, TextInput, StyleSheet, Button, Image, Keyboard, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

export default class LoginScreen extends Component {
  render() {
    return (
        <View style={styles.ViewStyle}>
        <Button
            title="Go to Event List page"
            onPress={() => this.props.navigation.navigate('EventScreen')}
            style={{marginBottom: 10, padding: 20,}}
        />
        <Image style={{width: 100, height: 100, marginLeft: 90, marginBottom: 10, marginTop: 10}}
              resizeMode='center'
              source = {require('../assets/event1.png')}
        />
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Login Here</Text>
           <TextInput 
            placeholder={"E-mail"}
            placeholderTextColor={"#FF0000"}
            style={styles.txtStyle}
        />
        <TextInput 
            placeholder={"Password"}
            placeholderTextColor={"#FF0000"}
            style={styles.txtStyle}
        />
        
        <Button style={styles.registerButton}
        title={"Log In"}  onPress ={()=>
        alert("You have been successfully")}/>

        <Image style={styles.image} source={require('../assets/qr-code.png')} />
        <Text style={{textAlign: 'center'}}>Scan the QR image above to attend Event</Text>
      </View>
    )
  }
}

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
      marginTop: 20,
      marginLeft: 40,
      justifyContent: 'center'
    }
});