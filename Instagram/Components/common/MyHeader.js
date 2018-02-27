
//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {  Icon, Thumbnail, Header ,Left ,Body , Right} from "native-base";
import EntypoIcon from 'react-native-vector-icons/Entypo'

// create a component
class MyHeader extends Component {

    decideRightButton = () => {
        if (this.props.hasEnto){
            return (
                <Right><EntypoIcon name={this.props.rightBarItemIcon} style={{ paddingRight: 10 ,fontSize:32}} /></Right>
            ) 
        }else {
            return (
                <Right><Icon name={this.props.rightBarItemIcon} style={{ paddingRight: 10 }} /></Right>
            ) 
           
        }
    }

    render() {
        return (
            <Header>
            <Left><Icon name={this.props.leftBarItemIcon} style={{ paddingLeft: 10 }} /></Left>
            <Body><Text style={{ fontSize: 20 }}>{this.props.title}</Text></Body>

                {this.decideRightButton()}
            
            </Header>
        );
    }
}

//make this component available to the app
export default MyHeader;


