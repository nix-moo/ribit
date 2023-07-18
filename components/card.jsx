import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text, Icon } from 'galio-framework';

const RowCard = (row) => {
  let num = row.num;
  let myTitle = toString(num);
  return (
    <Card
      flex
      // title={row.text}
      title="Hello"
      style={{ backgroundColor: '#fff' }}
      titleStyle={{ fontSize: 40, color: 'darkgray' }}
      // containerStyle={styles.container}
      // wrapperStyle={styles.wrapper}
    >
      {/* <Icon name="frown" family="Galio" color={rgb(100, 120, 40)} size={10} /> */}
      {/* <Icon name="frown" family="feather" size={100} /> */}
      {/* <View style={styles.detailWrapper}> */}

      {/* <Text h1>{row.text}</Text> */}
    </Card>
  );
};

const styles = StyleSheet.create({
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  text: {
    fontSize: 30,
    color: 'darkgray',
  },
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  // wrapper: {},
});

export default RowCard;
