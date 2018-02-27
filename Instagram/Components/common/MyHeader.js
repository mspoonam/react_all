
//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {  Icon, Thumbnail, Header ,Left ,Body , Right} from "native-base";

// create a component
class MyHeader extends Component {
    render() {
        return (
            <Header>
            <Left><Icon name={this.props.leftBarItemIcon} style={{ paddingLeft: 10 }} /></Left>
            <Body><Text style={{ fontSize: 20 }}>{this.props.title}</Text></Body>
            <Right><Icon name={this.props.rightBarItemIcon} style={{ paddingRight: 10 }} /></Right>
            </Header>
        );
    }
}

//make this component available to the app
export default MyHeader;


