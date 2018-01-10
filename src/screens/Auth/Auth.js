import React, { Component } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import DefaultInput from "../../components/UI/DefaultInput";
import Heading from "../../components/UI/Heading";
import PrimaryText from "../../components/UI/PrimaryText";
import startTabs from "../MainTabs/startMainTabs";

class AuthScreen extends Component {
	loginHandler = () => {
		startTabs();
	};

	render() {
		return (
			<View style={styles.container}>
				<PrimaryText>
					<Heading>Please Log In</Heading>
				</PrimaryText>
				<Button title="Switch to Login" />
				<View style={styles.inputContainer}>
					<DefaultInput placeholder="email address" style={styles.input} />
					<DefaultInput placeholder="password" style={styles.input} />
					<DefaultInput placeholder="confirm password" style={styles.input} />
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
	},
	input: {
		backgroundColor: "#eee",
		borderColor: "#bbb"
	}
});

export default AuthScreen;
