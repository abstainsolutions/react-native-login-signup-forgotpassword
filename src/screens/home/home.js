import React, { Component,useState } from "react";
import { Text, StyleSheet,View } from "react-native";

class HomeView extends Component {
	state = { 
	};
	constructor(props) {
	super(props);
	}
	componentDidMount() {	 	
    }
    componentWillUnmount() {
    }
	HomeViewHtml = () => {
	return  <View><Text>Home</Text></View>
	}
	render() {
		return this.HomeViewHtml();
	}
}
export default HomeView;