import React, { Component } from "react";
import { View, Text, Button, Dimensions, StyleSheet } from "react-native";

class SideDrawer extends Component {
	render() {
		return (
			<View style={[styles.container,{ width: Dimensions.get("window").width * 0.8 }]}>
				<Text>Some text here</Text>
				<Button title="Apparently text isn't sufficient on it's own"/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 22,
		backgroundColor: "white",
		flex: 1
	}
})

export default SideDrawer;
