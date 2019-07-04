
import React, { Component } from 'react';
import Logo from '../components/Logo';
import { Text, View, StyleSheet } from 'react-native';
import {Actions} from 'react-native-router-flux';
import RadioGroup from 'react-native-radio-buttons-group';


export default class Question extends Component {

  state = {
      data: [
        {
          label: 'Good',
        },
        {
          label: 'Okay',

        },
        {
          label: 'Dull',

        },
        {

          label: 'Sad',
        },

      ],
    };

    // update state
    onPress = data => this.setState({ data });
    canvas() {
    		Actions.canvas()
    	}

    render() {
      let selectedButton = this.state.data.find(e => e.selected == false);
      selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
      return (
        <View style={styles.container}>
        <Logo/>
          <Text style={{ fontSize: 18, marginTop: 50, marginBottom: 50 }}>
            HELLO -----------------------  !{"\n"}
            How are you feeling today?
          </Text>
          <View style={styles.inputBox}>
          <RadioGroup style={styles.circle} radioButtons={this.state.data} onPress={this.canvas}/ >
        </View>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: 'column',
        marginBottom: 30,
		alignItems: 'stretch',
        justifyContent: 'flex-start',
        direction: 'rtl',

	},


	circle: {
		height: 20,
		width: 20,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#ACACAC',
		alignItems: 'flex-end',
        alignSelf: 'flex-end',
		direction: 'rtl',
	},

	checkedCircle: {
		width: 14,
		height: 14,
		borderRadius: 7,
		backgroundColor: '#794F9B',
	},
	container: {
        backgroundColor:'#eef3f8',
        flex: 1,
         alignItems:'center',
         justifyContent :'flex-end',

      },
      inputBox: {
          width:350,

          backgroundColor:'rgba(255, 255,255,0.4)',
          borderRadius: 10,
          paddingHorizontal:16,
          fontSize:16,
          color:'#9b9b9b',
          marginVertical: 10,
          alignItems: 'stretch',
          	justifyContent: 'flex-start',
          	direction: 'rtl',
          	flexGrow: 2,

        },

});