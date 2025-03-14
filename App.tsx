import { NavigationContainer } from "@react-navigation/native";
import { TamaguiProvider } from "@tamagui/core";
import { PortalProvider } from "tamagui";
import MainNavigator from "./src/navigation/MainNavigator";
import tamaguiConfig from "./tamagui.config";

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <NavigationContainer>
        <PortalProvider>
          <MainNavigator />
        </PortalProvider>
      </NavigationContainer>
    </TamaguiProvider>
  );
}
