import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Block, DeckSwiper, Card, Text } from 'galio-framework';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import RowCard from './card';

//  <Carousel layout={'stack'} layoutCardOffset={`18`} />
const Stack = (data) => {
  const CardStack = () => {
    return data.data?.rows.map((row, index) => <RowCard row={row} />);
  };

  return (
    <Block center safe fluid height={'80%'} space="around">
      {/* <Card>
          <Text>{data.data.rows[20].text}</Text>
        </Card> */}
      <DeckSwiper
        style={{ backgroundColor: '#45DF31', height: 20, width: 250 }}
        components={CardStack()}
      />
    </Block>
  );
};

export default Stack;
