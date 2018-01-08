import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import uuid from "uuid";
import PlacesList from "./src/components/PlacesList";
import AddPlace from "./src/components/AddPlace";
import placeImage from "./src/img/paradise.png";

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
				places: [...prevState.places, {key: uuid(), name: place, image: { uri: "http://wallpaperose.com/wp-content/uploads/2013/08/Summer-Paradise-Wallpaper-1024x576.jpg"}}]
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
