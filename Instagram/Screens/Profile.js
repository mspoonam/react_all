import React from 'react';
import { StyleSheet, Text, View, Alert,Image} from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation";
import Home from "../Screens/Home"
import { Container, Content, Icon, Thumbnail, Left ,Body , Right,Header,Button} from "native-base";
import CardComponent from "../Components/CardComponent";
import { Constants, LinearGradient } from 'expo';
import MyHeader from "../Components/common/MyHeader";
import Stories from "../Components/Stories";

import PostDetail  from "../Components/common/PostDetail";
import ProfileView from "../Components/common/ProfileView";
import CustomBtn from "../Components/common/CustomBtn";
import GridLayout from "../Components/common/GridLayout";
import EditProfileBtn from "../Components/common/EditProfileBtn";



export default class Profile extends React.Component {


    static navigationOptions = {
        header: null,
        tabBarIcon: ({ tintColor }) => (
            <Icon name="person" style={{ color: tintColor }} />
        )

    }

    constructor (props){
        super(props)
        this.state =  {
            activeIndex:0
        }
    }

    segmentClicked = (index) => {
        this.setState({
             activeIndex: index
        })
    }

    render() {
        return (
            <Container style={styles.container}>
            
            <MyHeader title="Poonam" leftBarItemIcon="md-person-add" rightBarItemIcon="back-in-time" hasEnto />

             <Content>


                <View style={{paddingTop:10}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex:1,alignItems:'center'}}>
                            <Image source={require('../Assets/Posts/artofvisuals.jpg')} style={{width:75,height:75, borderRadius:37.5}}/> 
                        </View>
                        <View style={{flex:3}}>

                        {/* Custom PostDetail Class */}
                            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                                <PostDetail count="05" details="Posts"/>
                                <PostDetail count="10" details="Likes"/>
                                <PostDetail count="25" details="Coffees"/>
                            </View>

                        {/* Custom EditProfileBtn Class for Edit Button */}
                            <EditProfileBtn textForEditBtn="Edit Profile" settingIconName="settings" />
                        </View>
                    </View>

                    {/* Custom ProfileView Class to show basic info */}
                     <ProfileView name="Poonam,Priyanka,Sanket" expertise = "iOS | Hybrid | Android | React"  emailid="poonam.pandey@peopleinterative.in"/>
                     
                </View>

                <View>
                    
                    {/* Custom Button Class With Global Active Index Object*/}
                    <View style={{flexDirection:'row', justifyContent:'space-around',borderTopWidth:1,borderTopColor:"#e2e2e2"}}>
                        
                        <CustomBtn onPress = {()=> this.segmentClicked(0)} indexValue="0" activeIndexNumber = {this.state.activeIndex} iconName="ios-apps-outline" />
                        <CustomBtn onPress = {()=> this.segmentClicked(1)} indexValue="1" activeIndexNumber = {this.state.activeIndex} iconName="ios-list-outline"/>
                        <CustomBtn onPress = {()=> this.segmentClicked(2)} indexValue="2" activeIndexNumber = {this.state.activeIndex} iconName="ios-people-outline"/>
                        <CustomBtn onPress = {()=> this.segmentClicked(3)} indexValue="3" activeIndexNumber = {this.state.activeIndex} iconName="ios-bookmark-outline"/>
                         
                    </View>

                    {/* Custom Grid Class   */}
                    <GridLayout indexValue="0" activeIndexNumber={this.state.activeIndex} />

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

