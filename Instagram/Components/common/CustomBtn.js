
//import liraries
import React, { Component } from 'react';
import { Icon, Button } from "native-base";


// create a component
class CustomBtn extends Component {

    render() {
        
        return (
            
            <Button 
            transparent 
            onPress = {this.props.onPress}
            active ={this.props.activeIndexNumber == this.props.indexValue}
            > 
                <Icon name={this.props.iconName} style={[this.props.activeIndexNumber == this.props.indexValue ? {}: {color: "grey"}]}/>
            </Button>
        );
    }
}



//make this component available to the app
export default CustomBtn;

