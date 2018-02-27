import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements'


export default class FurtherDetails extends React.Component {



  static navigationOptions = {
    header: null,
  };


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Voila !!!</Text>

                <Button style={{ marginTop: 50, opacity: 0.5 }}
                    onPress={() => this.props.navigation.goBack()}
                    title="Pop Back"
                    color="white"
                    backgroundColor="#fccc63"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fccc63',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "#e95950",
        fontSize: 50,
        opacity:0.6,
    }
});

