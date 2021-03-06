import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import Button from 'react-native-button';

type Props = {};
export default class SignupForVolu extends Component<Props> {
  constructor(props, context){
    super(props, context);
  }

  render() {
    return (
       <View style={styles.container}>
         <View style={styles.header} />
           <View style={styles.title}>
             <Text style={{fontSize:35,paddingBottom:20}}>회원가입</Text>
             <View style={{width:"100%",borderBottomWidth:0.5,borderColor:'#444'}} />
           </View>

         <View style={styles.content}>
           <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
             <Text style={{fontSize:15}}>아이디</Text>
             <TextInput style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
           </View>

           <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
             <Text style={{fontSize:15}}>비밀번호</Text>
             <TextInput style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
           </View>

           <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
             <Text style={{fontSize:15}}>이름</Text>
             <TextInput style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
           </View>

           <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
             <Text style={{fontSize:15}}>휴대폰 본인인증 api가 jquery 기반인데 react-native에서 jquery 못 쓴대요 </Text>
           </View>
         </View>

         <View style={styles.footer}>
           <Button buttonColor={'#023e73'} onPress={() => alert('확인 버튼')}> 확인 </Button>
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
