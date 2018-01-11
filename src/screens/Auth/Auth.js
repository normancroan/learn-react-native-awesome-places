import React, { Component } from "react";
import {
	View,
	Text,
	Button,
	TextInput,
	StyleSheet,
	ImageBackground
} from "react-native";
import DefaultInput from "../../components/UI/DefaultInput";
import Heading from "../../components/UI/Heading";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground";
import PrimaryText from "../../components/UI/PrimaryText";
import startTabs from "../MainTabs/startMainTabs";
import BackgroundImage from "../../img/paradise3.png";

class AuthScreen extends Component {
	loginHandler = () => {
		startTabs();
	};

	render() {
		return (
			<ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
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

						{false && <ButtonWithBackground  onPress={() => alert("pressed")}color="#29aaf4">Register</ButtonWithBackground>}
					</View>
				</View>
			</ImageBackground>
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
	},
	backgroundImage: {
		width: "100%",
		flex: 1
	}
});

export default AuthScreen;
