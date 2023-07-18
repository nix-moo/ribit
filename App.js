import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import storybook from './storybook';
import Swipe from './components/swipe';
import testData from './testData.json';

export default function App() {
  state = {
    progress: 0,
    rowIndex: 0,
  };

  // this.progress = testData[progress];

  return (
    <View style={styles.container}>
      <Text>Progress: {this.state.progress}</Text>
      <Text>Row Index: {this.state.rowIndex}</Text>
      <Text>testData</Text>
      <View>
        <Swipe data={testData} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
