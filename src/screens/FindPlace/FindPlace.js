import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import PlacesList from "../../components/PlacesList";

class FindPlaceScreen extends Component {
	render() {
		return (
			<View>
				<PlacesList places={this.props.places}/>
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
