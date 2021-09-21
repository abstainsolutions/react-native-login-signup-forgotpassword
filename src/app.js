import React, { useState,Component  } from 'react';
import { StyleSheet,  View } from 'react-native';
import { NativeBaseProvider, Text, Box } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginView from './screens/login/login';
import HomeView from './screens/home/home';
import SignupView from './screens/signup/signup';
import ForgotpasswordView from './screens/forgotpassword/forgotpassword';
const Stack = createNativeStackNavigator();

class App extends Component {
	state = { 
		initialRouteName: null,
	};
	constructor(props) {
		super(props);
		this.NativeOnLoad();
	}
	NativeOnLoad() {
		var that = this;
		let isLoggedIn = AsyncStorage.getItem("isLoggedIn");
		isLoggedIn.then(function(result){
		
		if(result=='1'){
			that.setState({ initialRouteName: 'HomeView' });
		}
		else
			that.setState({ initialRouteName: 'LoginView' });
		})
	
	}
	LoginView () {
		return <View><LoginView /></View>
	}
	HomeView () {
		return  <View><HomeView /></View>
	}
	SignupView () {
		return  <View><SignupView /></View>
	}
	ForgotpasswordView () {
		return  <View><ForgotpasswordView /></View>
	}
	// Render View
	render() {
		return ( <NavigationContainer><Stack.Navigator initialRouteName={this.state.initialRouteName}>
					<Stack.Screen  options={{ headerShown: false }} name="LoginView" component={LoginView} />
					<Stack.Screen options={{ headerShown: false }} name="HomeView" component={HomeView} />
					<Stack.Screen options={{ headerShown: false }} name="SignupView" component={SignupView} />
					<Stack.Screen options={{ headerShown: false }} name="ForgotpasswordView" component={ForgotpasswordView} />
				</Stack.Navigator></NavigationContainer>);
	}
}
export default App;