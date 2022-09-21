import React from 'react';

function Index(props) {
    return (
        <View style={StyleSheet.ViewStyle}>
        <Text>Event Registration Form</Text>
        <TextInput 
            placeholder={"E-mail"}
            placeholderTextColor={"#FF0000"}
            style={StyleSheet.txtStyle}
        />
        <TextInput 
            placeholder={"Event Session"}
            placeholderTextColor={"#FF0000"}
            style={StyleSheet.txtStyle}
        />
        <TextInput 
            placeholder={"Date Registered"}
            placeholderTextColor={"#FF0000"}
        />
      </View>
    );
}

export default Index;

const style = StyleSheet.create({
    ViewStyle:{
        flex:1,
        padding: 20,
        marginTop: 10
    },
    txtStyle:{
        borderBottomWidth: 1,
        borderBottomColor:'red',
        marginBottom: 20
    }
});