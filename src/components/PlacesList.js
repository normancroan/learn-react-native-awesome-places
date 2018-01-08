import React from "react";
import { View, StyleSheet } from "react-native";
import PlacesListItem from "./PlacesListItem";

const PlacesList = props => (
	<View style={styles.placesList}>
        {props.places.map((place, i) => <PlacesListItem key={i} item={place}/>)}
	</View>
);

const styles = StyleSheet.create({
    placesList: {
        width: "100%"
    }
})

export default PlacesList;
