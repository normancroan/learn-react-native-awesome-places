import React from "react";
import { Text, StyleSeet, StyleSheet } from "react-native";

const PrimaryText = props => (
	<Text style={styles.Primary}>{props.children}</Text>
);

const styles = StyleSheet.create({
	Primary: {
		color: "black",
		backgroundColor: "transparent",
		fontFamily: "Fira Sans 300italic"	}
});

export default PrimaryText;
