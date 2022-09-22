import AppText from "./AppText";

import React from 'react'
import { View, StyleSheet, Text, Image} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Card({title, subTitle, image}) {
  return (
    <View style={styles.card}>
        <Image source={image} />
        <AppText>{title}</AppText>
        <Text style={styles.stitle}>{subTitle} </Text>
    </View>
  )
}


const styles = StyleSheet.create({
    card:{
        borderRadius: 15,
        backgroundColor: Colors.white,
        marginBottom: 20,
        // overflow: "hidden",
    },
    stitle:{
      color: '#0000FF',
      fontWeight: 'bold',
      fontSize: 18,
      marginVertical: 10,
    },
    
})