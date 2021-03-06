import uuid from "uuid";

//ADD_PLACE
export const addPlace = placeName => {
	return {
		type: "ADD_PLACE",
		place: {
			key: uuid(),
			name: placeName,
			image: {
				uri:
					"http://wallpaperose.com/wp-content/uploads/2013/08/Summer-Paradise-Wallpaper-1024x576.jpg"
			}
		}
	};
};
//REMOVE_PLACE
export const removePlace = key => {
	return {
		type: "REMOVE_PLACE",
		key
	};
};