import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login"; // Adjust the path as necessary
import Home from "../screens/Home";   // Adjust the path as necessary
import Speakers from "../screens/Speakers";

const ScreenStack = createStackNavigator();

const ScreenNavigator = () => {
  return (
    <ScreenStack.Navigator initialRouteName="Speakers" screenOptions={{ headerShown: false }}>
      <ScreenStack.Screen name="Home" component={Home}/>
      <ScreenStack.Screen name="Speakers" component={Speakers}/>
    </ScreenStack.Navigator>
  );
};

export default ScreenNavigator;
