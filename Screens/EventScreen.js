import React, { Component } from 'react'
import {Text, ListItem, FlatList, StyleSheet, ScrollView, View} from 'react-native'
import AppText from '../components/AppText';
import Card from '../components/Card';



export default class EventScreen extends Component {
  render() {
    
    return (
      
      <ScrollView style={styles.ViewStyle}>
        <AppText style={styles.txtStyle}>Event Details</AppText>
        <View>
        <Card 
          title="Photography Training"
          subTitle="N20,000"
          image = {require("../assets/camera.png")}
        />
        <Card 
          title="Web Design Training"
          subTitle="N50,000"
          image = {require("../assets/webdesign.jpg")}
        />
        <Card 
          title="Soft Skill Training"
          subTitle="N30,000"
          image = {require("../assets/skill1.jpg")}
        />
        </View>       
        {/* <AppText>What is Today's Date</AppText> */}
        {/* <FlatList /> */}
      </ScrollView>

      
    )
  }
}

const styles = StyleSheet.create({
  ViewStyle:{
      flex:1,
      padding: 20,
      marginTop: 40,
  },
  txtStyle:{
      // borderBottomWidth: 2,
      borderBottomColor:'red',
      marginBottom: 50,
      width: "100%",
      fontSize: 18,
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