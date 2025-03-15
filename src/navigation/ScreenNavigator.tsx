import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Speakers from "../screens/Speakers";
import Committee from "../screens/Committee";
import Sponsors from "../screens/Sponsors";
import SpeakerDetail from "../screens/SpeakerDetail";

const ScreenStack = createStackNavigator();

const ScreenNavigator = () => {
  return (
    <ScreenStack.Navigator
      initialRouteName="SpeakerDetail"
      screenOptions={{ headerShown: false }}
    >
      <ScreenStack.Screen name="Home" component={Home} />
      <ScreenStack.Screen name="Speakers" component={Speakers} />
      <ScreenStack.Screen name="Login" component={Login} />
      <ScreenStack.Screen name="Committee" component={Committee} />
      <ScreenStack.Screen name="Sponsors" component={Sponsors} />
      <ScreenStack.Screen name="SpeakerDetail" component={SpeakerDetail} />
    </ScreenStack.Navigator>
  );
};

export default ScreenNavigator;
