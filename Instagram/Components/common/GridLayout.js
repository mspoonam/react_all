import React, { Component } from 'react';
import {  View,  Image, Dimensions  } from 'react-native';



var images = [
    require('../../Assets/Icons/icon_artofvisuals.jpg'),
    require('../../Assets/Icons/icon_metallica.jpg'),
    require('../../Assets/Icons/icon_doyoutravel.jpg'),
    require('../../Assets/Icons/icon_maharashtra_desha.jpg'),
    require('../../Assets/Icons/icon_natgeoyourshot.jpg'),
    require('../../Assets/Icons/icon_siddheshc27.jpg'),
    require('../../Assets/Icons/icon_artofvisuals.jpg'),
    require('../../Assets/Icons/icon_metallica.jpg'),
    require('../../Assets/Icons/icon_doyoutravel.jpg'),
    require('../../Assets/Icons/icon_maharashtra_desha.jpg'),
    require('../../Assets/Icons/icon_natgeoyourshot.jpg'),
    require('../../Assets/Icons/icon_siddheshc27.jpg'),

]

var  {width,height} = Dimensions.get('window')

export default class GridLayout extends Component {

showGrid= () => {
        return images.map ((image,index) => {
            console.log(" width is "+width)
            
            return (
                
                <View key={index}  style={[ {width:(width)/3} ,{height:(width)/3} , 
                    index%3!==0? {paddingLeft: 2} : {paddingLeft:0} 
                  ]} > 
                    <Image style={{flex: 1, width: undefined , height: undefined}} 
                      source = {image}
                      />
                </View>
            )
                
    })
}



  render() {
    return (
        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
         {this.showGrid()}
        </View>
         
    );
  }
}