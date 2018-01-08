const placesReducerInitialState = {
	places: [],
	selectedPlace: null
};

const placesReducer = (state = placesReducerInitialState, action) => {
	switch (action.type) {
		case "ADD_PLACE":
			return {
				...state,
				places: [...state.places, action.place]
			};
		case "REMOVE_PLACE":
			return {
				...state,
				places: [...state.places.filter(place => place.key !== state.selectedPlace.key)]
			};
		case "SELECT_PLACE":
			return {
				...state,
				selectedPlace: state.places.find(place => place.key === action.key)
			};
		case "DESELECT_PLACE":
			return {
				...state,
				selectedPlace: null
			};
		default:
			return state;
	}
};

export default placesReducer;
