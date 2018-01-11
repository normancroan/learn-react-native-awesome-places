import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const ButtonWithBackground = props => (
	<TouchableOpacity onPress={props.onPress}>
		<View style={[styles.button, { backgroundColor: props.color }]}>
			<Text style={styles.buttonText}>{props.children}</Text>
		</View>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	button: {
		padding: 10,
        margin: 5,
        borderRadius: 5,
        borderColor: "black",
        shadowColor: "black",
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 1.0,
        elevation: 3
    },
    buttonText: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        fontFamily: "Arial"
    }
});

export default ButtonWithBackground;
