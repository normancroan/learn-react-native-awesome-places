import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import uuid from "uuid";
import PlacesList from "./src/components/PlacesList";
import AddPlace from "./src/components/AddPlace";
import placeImage from "./src/img/paradise.png";
import PlaceModal from "./src/components/PlaceModal";
import { connect } from "react-redux";
import {
	addPlace,
	removePlace,
	selectedPlace,
	deselectPlace,
	selectPlace
} from "./src/actions/places";

class App extends React.Component {
	onPlaceNameSubmit = place => {
		if (place.trim() === "") {
			return;
		}
		this.props.onAddPlace(place);
	};

	onPlaceRemove = () => {
		this.props.onRemovePlace();
		this.props.onDeselectPlace();
	};

	onPlaceSelected = key => {
		this.props.onSelectPlace(key);
	};

	onModalClose = () => {
		this.props.onDeselectPlace();
	};

	render() {
		return (
			<View style={styles.container}>
				<PlaceModal
					selectedPlace={this.props.selectedPlace}
					handleCloseModal={this.onModalClose}
					handleRemovePlace={this.onPlaceRemove}
				/>
				<AddPlace submitFunction={this.onPlaceNameSubmit} />
				<PlacesList
					places={this.props.places}
					handleRemovePlace={this.onPlaceRemove}
					handleSelectPlace={this.onPlaceSelected}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "flex-start",
		padding: 20
	}
});

const mapStateToProps = state => {
	return {
		places: state.places.places,
		selectedPlace: state.places.selectedPlace
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onAddPlace: placeName => dispatch(addPlace(placeName)),
		onRemovePlace: () => dispatch(removePlace()),
		onSelectPlace: key => dispatch(selectPlace(key)),
		onDeselectPlace: () => dispatch(deselectPlace())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
