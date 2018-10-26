import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import Button from 'react-native-button';
import SwitchToggle from 'react-native-switch-toggle';
import DatePicker from 'react-native-datepicker'

type Props = {};
export default class MainForVolu extends Component<Props> {
  constructor(props, context){
    super(props, context);
    this.state = { acceptableTimeFrom : "01:00", acceptableTimeTo : "23:59", acceptable : false, };
  }

_pop(){
    alert(acceptableTimeTo);
    this.props.navigator.pop({
      animated : true,
      animationType: 'fade'
      });
}

toggleAcceptable = () => {
  this.setState({ acceptable : !this.state.acceptable });
}

render() {
    return (
       <View style={styles.container}>
         <View style={styles.header} />
           <View style={styles.title}>
             <Text style={{fontSize:30,paddingBottom:20}}>설정</Text>
             <View style={{width:"100%",borderBottomWidth:0.5,borderColor:'#444'}} />
           </View>
         <View style={styles.content}>
           <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
             <Text style={{fontSize:20}}> 수락 가능 여부 </Text>
             <SwitchToggle
               containerStyle={{
                         marginTop: 16,
                         width: 96,
                         height: 38,
                         borderRadius: 25,
                         backgroundColor: '#ccc',
                         padding: 5,
                       }}
                       circleStyle={{
                         width: 30,
                         height: 30,
                         borderRadius: 15,
                         backgroundColor: 'white',
                       }}
                       switchOn={this.state.acceptable}
                       onPress={this.toggleAcceptable}
                       circleColorOff='white'
                       circleColorOn='red'
                       duration={300}
             />
           </View>
           <View style={{flexDirection:'column',justifyContent:'space-between',alignItems:'flex-start',paddingBottom:10}}>
             <Text style={{fontSize:20}}> 수락 가능 시간 </Text>
             <DatePicker
                     style={{width: 200, marginTop: 10}}
                     date={this.state.acceptableTimeFrom}
                     mode="time"
                     format="HH:mm"
                     placeholder="언제부터"
                     confirmBtnText="확인"
                     cancelBtnText="취소"
                     customStyles={{
                       dateIcon: {
                         position: 'absolute',
                         left: 0,
                         top: 4,
                         marginLeft: 0
                       },
                       dateInput: {
                         marginLeft: 36
                       }
                       // ... You can check the source to find the other keys.
                     }}
                     onDateChange={(date) => {this.setState({ acceptableTimeFrom : date })}}
                   />
             <DatePicker
                     style={{width: 200, marginTop: 10}}
                     date={this.state.acceptableTimeTo}
                     mode="time"
                     format="HH:mm"
                     placeholder="언제까지"
                     confirmBtnText="확인"
                     cancelBtnText="취소"
                     customStyles={{
                       dateIcon: {
                         position: 'absolute',
                         left: 0,
                         top: 4,
                         marginLeft: 0
                       },
                       dateInput: {
                         marginLeft: 36
                       }
                       // ... You can check the source to find the other keys.
                     }}
                     onDateChange={(date) => {this.setState({ acceptableTimeTo : date })}}
                   />
           </View>
         </View>
         <View style={styles.footer}>
           <Button buttonColor={'#023e73'} onPress={this._pop.bind(this)}> 확인 </Button>
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