import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import ScreenNavigator from "./ScreenNavigator";

const stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="Screens" component={ScreenNavigator} />
    </stack.Navigator>
  );
};

export default MainNavigator;
