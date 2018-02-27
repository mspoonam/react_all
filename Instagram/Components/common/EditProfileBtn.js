import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { Icon,Button} from "native-base";

export default class EditProfileBtn extends Component {
  render() {
    return (
        <View style={{flexDirection:'row',paddingTop:10}}>
            <Button bordered dark 
                style={{flex:3,marginLeft:10,justifyContent:'center', height:30}}>
                <Text>{this.props.textForEditBtn}  </Text>
            </Button>
            <Button bordered dark style={{flex:1,marginLeft:5,marginRight:10, justifyContent:'center', height:30}}>
                <Icon name = {this.props.settingIconName} />
            </Button>
        </View>
    );
  }
}
