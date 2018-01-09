import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import AddPlace from "../../components/AddPlace";
import { addPlace } from "../../actions/places";

class SharePlaceScreen extends Component {
	placeAddedHandler = placeName => {
		this.props.submitFunction(placeName);
	};

	render() {
		return (
			<View>
				<AddPlace submitFunction={this.placeAddedHandler} />
			</View>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		submitFunction: placeName => dispatch(addPlace(placeName))
	};
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
