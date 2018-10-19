/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Button from 'react-native-button';


type Props = {};
export default class App extends Component<Props> {
  constructor(props, context){
    super(props, context);
  }
  _handlePress(){
    alert('button is pressed');
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          style={styles.blindButton}
          onPress={() => this._handlePress()}
        > 시각장애인 회원가입 </Button>
        <Button
          style={styles.volunButton}
          onPress={() => this._handlePress()}
        > 자원봉사자 회원가입 </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  blindButton: {
    fontSize: 30,
    color: 'red',
    marginBottom: 50,
  },
  volunButton: {
      fontSize: 20,
      color: 'green',
    },
});
