import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Menu } from "@tamagui/lucide-icons";
import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Image, Text, View } from "tamagui";
import { RootStackParamList } from "../navigation/MainNavigator";

const Home = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View flex={1} bg="$background" px="$3" pt={"$5"}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            paddingHorizontal="$4"
            mt="$5"
          >
            <Menu size={32} color="#D11C2F" />
            <Text fontSize="$9" fontWeight="bold">
              It’s Me
            </Text>
            <View
              bw={"$0.5"}
              borderColor={"red"}
              br={50}
              padding={"$1"}
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={require("../../assets/speaker2.png")}
                br={50}
                height={"$4"}
                width={"$4"}
              />
            </View>
          </View>

          {/* QR Code Section */}
          <View alignItems="center" justifyContent="center" mt="$4">
            <Image
              source={require("../../assets/qr.png")}
              width={120}
              height={120}
              objectFit="contain"
              marginBottom="$4"
            />
          </View>
          <View
            flexWrap="wrap"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            width="100%"
            gap={12}
            marginTop={20}
          >
            {[
              "Speakers",
              "Exhibitors",
              "Sponsors",
              "Committee",
              "Industry Experts",
              "Connect For Me",
              "Appointments",
              "Chat History",
            ].map((label) => (
              <View
                key={label}
                width="45%"
                height={100}
                backgroundColor="#D11C2F"
                borderRadius={12}
                paddingVertical={10}
                marginVertical={5}
                justifyContent="center"
                alignItems="center"
                onPress={() => {
                  const screen = label.replace(
                    /\s+/g,
                    ""
                  ) as keyof RootStackParamList;
                  navigate(screen as any);
                }}
              >
                <Text
                  color="#FFFFFF"
                  fontSize={18}
                  textAlign="center"
                  flexWrap="wrap"
                >
                  {label}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;
