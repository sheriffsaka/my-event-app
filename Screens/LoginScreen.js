import React, { Component } from 'react'
import {ScrollView, View, AppText, Text, TextInput, StyleSheet, Button, Image, Keyboard, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default class LoginScreen extends Component {

  constructor(props){
    super(props);
    this.state={email: '', upassword: ''}
  }
  
  GetRecord = () =>{
    var email = this.state.email;
    var upassword = this.state.upassword;
  
    if(email.length == 0 || upassword.length == 0 )
    {
      alert("Required field is missing");
    }else{
      //alert("Success - Fetching the API code here.");
      // var InsertAPIURL = "http://192.168.43.226:80/appmartproject/appmarttask/my-event-app/backend/addevent.php";
      var InsertAPIURL = "http://localhost:80/appmartproject/appmarttask/my-event-app/backend/addevent.php";
      var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      };

      var Data = {
        email : email,
        upassword : upassword
      };

      fetch(InsertAPIURL,{
          method: 'POST',
            headers: headers,
            body: JSON.stringify(Data)

      })
      .then((response) => response.json())
      .then(response=>{
        alert(response[0].Message);
      })
      .catch((error) =>{
        alert("Error " + error);
      })
    }
  }

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
            onChangeText={email=>this.setState({email})}
        />
        <TextInput 
            placeholder={"Password"}
            placeholderTextColor={"#FF0000"}
            secureTextEntry={true}
            style={styles.txtStyle}
            onChangeText={upassword=>this.setState({upassword})}
        />
        
        <Button style={styles.registerButton}
        title={"Log In"}  onPress ={this.GetRecord}/>

        {/* <Image style={styles.image} source={require('../assets/qr-code.png')} /> */}
        <View style={{justifyContent: 'center', marginLeft: 90, marginTop:30, width: 150, height: 150}}>
          <QRCode style={styles.image} value ='https://appmart.ng/' />
        </View>

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