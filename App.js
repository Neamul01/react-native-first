import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ImageScreen from "./src/screens/ImageScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SqareScreen from "./src/screens/SqareScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    Component: ComponentScreen,
    Image: ImageScreen,
    Color: ColorScreen,
    Square: SqareScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
