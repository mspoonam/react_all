import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { Platform } from "react-native";

import Likes from "../Screens/Likes"
import Home from "../Screens/Home"
import Profile from "../Screens/Profile"
import Search from "../Screens/Search"
import Media from "../Screens/Media"
import Details from "../Screens/Details"
import FurtherDetails from "../Screens/FurtherDetails"

import MainScreen from "../Config/MainScreen"



export const AppStackNavigator = StackNavigator({


 

    MainScreen: {
        screen: MainScreen
    },

})

export const profilePushStack = StackNavigator({

    Profile: {
        screen: Profile
    },
    Details: {
        screen: Details
    },
    OneMoreDetails: {
        screen: FurtherDetails
    },
})

export const profileModalStack = StackNavigator({

    Profile: {
        screen: Profile
    },
    Details: {
        screen: Details
    },
    OneMoreDetails: {
        screen: FurtherDetails
    },
}, {
        headerMode: 'none',
        mode: 'modal',
    })

export const Tabs = TabNavigator({

    Home: {
        screen: Home
    },
    Search: {
        screen: Search
    },
    Media: {
        screen: Media
    },
    Likes: {
        screen: Likes
    },
    Profile: {
        screen: profilePushStack
    },

}, {
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: "bottom",
        tabBarOptions: {
            style: {
                ...Platform.select({
                    android: { backgroundColor: "white" }
                })
            },
            activeTintColor: "crimson",
            inactiveTintColor: "grey",
            showLabel: false,
            showIcon: true,
        }
    })


