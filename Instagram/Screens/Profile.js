import React from 'react';
import { StyleSheet, Text, View, Alert,Image, Dimensions } from 'react-native';
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
import CustomBtn from "../Components/common/CustomBtn";


var images = [
    require('../Assets/Icons/icon_artofvisuals.jpg'),
    require('../Assets/Icons/icon_metallica.jpg'),
    require('../Assets/Icons/icon_doyoutravel.jpg'),
    require('../Assets/Icons/icon_maharashtra_desha.jpg'),
    require('../Assets/Icons/icon_natgeoyourshot.jpg'),
    require('../Assets/Icons/icon_siddheshc27.jpg'),
    require('../Assets/Icons/icon_artofvisuals.jpg'),
    require('../Assets/Icons/icon_metallica.jpg'),
    require('../Assets/Icons/icon_doyoutravel.jpg'),
    require('../Assets/Icons/icon_maharashtra_desha.jpg'),
    require('../Assets/Icons/icon_natgeoyourshot.jpg'),
    require('../Assets/Icons/icon_siddheshc27.jpg'),

]

var  {width,height} = Dimensions.get('window')
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

    renderSectionOne= () => {
            return images.map ((image,index) => {
                console.log(" width is "+width)
                
                return (
                    
                    <View key={index}  style={[ {width:(width)/3} ,{height:(width)/3}]} > 
                        <Image style={{flex: 1, width: undefined , height: undefined}} 
                          source = {image}
                          />
                    </View>
                )
                    
            })
    }

    renderSection = () => {
        if (this.state.activeIndex ==0 ){
            return (
                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    {this.renderSectionOne()}
                </View>
            )
        }
    }


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

                <View>
                    <View style={{flexDirection:'row', justifyContent:'space-around',borderTopWidth:1,borderTopColor:"#e2e2e2"}}>
                        <CustomBtn onPress = {()=> this.segmentClicked(0)} indexValue="0" activeIndexNumber = {this.state.activeIndex} iconName="ios-apps-outline" />
                        <CustomBtn onPress = {()=> this.segmentClicked(1)} indexValue="1" activeIndexNumber = {this.state.activeIndex} iconName="ios-list-outline"/>
                        <CustomBtn onPress = {()=> this.segmentClicked(2)} indexValue="2" activeIndexNumber = {this.state.activeIndex} iconName="ios-people-outline"/>
                        <CustomBtn onPress = {()=> this.segmentClicked(3)} indexValue="3" activeIndexNumber = {this.state.activeIndex} iconName="ios-bookmark-outline"/>
                         
                    </View>
                    {this.renderSection()}

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

