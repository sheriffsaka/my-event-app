import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../Screens/HomeScreen";

const Stack = createNativeStackNavigator();

function MyStack(){
    return(
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="EventScreen" component={EventScreen} />
        </Stack.Navigator>
    );
}