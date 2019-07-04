import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Question from '../pages/Question';
import {Actions} from 'react-native-router-flux';
export default class Logo extends Component<{}> {
question() {
  		Actions.question()
  	}
	render(){
		return(
			<View style={styles.container}>
          <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Patient ID"
              placeholderTextColor = "#9b9b9b"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#9b9b9b"
              ref={(input) => this.password = input}
              />
           <TouchableOpacity style={styles.button} onPress={this.question} >
             <Text style={styles.buttonText}>{this.props.type}</Text>
           </TouchableOpacity>
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.4)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#9b9b9b',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }

});