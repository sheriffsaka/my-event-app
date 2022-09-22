import React from 'react'
import { StyleSheet, View, Text, Platform } from 'react-native';

export default function AppText({children}) {
  return (
    <View>
        <Text style={styles.textStyle}>{children}</Text>
    </View>
  );
}

const styles=StyleSheet.create({
    textStyle:{
        fontSize: 20,
        fontFamily: Platform.OS === "Android" ? "Roboto" : "monospace",
        fontWeight: 'bold',

    }

})
