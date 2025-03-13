import { NavigationContainer } from "@react-navigation/native";
import { TamaguiProvider } from "@tamagui/core";
import MainNavigator from "./src/navigation/MainNavigator";
import { config } from "./tamagui.config";

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </TamaguiProvider>
  );
}
