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
    if (this.props.activeIndexNumber == this.props.indexValue ){
        return (
            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                {this.renderSectionOne()}
            </View>
        )
    }
}

  render() {
    return (
        <View>
            {this.renderSection()}
        </View>
    );
  }
}