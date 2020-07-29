import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text, Icon } from 'galio-framework';

const RowCard = (row) => {
  let num = row.num;
  let myTitle = num.toString();
  return (
    <Card
      title={myTitle}
      titleStyle={{ fontSize: 14 }}
      containerStyle={styles.container}
      // wrapperStyle={styles.wrapper}
    >
      <Icon name="frown" family="Galio" color={rgb(100, 120, 40)} size={10} />
      <View style={styles.detailWrapper}>
        <Text>{row.text}</Text>
        {/* <Text style={styles.text}>{row.text}</Text> */}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    backgroundColor: '#000',
  },
  // text: {
  //   fontSize: 30,
  //   color: 'darkgray',
  // },
  container: {
    backgroundColor: '#000',
    padding: 50,
  },
  // wrapper: {},
});

export default RowCard;
