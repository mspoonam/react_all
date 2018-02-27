
//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';


// create a component
class ProfileView extends Component {
    render() {
        return (
            <View style={{paddingHorizontal: 10 , paddingVertical:10}}>
                <Text style ={{fontWeight:'bold'}}>{this.props.name}</Text>
                <Text>{this.props.expertise}</Text> 
                <Text>{this.props.emailid}</Text>
            </View>
        );
    }
}

//make this component available to the app
export default ProfileView;


