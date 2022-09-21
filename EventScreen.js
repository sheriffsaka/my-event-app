// import React from 'react'
import {Text, Image, ListItem, FlatList, View} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const messages = [
  {
    id: 1,
    title: 'Website Development',
    description: 'HTML, CSS, JavaScript, PHP, MySQL etc',
    image: require('../my-event-app/assets/200/200')
  },
  {
    id: 2,
    title: 'Software Development',
    description: 'App, Desktop App Bootcamp, JavaScript Bootcamp, UI/UX etc',
    image: require('../my-event-app/assets/200/200')
  },
  {
    id: 3,
    title: 'Softskill Development',
    description: 'Time Management, Personality Trait, Communication Skill Classes',
    image: require('../my-event-app/assets/200/200')
  },
]

function MessageScreen(){
  return(
    <View>
      <FlatList 
        data={messages}
        keyExtractor={messages => messages.id.toString()}
        renderItem={(item) =>
          <ListItem 
            title = {item.title}
            subtitle={item.description}
            image = {item.image}
          />
        } 
      />
    </View>
  );
}
export default function EventScreen({ navigation }) {
  return (
    <View>
        <Text>My Events</Text>

        <View>

            <ListItem />
        </View>
    

    </View>
  )
}


const styles = StyleSheet.create({
  separator:{
    width:"100%",
    height: 1,
    backgroundColor: Colors.light,
  },
});