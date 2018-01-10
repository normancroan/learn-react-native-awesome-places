import React, { Component } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import DefaultInput from "../../components/UI/DefaultInput";
import startTabs from "../MainTabs/startMainTabs";

class AuthScreen extends Component {
	loginHandler = () => {
		startTabs();
	};

	render() {
		return (
			<View style={styles.container}>
				<Text>Please Log In</Text>
				<Button title="Switch to Login" />
				<View style={styles.inputContainer}>
					<DefaultInput placeholder="email address" />
					<DefaultInput placeholder="password" />
					<DefaultInput placeholder="confirm password" />
					<Button title="register" onPress={this.loginHandler} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	inputContainer: {
		width: "80%"
	}
});

export default AuthScreen;
