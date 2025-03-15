import React from "react";
import { SafeAreaView } from "react-native";
import { View, Text, Image, Card } from "tamagui";
import { Menu } from "@tamagui/lucide-icons";

const SpeakerDetail = () => {
  return (
    <View flex={1} bg="$background" padding="$3">
      <SafeAreaView>
        {/* Header Section (Matching Committee Page Style) */}
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
            Speaker Details
          </Text>
          <View bw={"$0.5"} borderColor={"red"} br={50} padding={"$1"} alignItems="center" justifyContent="center">
            <Image source={require("../../assets/speaker2.png")} br={50} height={"$4"} width={"$4"} />
          </View>
        
        </View>

       

        {/* Speaker Card */}
        <Card
          width="90%"
          height="25%"
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
            <Text fontSize="$4" mt={5} color="gray">Professional Speaker</Text>
            <Text fontSize="$4" mt={5} color="#D11C2F">Dhanbad, India</Text>
          </View>
        </Card>

        {/* About Section */}
        <Card
          width="90%"
          alignSelf="center"
          padding="$4"
          borderRadius="$4"
          shadowColor="rgba(0,0,0,0.1)"
          shadowRadius="$2"
          shadowOpacity={0.2}
          marginTop="$4"
        >
          <Text fontSize="$6" fontWeight="bold" marginBottom="$2">About</Text>
          <Text fontSize="$4" color="gray">
            Shiv Khera is an Indian author, activist and motivational speaker, best known for his book,
             You Can Win. He launched a movement against caste-based reservation in India,
            founded an organization called Country First Foundation.
          </Text>
        </Card>
      </SafeAreaView>
    </View>
  );
};

export default SpeakerDetail;
