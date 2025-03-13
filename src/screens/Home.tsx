import React from "react";
import { SafeAreaView } from "react-native";
import { View, XStack, Text, Image, Button } from "tamagui";
import { Menu, User } from "@tamagui/lucide-icons";

const Home = () => {
  return (
    <View flex={1} bg="$background" padding="$3" paddingTop="$0">
      <SafeAreaView>
      <View
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          paddingHorizontal="$4"
          marginBottom="$4"
          mt={"$5"}
        >
          <Menu size={32} color="#D11C2F" />
          <Text fontSize="$9" fontWeight="bold">It’s Me</Text>
          <User size={32} color="black" />
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
        <XStack
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          width="100%"
          gap="$3"
          mt={"$5"}
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
            <Button
              key={label}
              width="45%"
              height="30%"
              fontSize={"$7"}
              backgroundColor="#D11C2F"
              borderRadius="$6"
              paddingVertical="$4"
              marginVertical="$2"
            >
              <Text
                color="#FFFFFF"
                fontSize="$7"
                textAlign="center"
                flexWrap="wrap"
              >
                {label}
              </Text>
            </Button>
          ))}
        </XStack>
      </SafeAreaView>
    </View>
  );
};

export default Home;
