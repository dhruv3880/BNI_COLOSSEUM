// import { Menu } from "@tamagui/lucide-icons";
// import React from "react";
// import { SafeAreaView } from "react-native";
// import { Image, ScrollView, Text, View } from "tamagui";

// const Exhibitors = () => {
//   const gridItems = [
//     { row: "A", count: 6, perRow: 3 }, // "A" items → 3 per row
//     { row: "B", count: 8, perRow: 4 }, // "B" items → 4 per row
//   ];
//   return (
//     <View flex={1} bg="$background" px="$4" pt={"$5"}>
//       <SafeAreaView style={{ flex: 1 }}>
//         <ScrollView>
//           <View
//             flexDirection="row"
//             alignItems="center"
//             justifyContent="space-between"
//             width="100%"
//             paddingHorizontal="$3"
//             mt="$5"
//           >
//             <Menu size={32} color="#D11C2F" />
//             <View
//               bw={"$0.5"}
//               borderColor={"red"}
//               br={50}
//               padding={"$1"}
//               alignItems="center"
//               justifyContent="center"
//             >
//               <Image
//                 src={require("../../assets/speaker2.png")}
//                 br={50}
//                 height={"$4"}
//                 width={"$4"}
//               />
//             </View>
//           </View>
//           <View width="100%" paddingHorizontal="$4" marginTop="$5">
//             <Text
//               fontSize="$9"
//               fontWeight="bold"
//               textAlign="left"
//               color="#D11C2F"
//             >
//               Exhibitors
//             </Text>
//           </View>
//           <View
//             flex={1}
//             justifyContent="center"
//             alignItems="center"
//             padding="$4"
//           >
//             {gridItems.map((section, rowIndex) => {
//               const rows = Math.ceil(section.count / section.perRow); // Calculate number of rows needed
//               return (
//                 <View
//                   key={rowIndex}
//                   marginBottom={rowIndex === 0 ? "$6" : "$3"}
//                 >
//                   {[...Array(rows)].map((_, rowIdx) => (
//                     <View
//                       key={rowIdx}
//                       flexDirection="row"
//                       justifyContent="center"
//                       gap="$4"
//                       marginBottom="$2"
//                     >
//                       {Array.from({
//                         length: Math.min(
//                           section.perRow,
//                           section.count - rowIdx * section.perRow
//                         ),
//                       }).map((_, index) => (
//                         <View
//                           key={`${section.row}-${
//                             rowIdx * section.perRow + index
//                           }`}
//                           width={80}
//                           height={80}
//                           backgroundColor="white"
//                           borderRadius="$4"
//                           shadowColor="black"
//                           shadowRadius="$2"
//                           alignItems="center"
//                           justifyContent="center"
//                           borderWidth={1}
//                           borderColor="#ddd"
//                         >
//                           {/* Gradient Box */}
//                           <View
//                             width="100%"
//                             height="70%"
//                             borderTopLeftRadius="$4"
//                             borderTopRightRadius="$4"
//                             backgroundColor="linear-gradient(180deg, red, blue)"
//                           />
//                           {/* Label */}
//                           <Text fontSize="$5" fontWeight="bold" marginTop="$2">
//                             {section.row}
//                             {rowIdx * section.perRow + index + 1}
//                           </Text>
//                         </View>
//                       ))}
//                     </View>
//                   ))}
//                 </View>
//               );
//             })}
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </View>
//   );
// };

// export default Exhibitors;

import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Menu } from "@tamagui/lucide-icons";
import React from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { Image, ScrollView, Text, View } from "tamagui";
import { RootStackParamList } from "../navigation/MainNavigator";

const Exhibitors = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  const gridItems = [
    { row: "A", count: 6, perRow: 3, size: 80 }, // "A" items → 3 per row
    { row: "B", count: 8, perRow: 4, size: 60 }, // "B" items → 4 per row, but smaller
  ];

  return (
    <View flex={1} bg="$background" px="$4" pt="$5">
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          {/* Header */}
          <View
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            paddingHorizontal="$3"
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

          {/* Title */}
          <View width="100%" paddingHorizontal="$4" marginTop="$5">
            <Text
              fontSize="$9"
              fontWeight="bold"
              textAlign="left"
              color="#D11C2F"
            >
              Exhibitors
            </Text>
          </View>

          {/* Grid Wrapper */}
          <View flex={1} paddingHorizontal="$4" marginTop="$4">
            {gridItems.map((section, rowIndex) => {
              return (
                <View
                  key={rowIndex}
                  marginBottom={rowIndex === 0 ? "$6" : "$3"}
                  alignSelf="center"
                  width="100%" // Ensures it fits inside padding
                >
                  <View
                    flexDirection="row"
                    flexWrap="wrap"
                    justifyContent="space-between"
                    gap="$3"
                    maxWidth="100%"
                  >
                    {Array.from({ length: section.count }).map((_, index) => (
                      <TouchableOpacity
                        key={`${section.row}-${index}`}
                        onPress={() =>
                          navigate("ExhibitorsDetails", {
                            id: `${section.row}${index + 1}`,
                          })
                        } // Navigate with ID
                        activeOpacity={0.7}
                      >
                        <View
                          width={section.size}
                          height={section.size}
                          backgroundColor="white"
                          borderRadius="$4"
                          shadowColor="black"
                          shadowRadius="$2"
                          alignItems="center"
                          justifyContent="center"
                          borderWidth={1}
                          borderColor="#ddd"
                        >
                          {/* Gradient Box */}
                          <View
                            width="100%"
                            height="70%"
                            borderTopLeftRadius="$4"
                            borderTopRightRadius="$4"
                            backgroundColor="linear-gradient(180deg, red, blue)"
                          />
                          {/* Label */}
                          <Text fontSize="$5" fontWeight="bold" marginTop="$2">
                            {section.row}
                            {index + 1}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Exhibitors;
