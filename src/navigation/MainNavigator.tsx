import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";

const stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="Login" component={Login} />
    </stack.Navigator>
  );
};

export default MainNavigator;
