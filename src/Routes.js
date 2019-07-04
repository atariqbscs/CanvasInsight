import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Question from './pages/Question';
import Canvas from './pages/Canvas';

export default class Routes extends Component<{}> {
	render() {
		return(
			<Router hideNavBar="true">
			    <Stack key="root" hideNavBar={true}>
                  <Scene key="welcome" component={Welcome} title="Welcome" initial={true}/ >
			      <Scene key="login" component={Login} title="Login" / >
			      <Scene key="signup" component={Signup} title="Register"/>
			      <Scene key="question" component={Question} title="Question"/>
                  <Scene key="canvas" component={Canvas} title="Canvas"/>

			    </Stack>
			 </Router>
			)
	}
}