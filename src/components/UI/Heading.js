import React from "react";
import { Text, StyleSheet } from "react-native";

const Heading = props => <Text {...props} style={[styles.Heading, props.style]}>{props.children}</Text>;

const styles = StyleSheet.create({
	Heading: {
		fontSize: 28,
		fontWeight: "bold"
	}
});

export default Heading;
