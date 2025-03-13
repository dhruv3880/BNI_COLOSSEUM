import { createStackNavigator } from "@react-navigation/stack";
import GenerateCode from "../screens/GenerateCode";
import Login from "../screens/Login";

export type RootStackParamList = {
  Login: undefined;
  GenerateCode: undefined;
};

const stack = createStackNavigator<RootStackParamList>();
const MainNavigator = () => {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="Login" component={Login} />
      <stack.Screen name="GenerateCode" component={GenerateCode} />
    </stack.Navigator>
  );
};

export default MainNavigator;
