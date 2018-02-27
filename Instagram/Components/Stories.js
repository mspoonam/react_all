//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,ScrollView} from 'react-native';
import { Container, Content, Icon, Thumbnail, Left ,Body , Right} from "native-base";


// create a component
class Stories extends Component {
    render() {
        return (
            <View style={{ paddingTop:5 ,paddingBottom:5, backgroundColor:'cyan'}}>
                        
                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom:10 }}>
                            <Text style={{ fontWeight: "bold" }}> Stories </Text>

                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                <Icon name="md-play" style={{ fontSize: 14 }}> </Icon>
                                <Text style={{ fontWeight: "bold" }}> Watch All </Text>
                            </View>

                        </View>

                        <View style={{ flex: 3 }}>

                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    alignItems: 'center',
                                    paddingStart: 5,
                                    paddingEnd: 5,
                                }}
                            >

                                <Thumbnail style={{ marginHorizontal: 5, borderColor: "#bc2a8d", borderWidth: 2 }} source={require('../Assets/Icons/icon_siddheshc27.jpg')} />
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: "#bc2a8d", borderWidth: 2 }} source={require('../Assets/Icons/icon_natgeoyourshot.jpg')} />
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: "#bc2a8d", borderWidth: 2 }} source={require('../Assets/Icons/icon_maharashtra_desha.jpg')} />
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: "#bc2a8d", borderWidth: 2 }} source={require('../Assets/Icons/icon_doyoutravel.jpg')} />
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: "#bc2a8d", borderWidth: 2 }} source={require('../Assets/Icons/icon_metallica.jpg')} />
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: "#bc2a8d", borderWidth: 2 }} source={require('../Assets/Icons/icon_artofvisuals.jpg')} />
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: "#bc2a8d", borderWidth: 2 }} source={require('../Assets/Icons/icon_siddheshc27.jpg')} />
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: "#bc2a8d", borderWidth: 2 }} source={require('../Assets/Icons/icon_natgeoyourshot.jpg')} />
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: "#bc2a8d", borderWidth: 2 }} source={require('../Assets/Icons/icon_maharashtra_desha.jpg')} />
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: "#bc2a8d", borderWidth: 2 }} source={require('../Assets/Icons/icon_doyoutravel.jpg')} />
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: "#bc2a8d", borderWidth: 2 }} source={require('../Assets/Icons/icon_metallica.jpg')} />
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: "#bc2a8d", borderWidth: 2 }} source={require('../Assets/Icons/icon_artofvisuals.jpg')} />
                            </ScrollView>
                        </View>


                    </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Stories;
