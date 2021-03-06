import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Icon} from "native-base";

export default class Likes extends React.Component {

    static navigationOptions = {

        tabBarIcon: ({tintColor}) => (
            <Icon name= "ios-heart" style = {{color: tintColor}} />
        )

    }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up Likes.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

