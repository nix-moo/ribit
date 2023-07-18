import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import storybook from './storybook';
import Swipe from './components/swipe';
import testData from './testData';

export default class App extends Component {
  state = {
    progress: 0,
    rowIndex: 0,
  };

  render() {
    this.progress = data.progress;
    return (
      <View style={styles.container}>
        <Text>Progress: {this.state.progress}</Text>
        <Text>Row Index: {this.state.rowIndex}</Text>
        <View>
          <Swipe data={testData} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    // alignContent: 'flex-start',
    // justifyContent: 'center',
  },
});
