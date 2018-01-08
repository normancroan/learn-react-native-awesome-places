import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity as Touch,
	Image
} from "react-native";

const PlacesListItem = props => (
	<Touch onPress={props.onItemPressed}>
		<View style={styles.listItem}>
			<Image style={styles.placeImage} source={props.image} />
			<Text>{props.item}</Text>
		</View>
	</Touch>
);

const styles = StyleSheet.create({
	listItem: {
		width: "100%",
		padding: 10,
		backgroundColor: "#eee",
		margin: 5,
		flexDirection: "row",
		alignItems: "center"
	},
	placeImage: {
		marginRight: 8,
		height: 30,
		width: 30
	}
});

export default PlacesListItem;
