import { createStackNavigator } from "@react-navigation/stack";
import ScreenNavigator from "./ScreenNavigator";

export type RootStackParamList = {
  Login: undefined;
  GenerateCode: undefined;
  Screens: undefined;
  DetailsPage: undefined;
  Home: undefined;
  Speakers: undefined;
  Exhibitors: undefined;
  ExhibitorsDetails: { id: string };
  Sponsors: undefined;
  Committee: undefined;
  IndustryExperts: undefined;
  ConnectForMe: undefined;
  Appointments: undefined;
  ChatHistory: undefined;
};

const stack = createStackNavigator<RootStackParamList>();
const MainNavigator = () => {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="Screens" component={ScreenNavigator} />
    </stack.Navigator>
  );
};

export default MainNavigator;
