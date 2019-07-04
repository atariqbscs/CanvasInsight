import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Logo extends Component<{}> {


	render() {
		return(
		<View style={styles.container}>
        				<View style={styles.signupTextCont}>
        				 <Image  style={{flex:1}}
                                 source={require('../images/logo2.jpeg')}/>


        				</View>
        			</View>


			)
	}
}
const styles = StyleSheet.create({
  container :{
    flex:1,
    justifyContent:'flex-end'


  }

  });