import React from "react";
import { FlatList, StyleSheet } from "react-native";
import PlacesListItem from "./PlacesListItem";

const PlacesList = props => (
    <FlatList 
        style={styles.placesList}
        data={props.places}
        renderItem={({item}) => (
            <PlacesListItem 
                key={item.key}
                item={item.name}
                image={item.image}
                onItemPressed={() => props.handleSelectPlace(item.key)}
            />
        )}
    />
);

const styles = StyleSheet.create({
    placesList: {
        width: "100%"
    }
})

export default PlacesList;
