import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Icon, Left, Right, Button, cardBody } from "native-base";

export default class CardComponents extends React.Component {

    constructor() {
        super();
        this.state = { unliked : true };
      }



    render() {

        const { width, height } = Image.resolveAssetSource(this.props.image);

        console.log(`Image width is ${width} & image height is ${height}`);

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={this.props.profileImage} />
                        <Body>
                            <Text style={{ fontSize: 15 }}>{this.props.profileName}</Text>
                            <Text note style={{ fontSize: 11, marginTop: 5 }}>{this.props.location}</Text>
                        </Body>
                    </Left>

                </CardItem>

                <CardItem cardBody>
                    <Image source={this.props.image}
                        style={{ height: (Dimensions.get('window').width / width) * (height), width: Dimensions.get('window').width, flex: 1 }}
                    />
                </CardItem>

                <CardItem style={{ height: 45 }}>
                    <Left>
                        <Button transparent onPress={ () => this.setState({ unliked: !this.state.unliked }) }>
                            <Icon name={this.state.unliked? "ios-heart-outline" : "ios-heart"} style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles-outline" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send-outline" style={{ color: 'black' }} />
                        </Button>
                    </Left>
                </CardItem>
                <CardItem style={{ height: 20 }}>
                    <Text>{this.props.likes} Likes
        </Text>
                </CardItem>
                <CardItem>
                    <Body>

                        <Text>
                            <Text style={{ fontWeight: "900" }}>{this.props.profileName} </Text>
                            {this.props.description}
                        </Text>
                    </Body>
                </CardItem>
            </Card>
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

