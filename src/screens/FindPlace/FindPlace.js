import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import PlacesList from "../../components/PlacesList";

class FindPlaceScreen extends Component {
	handleSelectPlace = key => {
		const targetPlace = this.props.places.find(place => place.key === key);

		this.props.navigator.push({
			screen: "awesome-places.PlaceDetailScreen",
			title: targetPlace.name,
			passProps: {
				selectedPlace: targetPlace
			}
		});
	};

	render() {
		return (
			<View>
				<PlacesList
					places={this.props.places}
					handleSelectPlace={this.handleSelectPlace}
				/>
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		places: state.places.places
	};
};

export default connect(mapStateToProps)(FindPlaceScreen);
