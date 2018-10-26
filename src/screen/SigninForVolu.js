import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import Button from 'react-native-button';

type Props = {};
export default class SigninForVolu extends Component<Props> {
  constructor(props, context){
    super(props, context);
    this.state = { id : 'id', pw : 'pw'};
  }

buttonClickListener = () => {
    if(this.state.id == 'avatar' & this.state.pw == '123'){
      this.props.navigator.push({
        screen : 'avatar.mainForVolu'
      });
    }else{
      alert('잘못된 ID 또는 비밀번호 입니다.');
    }
};

  render() {
    return (
       <View style={styles.container}>
         <View style={styles.header} />
           <View style={styles.title}>
             <Text style={{fontSize:35,paddingBottom:20}}>로그인</Text>
             <View style={{width:"100%",borderBottomWidth:0.5,borderColor:'#444'}} />
           </View>
         <View style={styles.content}>
           <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
             <Text style={{fontSize:15}}>아이디</Text>
             <TextInput style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}
             onChangeText={(text) => this.setState({id : text})}/>
           </View>
           <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
             <Text style={{fontSize:15}}>비밀번호</Text>
             <TextInput style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}
             onChangeText={(text) => this.setState({pw : text})}/>
           </View>
         </View>
         <View style={styles.footer}>
           <Button buttonColor={'#023e73'} onPress={this.buttonClickListener}> 확인 </Button>
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
