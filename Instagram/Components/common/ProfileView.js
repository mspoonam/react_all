
//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';


// create a component
class ProfileView extends Component {
    render() {
        return (
            <View style={{paddingHorizontal: 10 , paddingVertical:10}}>
                <Text style ={{fontWeight:'bold'}}>Poonam and Priyanka</Text>
                <Text>Android iOS React RestApi</Text> 
                <Text>www.google.com</Text>
            </View>
        );
    }
}

//make this component available to the app
export default ProfileView;


