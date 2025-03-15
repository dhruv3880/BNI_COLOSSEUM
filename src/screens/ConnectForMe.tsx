import React from "react";
import { SafeAreaView } from "react-native";
import { View, Text, Image, Button } from "tamagui";
import { Menu } from "@tamagui/lucide-icons";

const ConnectForMe = () => {
  const categories = {
    Exhibitor: ["IT Services"],
    Industry: ["Architect", "Finance"],
    Members: ["Construction", "Construction", "Construction"],
  };

  return (
    <View flex={1} bg="$background" padding="$3">
      <SafeAreaView>
        {/* Header Section */}
        <View
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          paddingHorizontal="$4"
          marginBottom="$4"
          mt="$5"
        >
          <Menu size={32} color="#D11C2F" />
          <View bw={"$0.5"} borderColor="red" br={50} padding={"$1"} alignItems="center" justifyContent="center">
            <Image source={require("../../assets/speaker2.png")} br={50} height={"$4"} width={"$4"} />
          </View>
        </View>

        {/* Title */}
        <View width="90%" alignSelf="center" marginBottom="$3">
          <Text fontSize="$9" fontWeight="bold" color="#D11C2F">Connect for Me</Text>
        </View>

        {/* Sections */}
        <View width="90%" alignSelf="center">
          {Object.entries(categories).map(([category, items], index) => (
            <View key={index} marginBottom="$4">
              {/* Section Title */}
              <Text fontSize="$6" fontWeight="bold" marginBottom="$3">
                {category}
              </Text>

              {/* List Items */}
              {items.map((item, idx) => (
                <View
                  key={idx}
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                  marginBottom="$3"
                >
                  <View
                    width="70%"
                    padding="$3"
                    borderRadius="$2"
                    bg="$background"
                    borderColor="#DDDDDD"
                    borderWidth={1}
                  >
                    <Text fontSize="$5" color="black">{item}</Text>
                  </View>
                  <Button
                    backgroundColor="#D11C2F"
                    borderRadius="$2"
                    paddingVertical="$3"
                    width="26%"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text color="#FFFFFF" fontWeight="light">Connect</Text>
                  </Button>
                </View>
              ))}
            </View>
          ))}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ConnectForMe;
