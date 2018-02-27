import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Container, Content, Icon, Thumbnail, Left ,Body , Right} from "native-base";
import CardComponent from "../Components/CardComponent";
import { Constants, LinearGradient } from 'expo';
import MyHeader from "../Components/common/MyHeader";
import Stories from "../Components/Stories";

export default class Home extends React.Component {

    static navigationOptions = {
        header: null,
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" style={{ color: tintColor }} />
        )

    }
   

    // static navigationOptions = {

    //     headerLeft: <Icon name = "ios-camera-outline" style={{paddingLeft: 10}}/>,
    //     title: "Instagram",
    //     headerRight: <Icon name = "ios-send-outline" style= {{paddingRight: 10}}/>,

    // }

    render() {

        feedDescriptions = [
            'Be Visually Inspired!\n.\n.\n#naturephoto #main_vision #landscape_captures #awesome_earthpix #natureaddict #rsa_rural #awesomeearth #nature_wizards #gottalove_a_ #allnatureshots #instanaturelover #earth_deluxe #nature_brilliance #EarthVisuals #artofvisuals #welivetoexplore #natureaddict #naturediversity #ourplanetdaily #earth_deluxe #instanaturelover #nature_prefection #allnatureshots #nikonphotography #nikontop #nikon_photography_',
            'TONIGHT IN MANNHEIM\n#metallica #worldwired #MetInMannheim',
            'Into the jungle 🐒',
            'WORK WITH NATURE !!!\n#maharashtra #mumbai #pune #amazing #click #instagram #instalike #picoftheday #dslr #photography #nature #mountain #travel #travelling #explore #village #villagelife #morning #kokan #farmer #satara #sangli #sky #marathi',
            'An emu chick hatches at the Wild Rose Emu Ranch in Hamilton, Montana.\n\n\n#YourShotPhotographer Pam Voth waited for hours, watching the chick work on coming out of its shell. "What surprised me was the delicate, tiny little whistling call it made as it was hatching," she remembers. "In the wild, this chick\'s whistle would have been answered by the male on the nest."',
            '"Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky."\n\n-Rabindranath Tagore, Stray Birds\n.\n.\n.\n#sunset #seashore #holyshore'
        ]

        
        return (
            <Container style={styles.container}>
               <MyHeader title="Poonam" leftBarItemIcon="ios-send-outline" rightBarItemIcon="ios-ice-cream-outline"/>
                    
                <Content>

                   <Stories/>

                    <CardComponent profileImage={require('../Assets/Icons/icon_artofvisuals.jpg')} profileName="artofvisuals" location="Heaven" image={require('../Assets/Posts/artofvisuals.jpg')} likes="734" description={feedDescriptions[0]} />
                    <CardComponent profileImage={require('../Assets/Icons/icon_metallica.jpg')} profileName="metallica" location="New Jersy" image={require('../Assets/Posts/metallica.jpg')} likes="256" description={feedDescriptions[1]} />
                    <CardComponent profileImage={require('../Assets/Icons/icon_doyoutravel.jpg')} profileName="doyoutravel" location="Bali, Indonesia" image={require('../Assets/Posts/doyoutravel.jpg')} likes="1256" description={feedDescriptions[2]} />
                    <CardComponent profileImage={require('../Assets/Icons/icon_maharashtra_desha.jpg')} profileName="maharashtra_desha" location="Jalgaon" image={require('../Assets/Posts/maharashtra_desha.jpg')} likes="3329" description={feedDescriptions[3]} />
                    <CardComponent profileImage={require('../Assets/Icons/icon_natgeoyourshot.jpg')} profileName="natgeoyourshot" location="Jurassic Park" image={require('../Assets/Posts/natgeoyourshot.jpg')} likes="1,45,003" description={feedDescriptions[4]} />
                    <CardComponent profileImage={require('../Assets/Icons/icon_siddheshc27.jpg')} profileName="siddheshc27" location="Ganpatipule, Ratnagiri" image={require('../Assets/Posts/siddheshc27.jpg')} likes="78" description={feedDescriptions[5]} />

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

