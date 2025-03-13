import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Speakers from "../screens/Speakers";

const ScreenStack = createStackNavigator();

const ScreenNavigator = () => {
  return (
    <ScreenStack.Navigator
      initialRouteName="Speakers"
      screenOptions={{ headerShown: false }}
    >
      <ScreenStack.Screen name="Home" component={Home} />
      <ScreenStack.Screen name="Speakers" component={Speakers} />
      <ScreenStack.Screen name="Login" component={Login} />
    </ScreenStack.Navigator>
  );
};

export default ScreenNavigator;
