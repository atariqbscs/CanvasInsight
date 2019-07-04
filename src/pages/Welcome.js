import React, { Component } from 'react';
import { StyleSheet,View, Text, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo';
import { Actions } from 'react-native-router-flux';



export default class pageOne extends Component {
login() {
		Actions.login()
	}
  render(){
    return(


      <View style={styles.container}>
      				<Logo/>

      				<View style={styles.signupTextCont}>
      				<Text style={styles.welcomeText}>Welcome</Text>
      					<Text style={styles.signupText}>We collaborate with doctors from hospitals around Islamabad to provide the best
                         possible mental health care. Sign up today if you have not already joined the future of mental health {"\n"}{"\n"} </Text>
      					<TouchableOpacity onPress={this.login}><Text style={styles.signupButton}> TAP</Text></TouchableOpacity>
      				</View>
      			</View>


    )
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#eef3f8',
    flex: 2,
    justifyContent:'flex-start',
    alignItems:'center',
    justifyContent :'center'
  },
  welcomeText:{
        color:'#3c3e3a',
    	fontSize:24,
    	textAlign:'center',
    	textAlignVertical:'top',
    	justifyContent:'space-evenly',


  },
  signupTextCont : {
  	flexGrow: 3,
    justifyContent :'center',
    flexDirection:'column',
    textAlign:'center'


  },
  signupText: {
  	color:'rgba(60,62,58,0.4)',
  	fontSize:17,
  	textAlign:'center',
  	justifyContent:'space-evenly',
  	padding:10,

  },
  signupButton: {
  	color:'#a4f441',
  	fontSize:16,
  	fontWeight:'500',
  	justifyContent :'flex-end',
  	textAlign:'center'
  }
});