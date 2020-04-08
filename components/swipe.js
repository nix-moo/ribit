import React, { Component } from 'react';
import { View, Text, Dimensions, Animated, PanResponder } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import RowCard from './card';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.5 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

class Swipe extends Component {
  constructor(props) {
    super(props);
    this.position = new Animated.ValueXY();
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > SWIPE_THRESHOLD) {
          console.log('swipe right');
        } else if (gestureState.dx < -SWIPE_THRESHOLD) {
          console.log('swipe left');
        } else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
          }).start();
        }
      },
    });
  }

  getCardStyle() {
    const { position } = this;
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg'],
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }],
      backgroundColor: '#000',
    };
  }

  renderCardItem = (row, index) => {
    if (!row) {
      return renderNoMoreCards();
    }
    return index === 0 ? (
      <Animated.View
        style={this.getCardStyle()}
        key={row.num}
        {...this._panResponder.panHandlers}
      >
        <RowCard row={row} />
      </Animated.View>
    ) : (
      <View key={row.num}>
        <RowCard row={row} />
      </View>
    );
  };

  renderCards = (data) => {
    let rows = data.rows; // returns an array
    return rows.map(this.renderCardItem);
  };

  renderNoMoreCards = () => {
    return (
      <Card title="You're done!">
        <Button
          title="HOORAY!"
          large
          icon={{ name: 'my-location' }}
          backgroundColor="#03A9F4"
        />
      </Card>
    );
  };

  render() {
    let { data } = this.props;
    return <View>{this.renderCards(data)}</View>;
  }
}
export default Swipe;
