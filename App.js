import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default class App extends React.Component {
	state = {
		placeName: ""
	};

	onPlaceNameChange = placeName => {
		this.setState({ placeName });
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.addPlaceContainer}>
					<TextInput
						style={styles.addPlaceInput}
						value={this.state.placeName}
						onChangeText={this.onPlaceNameChange}
						placeholder="An awesome place"
          />
          <Button style={styles.addPlaceButton} title="Add"/>
				</View>
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
    width:"70%"
  },
  addPlaceButton: {
    width:"30%"
  }
});
