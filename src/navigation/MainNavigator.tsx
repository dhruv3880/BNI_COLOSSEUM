import { createStackNavigator } from "@react-navigation/stack";
import GenerateCode from "../screens/GenerateCode";
import ScreenNavigator from "./ScreenNavigator";

export type RootStackParamList = {
  Login: undefined;
  GenerateCode: undefined;
  Screens: undefined;
};

const stack = createStackNavigator<RootStackParamList>();
const MainNavigator = () => {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }} >
      <stack.Screen name="Screens" component={ScreenNavigator} />
      <stack.Screen name="GenerateCode" component={GenerateCode} />
    </stack.Navigator>
  );
};

export default MainNavigator;
