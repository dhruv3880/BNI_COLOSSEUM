import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Committee from "../screens/Committee";
import ConnectForMe from "../screens/ConnectForMe";
import DetailsPage from "../screens/DetailsPage";
import Exhibitors from "../screens/Exhibitors";
import ExhibitorsDetails from "../screens/ExhibitorsDetails";
import GenerateCode from "../screens/GenerateCode";
import Home from "../screens/Home";
import IndustryExpertDetail from "../screens/IndustryExpertDetails";
import IndustryExperts from "../screens/IndustryExperts";
import Login from "../screens/Login";
import SpeakerDetail from "../screens/SpeakerDetail";
import Speakers from "../screens/Speakers";
import Sponsors from "../screens/Sponsors";

const ScreenStack = createStackNavigator();

const ScreenNavigator = () => {
  return (
    <ScreenStack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <ScreenStack.Screen name="Committee" component={Committee} />
      <ScreenStack.Screen name="ConnectForMe" component={ConnectForMe} />
      <ScreenStack.Screen name="DetailsPage" component={DetailsPage} />
      <ScreenStack.Screen name="Exhibitors" component={Exhibitors} />
      <ScreenStack.Screen
        name="ExhibitorsDetails"
        component={ExhibitorsDetails}
      />
      <ScreenStack.Screen name="GenerateCode" component={GenerateCode} />
      <ScreenStack.Screen name="Home" component={Home} />
      <ScreenStack.Screen
        name="IndustryExpertDetail"
        component={IndustryExpertDetail}
      />
      <ScreenStack.Screen name="IndustryExperts" component={IndustryExperts} />
      <ScreenStack.Screen name="Login" component={Login} />
      <ScreenStack.Screen name="SpeakerDetail" component={SpeakerDetail} />
      <ScreenStack.Screen name="Speakers" component={Speakers} />
      <ScreenStack.Screen name="Sponsors" component={Sponsors} />
    </ScreenStack.Navigator>
  );
};

export default ScreenNavigator;
