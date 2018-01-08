import { createStore, combineReducers } from "redux";
import placesReducer from "../reducers/places";

const configureStore = () => {
	const rootReducer = combineReducers({
		places: placesReducer
	});
	const store = createStore(rootReducer);
	return store;
};

export default configureStore;
