import React from 'react'
import { StyleSheet } from 'react-native';


export default function ListItem({title, SubTitle, Image}) {
  return (
    <>
    <View>
        <Image style={StyleSheet.image} source={Image} />
    </View>
    <View>
        <AppText>{title}</AppText>
        <AppText>{SubTitle}</AppText>
    </View>
    </>
  )
}

const styles=StyleSheet.create({
    container:{
        flexDirection: "row",
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 50,
        marginRight: 10,
    }

})