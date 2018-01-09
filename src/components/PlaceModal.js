import React from "react";
import {
	View,
	Modal,
	Image,
	Text,
	Button,
	StyleSheet,
	TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const PlaceModal = props => {
	let modalContent = null;

	if (props.selectedPlace) {
		modalContent = (
			<View>
				<Image style={styles.placeImage} source={props.selectedPlace.image} />
				<Text style={styles.placeText}>{props.selectedPlace.name}</Text>
			</View>
		);
	}

	return (
		<Modal
			onRequestClose={props.handleCloseModal}
			visible={props.selectedPlace !== null}
			animationType="slide"
		>
			<View style={styles.modalContainer}>
				{modalContent}
				<View>
					<TouchableOpacity onPress={props.handleRemovePlace}>
						<View style={styles.deleteButton}>
							<Icon name="ios-trash" size={30} color="red" />
						</View>
					</TouchableOpacity>
					<Button title="Close" onPress={props.handleCloseModal} />
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	modalContainer: {
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
export default PlaceModal;
