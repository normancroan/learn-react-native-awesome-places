import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
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
				places: [...prevState.places, place]
			};
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<AddPlace submitFunction={this.onPlaceNameSubmit}/>
				<PlacesList places={this.state.places}/>
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
