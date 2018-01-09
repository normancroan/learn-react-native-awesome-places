import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

const startTabs = () => {
    const searchIcon = Icon.getImageSource("ios-search", 30, )
    const shareIcon = Icon.getImageSource("ios-share-outline", 30)
    Promise.all([searchIcon, shareIcon]).then(values => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    label: "Find",
                    screen: "awesome-places.FindPlaceScreen",
                    title: "Find Place",
                    icon: values[0]
                },
                {
                    label: "Share",
                    screen: "awesome-places.SharePlaceScreen",
                    title: "Share Place",
                    icon: values[1]
                }
            ]
        });
    })
};

export default startTabs;
