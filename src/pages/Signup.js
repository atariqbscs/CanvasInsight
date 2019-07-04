import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class Signup extends Component<{}> {

  goBack() {
      Actions.pop();
  }


	render() {
		return(
			<View style={styles.container}>
				<Logo/>
				<Form type="Signup"/>

				<Text style={styles.signupText}>By proceeding you also agree to the Terms of Service and Privacy Policy</Text>
				<TouchableOpacity style={styles.button}>
                             <Text style={styles.buttonText}>View Policy</Text>
                           </TouchableOpacity>


				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Already have an account?</Text>
					<TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
				</View>
			</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#eef3f8',
    flex: 1,
    alignItems:'center',
    justifyContent :'center',
    textAlign:'center',
  },
  signupPrivacyPolicy :{
      flexGrow: 1,
      alignItems:'center',
      justifyContent :'center',
      paddingVertical:16,
      flexDirection:'row',
      margin:30,
      textAlign:'justify',
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row',
  },
  signupText: {
  	color:'rgba(60,62,58,0.4)',
  	fontSize:16,
  	justifyContent:'space-evenly',
  	textAlign:'center',
  	paddingLeft: 10,
  },
  signupButton: {
  	color:'#4099bf',
  	fontSize:16,
  	fontWeight:'500',
  },
   button: {

      width: 200,
      backgroundColor:'#1c313a',
       borderRadius: 5,
        marginVertical: 10,
        paddingVertical: 13,
        marginTop:30,
    },
    buttonText: {
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center',
    }
});