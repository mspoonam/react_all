import React from 'react';
import { StyleSheet, Text, View, Alert,Image } from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation";
import Home from "../Screens/Home"
import { Container, Content, Icon, Thumbnail, Left ,Body , Right,Header,Button} from "native-base";
import CardComponent from "../Components/CardComponent";
import { Constants, LinearGradient } from 'expo';
import MyHeader from "../Components/common/MyHeader";
import Stories from "../Components/Stories";
import EntypoIcon from 'react-native-vector-icons/Entypo'
import PostDetail  from "../Components/common/PostDetail";
import ProfileView from "../Components/common/ProfileView";


export default class Profile extends React.Component {


    static navigationOptions = {
        header: null,
        tabBarIcon: ({ tintColor }) => (
            <Icon name="person" style={{ color: tintColor }} />
        )

    }

    // static navigationOptions = {
    //     header: null,
    // };

    render() {
        return (
            <Container style={styles.container}>
            <Header>
                <Left><Icon name="md-person-add" style={{ paddingLeft: 10 }} /></Left>
                <Body><Text style={{ fontSize: 20 }}>Poonam</Text></Body>
                <Right><EntypoIcon name="back-in-time" style={{ paddingRight: 10 ,fontSize:32}} /></Right>
            </Header>    

             <Content>
                <View style={{paddingTop:10}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex:1,alignItems:'center'}}>
                            <Image source={require('../Assets/Posts/artofvisuals.jpg')} style={{width:75,height:75, borderRadius:37.5}}/> 
                        </View>
                        <View style={{flex:3}}>
                            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                                <PostDetail count="20" details="Posts"/>
                                <PostDetail count="206" details="Posts"/>
                                <PostDetail count="197" details="Posts"/>
                            </View>

                            <View style={{flexDirection:'row',paddingTop:10}}>
                                <Button bordered dark 
                                    style={{flex:3,marginLeft:10,justifyContent:'center', height:30}}>
                                    <Text> Edit Profile </Text>
                                </Button>
                                <Button bordered dark style={{flex:1,marginLeft:5,marginRight:10, justifyContent:'center', height:30}}>
                                    <Icon name ='settings' />
                                </Button>
                            </View>
                        </View>

                    </View>
                     <ProfileView/>
                </View>

             </Content>
         </Container>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

