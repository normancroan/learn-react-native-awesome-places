import React from "react";
import {
	View,
	Image,
	Text,
	Button,
	StyleSheet,
	TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import { removePlace } from "../../actions/places";

const PlaceDetail = props => {
	return (
		<View style={styles.container}>
			<View>
				<Image style={styles.placeImage} source={props.selectedPlace.image} />
				<Text style={styles.placeText}>{props.selectedPlace.name}</Text>
			</View>
			<View>
				<TouchableOpacity
					onPress={() => {
						props.onRemovePlace(props.selectedPlace.key);
						props.navigator.pop();
					}}
				>
					<View style={styles.deleteButton}>
						<Icon name="ios-trash" size={30} color="red" />
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 22
	},
	placeImage: {
		height: 200,
		width: "100%"
	},
	placeText: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 28
	},
	deleteButton: {
		alignItems: "center"
	}
});

const mapDispatchToProps = dispatch => {
	return {
		onRemovePlace: key => dispatch(removePlace(key))
	};
};

export default connect(null, mapDispatchToProps)(PlaceDetail);
