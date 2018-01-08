import React from "react";
import { View, Modal, Image, Text, Button, StyleSheet } from "react-native";

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
		<Modal onRequestClose={props.handleCloseModal} visible={props.selectedPlace !== null} animationType="slide">
			<View style={styles.modalContainer}>
				{modalContent}
				<View>
					<Button title="Delete" color="red" onPress={props.handleRemovePlace}/>
					<Button title="Close" onPress={props.handleCloseModal}/>
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
    }
});
export default PlaceModal;
