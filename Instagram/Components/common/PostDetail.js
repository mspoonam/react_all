
//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';


// create a component
class PostDetail extends Component {
    render() {
        return (
            <View style={{alignItems:'center',}}>
                <Text> {this.props.count}</Text>
                <Text style ={{fontSize:10,color:'black'}}> {this.props.details}</Text>
            </View>
        );
    }
}

//make this component available to the app
export default PostDetail;


