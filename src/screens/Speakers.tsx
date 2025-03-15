import { Menu } from "@tamagui/lucide-icons";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { Card, Image, Text, View } from "tamagui";

const Speakers = () => {
  const [selected, setSelected] = useState(0);

  const speakers = [
    {
      id: 1,
      name: "Speaker 1",
      role: "SPEAKER",
      image: require("../../assets/speaker1.png"),
    },
    {
      id: 2,
      name: "Speaker 1",
      role: "SPEAKER",
      image: require("../../assets/speaker2.png"),
    },
  ];

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
          mt="$5"
        >
          <Menu size={32} color="#D11C2F" />
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

        {/* Title Left-Aligned */}
        <View width="100%" paddingHorizontal="$4" marginTop="$5">
          <Text
            fontSize="$9"
            fontWeight="bold"
            textAlign="left"
            color="#D11C2F"
          >
            Speakers
          </Text>
        </View>

        {/* Speaker Cards */}
        <View
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          paddingHorizontal="$2"
          gap="$4"
          marginTop="$5"
        >
          {speakers.map((speaker) => (
            <Card
              key={speaker.id}
              width="45%"
              borderRadius="$4"
              padding="$3"
              alignItems="center"
              shadowColor="rgba(0,0,0,0.2)"
              shadowRadius="$2"
              shadowOpacity={0.2}
              onPress={() => setSelected(speaker.id)}
            >
              <Image
                source={speaker.image}
                width="100%"
                height={150}
                borderRadius="$4"
                objectFit="cover"
              />
              <Text
                fontSize="$3"
                fontWeight="bold"
                color="#D11C2F"
                marginTop="$2"
              >
                {speaker.role}
              </Text>
              <Text fontSize="$5" fontWeight="bold">
                {speaker.name}
              </Text>
            </Card>
          ))}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Speakers;
