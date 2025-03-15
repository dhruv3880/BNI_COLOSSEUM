import React from "react";
import { SafeAreaView } from "react-native";
import { View, Text, Image, Card, Button } from "tamagui";
import { Menu } from "@tamagui/lucide-icons";

const IndustryExpertDetail = () => {
  const expertiseAreas = ["IT Services", "Architect", "Finance", "Construction"];

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
          <Text fontSize="$9" fontWeight="bold" textAlign="center" color="#D11C2F">
            Expert Details
          </Text>
          <View bw={"$0.5"} borderColor={"red"} br={50} padding={"$1"} alignItems="center" justifyContent="center">
            <Image source={require("../../assets/speaker2.png")} br={50} height={"$4"} width={"$4"} />
          </View>
        </View>

        {/* Expert Profile Card */}
        <Card
          width="90%"
          height="20%"
          alignSelf="center"
          padding="$4"
          borderRadius="$4"
          shadowColor="rgba(0,0,0,0.1)"
          shadowRadius="$2"
          shadowOpacity={0.2}
          flexDirection="row"
          alignItems="center"
          mt={10}
        >
          <Image
            source={require("../../assets/speaker1.png")}
            width={70}
            height={70}
            borderRadius={50}
            marginRight="$3"
          />
          <View>
            <Text fontSize="$6" fontWeight="bold">Shiv Khera</Text>
            <Text fontSize="$4" mt={5} color="gray">Industry Expert</Text>
            <Text fontSize="$4" mt={5} color="#D11C2F">Dhanbad, India</Text>
          </View>
        </Card>

        {/* Looking For Section */}
        <View width="90%" alignSelf="center" marginTop="$4">
          <Text fontSize="$6" fontWeight="bold" marginBottom="$3">
            Looking for
          </Text>

          {expertiseAreas.map((area, index) => (
            <View key={index} flexDirection="row" alignItems="center" justifyContent="space-between" marginBottom="$3">
              <View
                width="70%"
                padding="$3"
                borderRadius="$2"
                bg="$background"
                borderColor="#DDDDDD"
                borderWidth={1}
              >
                <Text fontSize="$5" color="black">{area}</Text>
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
      </SafeAreaView>
    </View>
  );
};

export default IndustryExpertDetail;
