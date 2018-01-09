import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

const startTabs = () => {
	Promise.all([
		Icon.getImageSource("ios-search", 30),
		Icon.getImageSource("ios-share-outline", 30),
		Icon.getImageSource("ios-menu", 30)
	]).then(values => {
		Navigation.startTabBasedApp({
			tabs: [
				{
					label: "Find",
					screen: "awesome-places.FindPlaceScreen",
					title: "Find Place",
                    icon: values[0],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                title: "Menu Thing",
                                icon: values[2],
                                id: "sideDrawerButton"
                            }
                        ]
                    }
				},
				{
					label: "Share",
					screen: "awesome-places.SharePlaceScreen",
					title: "Share Place",
					icon: values[1],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                title: "Menu Thing",
                                icon: values[2],
                                id: "sideDrawerButton"
                            }
                        ]
                    }
				}
			],
			drawer: {
				left: {
					screen: "awesome-places.SideDrawerScreen"
				}
			}
		});
	});
};

export default startTabs;
