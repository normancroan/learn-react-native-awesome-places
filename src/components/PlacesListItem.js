import React from "react";
import { View, Text, StyleSheet, TouchableOpacity as Touch } from "react-native";

const PlacesListItem = props => (
	<Touch onPress={props.onItemPressed}>
		<View style={styles.listItem} >
			<Text>{props.item}</Text>
		</View>
	</Touch>
);

const styles = StyleSheet.create({
	listItem: {
		width: "100%",
		padding: 10,
		backgroundColor: "#eee",
		margin: 5
	}
});

export default PlacesListItem;
