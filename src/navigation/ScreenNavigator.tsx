import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Speakers from "../screens/Speakers";
import Committee from "../screens/Committee";
import Sponsors from "../screens/Sponsors";
import SpeakerDetail from "../screens/SpeakerDetail";
import IndustryExperts from "../screens/IndustryExperts";
import IndustryExpertDetail from "../screens/IndustryExpertDetails";
import ConnectForMe from "../screens/ConnectForMe";

const ScreenStack = createStackNavigator();

const ScreenNavigator = () => {
  return (
    <ScreenStack.Navigator
      initialRouteName="ConnectForMe"
      screenOptions={{ headerShown: false }}
    >
      <ScreenStack.Screen name="Home" component={Home} />
      <ScreenStack.Screen name="Speakers" component={Speakers} />
      <ScreenStack.Screen name="Login" component={Login} />
      <ScreenStack.Screen name="Committee" component={Committee} />
      <ScreenStack.Screen name="Sponsors" component={Sponsors} />
      <ScreenStack.Screen name="SpeakerDetail" component={SpeakerDetail} />
      <ScreenStack.Screen name="IndustryExperts" component={IndustryExperts} />
      <ScreenStack.Screen name="IndustryExpertDetail" component={IndustryExpertDetail} />
      <ScreenStack.Screen name="ConnectForMe" component={ConnectForMe} />

    </ScreenStack.Navigator>
  );
};

export default ScreenNavigator;
