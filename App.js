import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, StyleSheet, Text, TextInput, View, Image, Button} from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EventScreen from './Screens/EventScreen';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name = "HomeScreen" component = {HomeScreen} />
          <Stack.Screen name = "EventScreen" component = {EventScreen} />
          <Stack.Screen name = "LoginScreen" component = {LoginScreen} />
          
          {/* <Stack.Screen name = "EventScreen" component = {EventScreen} /> */}
            
            
          </Stack.Navigator>
        </NavigationContainer>
        
        );  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    paddingTop: Platform.OS === "android" ? 20:0
  },
});


// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    
//       <Text title="Go to Event Page..."
//           onPress={()=> navigation.navigate('EventScreen')}
//         >Go to Event Page</Text>
//       <View style={styles.ViewStyle}>
//         <Image style={{width: 100, height: 100, marginLeft: 50}}
//               resizeMode='center'
//               source = {require('./assets/event1.png')}
//         />
//           <Text style={{fontSize: 20, fontWeight: 'bold'}}>Event Registration Form</Text>
//         <Text>Email</Text>
//         <TextInput 
//             placeholder={"E-mail"}
//             placeholderTextColor={"#FF0000"}
//             style={styles.txtStyle}
//         />
//         <Text>Event Session</Text>
//         <TextInput 
//             placeholder={"Event Session"}
//             placeholderTextColor={"#FF0000"}
//             style={styles.txtStyle}
//         />
//         <Text>Date of Registration</Text>
//         <TextInput 
//             placeholder={"Date Registered"}
//             placeholderTextColor={"#FF0000"}
//         />
//         <Button style={styles.registerButton}
//         title={"Save Event"}  onPress ={()=>
//         alert("You have been regsitered successfully")}/>

        
//       </View>
      
//     </View>
//   );
// };

// function EventScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Event List / Programmes</Text>
//     </View>
//   );
// };