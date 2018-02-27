import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements'


export default class Details extends React.Component {


  static navigationOptions = {
    header: null,
  };


  onPressLearnMore() {
    this.props.navigation.navigate('Home')
  }


  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Details.js</Text>

        <View>
          <Button style={{ marginTop: 100 }}
            onPress={() => this.props.navigation.navigate('OneMoreDetails')}
            title="Navigate Further"
            color="#fccc63"
            backgroundColor='#8a3ab9'
          />

          <Button style={{ marginTop: 10, opacity: 0.5}}
            onPress={() => this.props.navigation.goBack()}
            title="Pop Back"
            color="white"
            backgroundColor='#8a3ab9'
          />

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8a3ab9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "white",
    fontSize: 50,
    opacity:0.35,
  },
});

