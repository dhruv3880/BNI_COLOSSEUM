import { NavigationContainer } from "@react-navigation/native";
import { TamaguiProvider } from "@tamagui/core";
import MainNavigator from "./src/navigation/MainNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <TamaguiProvider>
        <MainNavigator />
      </TamaguiProvider>
    </NavigationContainer>
  );
}
