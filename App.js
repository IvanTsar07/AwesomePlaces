import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux';

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';
import SideDrawer from "./src/screens/SideDrawer/SideDrower";
import configureStore  from "./src/store/configureStore";

const store = configureStore();

// Register Screens
Navigation.registerComponent("awesome-place.AuthScreen", 
  () => AuthScreen, 
  store,
  Provider
);
Navigation.registerComponent("awesome-place.SharePlaceScreen", 
  () => SharePlaceScreen, 
  store, 
  Provider
);

Navigation.registerComponent("awesome-place.FindPlaceScreen", 
  () => FindPlaceScreen, 
  store, 
  Provider
);

Navigation.registerComponent("awesome-place.PlaceDetailScreen", 
  () => PlaceDetailScreen,
  store,
  Provider
);

Navigation.registerComponent("awesome-place.SideDrawer", 
  () => SideDrawer
);

// Start App
Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-place.AuthScreen",
    title: "Login"
  }
})