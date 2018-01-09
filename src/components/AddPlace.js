import React from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

class AddPlace extends React.Component {
    state = {
        placeNameInput: ""
    }

	onPlaceNameChange = placeNameInput => {
		this.setState({ placeNameInput });
	};

	onSubmitPressed = () => {
		this.props.submitFunction(this.state.placeNameInput);
		this.setState({
			placeNameInput: ""
		});
	};

	render() {
		return (
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
					onPress={this.onSubmitPressed}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
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

export default AddPlace;