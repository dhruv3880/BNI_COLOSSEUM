import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { View, Text, Image, Card } from "tamagui";
import { Menu } from "@tamagui/lucide-icons";

const Sponsors = () => {
  const sponsors = {
    title: {
      name: "Acme Corporation",
      description: "Our mission is to enhance growth and drive innovation in the industry.",
      image: require("../../assets/placeholder.png"),
    },
    gold: [
      { id: 1, name: "TechGiant Inc.", image: require("../../assets/placeholder.png") },
      { id: 2, name: "Future Systems", image: require("../../assets/placeholder.png") },
    ],
    silver: [
      { id: 1, name: "Innovation Labs", image: require("../../assets/placeholder.png") },
      { id: 2, name: "Digital Solutions", image: require("../../assets/placeholder.png") },
      { id: 3, name: "Cloud Experts", image: require("../../assets/placeholder.png") },
    ],
    associate: [
      { id: 1, name: "Partner 1", image: require("../../assets/placeholder.png") },
      { id: 2, name: "Partner 2", image: require("../../assets/placeholder.png") },
      { id: 3, name: "Partner 3", image: require("../../assets/placeholder.png") },
      { id: 4, name: "Partner 4", image: require("../../assets/placeholder.png") },
    ],
  };

  return (
    <View flex={1} bg="$background" padding="$3">
      <SafeAreaView>
        {/* Header Section with Red Hamburger and Circular Profile Image */}
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
          <View bw={"$0.5"} borderColor={"red"} br={50} padding={"$1"} alignItems="center" justifyContent="center">
            <Image source={require("../../assets/speaker2.png")} br={50} height={"$4"} width={"$4"} />
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}  >
          {/* Title Sponsor */}
          <Text fontSize="$9" fontWeight="bold" paddingHorizontal="$4" marginBottom="$2" color="#D11C2F">
            Our Sponsors
          </Text>
          
          <Text fontSize="$7" fontWeight="bold" paddingHorizontal="$4" marginBottom="$4" mt={"$5"}>
            Title Sponsor
          </Text>
          <Card
            width="90%"
            alignSelf="center"
            padding="$4"
            borderRadius="$4"
            shadowColor="rgba(0,0,0,0.1)"
            shadowRadius="$2"
            height={350

            }
            shadowOpacity={0.2}
          >
            <Image source={sponsors.title.image} width="100%" height={250} borderRadius="$1" objectFit="cover" />
            <Text fontSize="$6" fontWeight="bold" textAlign="center" marginTop="$2">
              {sponsors.title.name}
            </Text>
            <Text fontSize="$4" textAlign="center" color="gray" marginTop="$2">
              {sponsors.title.description}
            </Text>
          </Card>

          {/* Gold Sponsors */}
          <Text fontSize="$7" fontWeight="bold" paddingHorizontal="$4" marginTop="$8" marginBottom="$4">
            Gold Sponsors
          </Text>
          {sponsors.gold.map((sponsor) => (
            <Card
              key={sponsor.id}
              width="50%"
              height="9%"
              alignSelf="center"
              padding="$4"
              borderRadius="$4"
              shadowColor="rgba(0,0,0,0.1)"
              shadowRadius="$2"
              shadowOpacity={0.2}
              marginBottom="$3"
            >
              <Image source={sponsor.image} width="100%" height={130} borderRadius="$4" objectFit="cover" />
              <Text fontSize="$6" fontWeight="bold" textAlign="center" marginTop="$4">
                {sponsor.name}
              </Text>
            </Card>
          ))}

          {/* Silver Sponsors */}
          <Text fontSize="$7" fontWeight="bold" paddingHorizontal="$4" marginTop="$6" marginBottom="$4">
            Silver Sponsors
          </Text>
          {sponsors.silver.map((sponsor) => (
            <Card
              key={sponsor.id}
              width="50%"
              height="9%"
              alignSelf="center"
              padding="$4"
              borderRadius="$4"
              shadowColor="rgba(0,0,0,0.1)"
              shadowRadius="$2"
              shadowOpacity={0.2}
              marginBottom="$3"
            >
              <Image source={sponsor.image} width="100%" height={130} borderRadius="$4" objectFit="cover" />
              <Text fontSize="$6" fontWeight="bold" textAlign="center" marginTop="$4">
                {sponsor.name}
              </Text>
            </Card>
          ))}

          {/* Associate Sponsors (2x2 Grid) */}
          <Text fontSize="$7" fontWeight="bold" paddingHorizontal="$4" marginTop="$6" marginBottom="$4">
            Associate Sponsors
          </Text>
          <View flexDirection="row" flexWrap="wrap" justifyContent="space-evenly">
            {sponsors.associate.map((sponsor) => (
              <Card
                key={sponsor.id}
                width="35%"
                padding="$3"
                borderRadius="$4"
                shadowColor="rgba(0,0,0,0.1)"
                shadowRadius="$2"
                shadowOpacity={0.2}
                marginBottom="$3"
              >
                <Image source={sponsor.image} width="100%" height={80} borderRadius="$4" objectFit="cover" />
                <Text fontSize="$5" fontWeight="bold" textAlign="center" marginTop="$2">
                  {sponsor.name}
                </Text>
              </Card>
            ))}
          </View>


          
          <View height={"$14"}/>


        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Sponsors;
