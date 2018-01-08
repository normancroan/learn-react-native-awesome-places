import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default class App extends React.Component {
	state = {
		placeNameInput: "",
		places: []
	};

	onPlaceNameChange = placeNameInput => {
		this.setState({ placeNameInput });
	};

	onPlaceNameSubmit = () => {
		if (this.state.placeNameInput.trim() === "") {
			return;
		}

		this.setState(prevState => {
			return {
				placeNameInput: "",
				places: [...prevState.places, prevState.placeNameInput]
			};
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.addPlaceContainer}>
					<TextInput
						style={styles.addPlaceInput}
						value={this.state.placeNameInput}
						onChangeText={this.onPlaceNameChange}
						placeholder="An awesome place"
					/>
					<Button
						style={styles.addPlaceButton}
						title="Add"
						onPress={this.onPlaceNameSubmit}
					/>
				</View>
				<View>{this.state.places.map((place, i) => <Text key={i}>{place}</Text>)}</View>
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
	},
	addPlaceContainer: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	addPlaceInput: {
		width: "70%"
	},
	addPlaceButton: {
		width: "30%"
	}
});
