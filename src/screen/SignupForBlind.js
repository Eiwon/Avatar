import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Button from 'react-native-button';

type Props = {};
export default class SignupForBlind extends Component<Props> {
  constructor(props, context){
    super(props, context);
  }

  render() {
    return (
      <View style={styles.container}>
        준비중입니다...
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
