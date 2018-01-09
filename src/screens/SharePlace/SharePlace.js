import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import AddPlace from "../../components/AddPlace";
import { addPlace } from "../../actions/places";

class SharePlaceScreen extends Component {
	constructor(props) {
		super(props);
		this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
	}

	onNavigatorEvent = event => {
		if (event.type === "NavBarButtonPress") {
			if (event.id === "sideDrawerButton") {
				this.props.navigator.toggleDrawer({
                    side: "left"
                });
			}
		}
	};

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
