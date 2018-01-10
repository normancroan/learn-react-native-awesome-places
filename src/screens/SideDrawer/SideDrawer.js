import React, { Component } from "react";
import {
	View,
	Text,
	Button,
	Dimensions,
	StyleSheet,
	TouchableOpacity
} from "react-native";

class SideDrawer extends Component {
	render() {
		return (
			<View
				style={[
					styles.container,
					{ width: Dimensions.get("window").width * 0.8 }
				]}
			>
				<View style={styles.secondContainer}>
					<Text>Some text here</Text>
				</View>
				{true && <Button title="test" />/*bug in emulator, this doesn't render but does allow for the drawer to render*/}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 22,
		backgroundColor: "white",
		flex: 1
	},
	secondContainer: {
		flex: 1,
		width: "100%",
		padding: 5
	}
});

export default SideDrawer;
