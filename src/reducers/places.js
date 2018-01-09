const placesReducerInitialState = {
	places: []
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
				places: [...state.places.filter(place => place.key !== action.key)]
			};
		default:
			return state;
	}
};

export default placesReducer;
