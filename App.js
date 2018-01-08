import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import uuid from "uuid";
import PlacesList from "./src/components/PlacesList";
import AddPlace from "./src/components/AddPlace";

export default class App extends React.Component {
	state = {
		places: []
	};

	onPlaceNameSubmit = place => {
		if (place.trim() === "") {
			return;
		}

		this.setState(prevState => {
			return {
				places: [...prevState.places, {key: uuid(), value: place}]
			};
		});
	};

	onPlaceRemove = id => {
		this.setState(prevState => {
			return {
				places: prevState.places.filter(place => place.key !== id)
			};
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<AddPlace submitFunction={this.onPlaceNameSubmit} />
				<PlacesList
					places={this.state.places}
					handleRemovePlace={this.onPlaceRemove}
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
