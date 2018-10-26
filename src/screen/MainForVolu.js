import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import Button from 'react-native-button';

type Props = {};
export default class MainForVolu extends Component<Props> {
  constructor(props, context){
    super(props, context);
    this.state = { id : 'id', matchingFrequency : 0, acceptRate : 0, };
  }

_pushSetting(){
  this.props.navigator.push({
    screen : 'avatar.settingForVolu'
  });
}
  render() {
    return (
       <View style={styles.container}>
         <View style={styles.header} />
           <View style={styles.title}>
             <Text style={{fontSize:35,paddingBottom:20}}>내 정보</Text>
             <View style={{width:"100%",borderBottomWidth:0.5,borderColor:'#444'}} />
           </View>
         <View style={styles.content}>
           <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
             <Text style={{fontSize:15}}>아이디 : {this.state.id}</Text>
           </View>
           <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
             <Text style={{fontSize:15}}>매칭 횟수 : {this.state.matchingFrequency}</Text>
           </View>
           <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
             <Text style={{fontSize:15}}>수락률 : {this.state.acceptRate}</Text>
           </View>
         </View>
         <View style={styles.footer}>
           <Button buttonColor={'#023e73'} onPress={this._pushSetting.bind(this)}> 설정 </Button>
         </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  header: {
    width:'100%',
    height:'5%',
    //backgroundColor: '#ff9a9a',
  },
  title: {
    width:'100%',
    height:'18%',
    justifyContent: 'center',
    backgroundColor: '#9aa9ff',
  },
  content: {
    flex: 1,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:30,
    //backgroundColor: '#d6ca1a',
  },
  footer: {
    width:'100%',
    height:'20%',
    //backgroundColor: '#1ad657',
  },
});
