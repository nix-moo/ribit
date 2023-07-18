import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import storybook from './storybook';
import Swipe from './components/swipe';
import Stack from './components/stack';
import testData from './TTestData.js';

export default function App() {
  state = {
    progress: 0,
    rowIndex: 0,
  };

  // console.log(testData);
  // this.progress = testData.progress;

  return (
    <View >
      {/* <Swipe data={testData} /> */}
      <Stack data={testData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%',
    height: '80%',
  },
});
