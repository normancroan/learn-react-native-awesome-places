import { createStore, combineReducers, compose } from "redux";
import placesReducer from "../reducers/places";

const rootReducer = combineReducers({
	places: placesReducer
});

let composeEnhancers = compose;

//this lets us connect Redux to react native debugger (https://github.com/jhen0409/react-native-debugger/blob/master/docs/redux-devtools-integration.md)
if (__DEV__) {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
	return createStore(rootReducer, composeEnhancers());
};

export default configureStore;
