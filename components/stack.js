import React from 'react';
import  View from 'react-native';
import { Block, Button, Icon, Input, NavBar, Text } from 'galio-framework';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Carousel from 'react-native-snap-carousel';


//  <Carousel layout={'stack'} layoutCardOffset={`18`} />

 const _renderItem = ({item,index}) => {
  return (
    <View style={{
        backgroundColor:'floralwhite',
        borderRadius: 5,
        height: 250,
        padding: 50,
        marginLeft: 25,
        marginRight: 25, }}>
      <Text style={{fontSize: 30}}>{item.title}</Text>
      <Text>{item.text}</Text>
    </View>

  )
};

return (
  <Carousel
    ref={(c) => { this._carousel = c; }}
    data={this.state.entries}
    layout={'stack'}
    layoutCardOffset={'18'}
    renderItem={_renderItem}
    sliderWidth={sliderWidth}
    itemWidth={itemWidth}
  />
);
