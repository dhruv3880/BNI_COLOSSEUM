import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";
import { Keyboard, SafeAreaView, TextInput } from "react-native";
import { Button, Image, Input, Text, View } from "tamagui";
import { RootStackParamList } from "../navigation/MainNavigator";
const Login = () => {
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleKeyPress = (e: any, index: any) => {
    if (e.nativeEvent.key === "Backspace" && !e.target.value) {
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };
  const handleChangeText = (text: string, index: number) => {
    if (text && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View flex={1} bg={"white"} onPress={() => Keyboard.dismiss()}>
      <SafeAreaView>
        <View
          height={"35%"}
          bg={"#FFF8C5"}
          alignItems="center"
          justifyContent="center"
        >
          <Image
            mt={"$5"}
            src={require("../assets/bnilogo.png")}
            width={"60%"}
            height={"60%"}
            objectFit={"contain"}
          />
        </View>
        <Text
          fontWeight={"bold"}
          fontSize={"$10"}
          mt={"$4"}
          textAlign={"center"}
        >
          Login
        </Text>
        <View mt={"$3"} p={"$4"}>
          <Text fontSize={"$6"} mb={"$2"}>
            Phone No
          </Text>
          <View flexDirection="row">
            <Input bg={"white"} btrr={"$0"} bbrr={"$0"} mr={"$3"}>
              +91(IND)
            </Input>
            <Input
              bg={"white"}
              btlr={"$0"}
              bblr={"$0"}
              placeholder={"Enter your phone number"}
              keyboardType="phone-pad"
              flex={1}
            />
          </View>
          <View flexDirection="row" justifyContent="space-between" mt={"$3.5"}>
            {[...Array(6)].map((_, index) => (
              <Input
                key={index}
                height={"$4"}
                width={"$4"}
                bg={"white"}
                ref={(el) => (inputRefs.current[index] = el)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                onChangeText={(text) => handleChangeText(text, index)}
                maxLength={1}
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                keyboardType="number-pad"
              />
            ))}
          </View>
          <Text
            mt={"$2"}
            textAlign="right"
            color={"#008080"}
            textDecorationLine={"underline"}
            fontSize={"$5"}
            onPress={() => navigate("GenerateCode")}
          >
            Generate Code
          </Text>
          <Button bg={"#D11C2F"} color={"white"} fontSize={"$6"} mt={"$4"}>
            Log In
          </Button>

          <View
            mt={"$10"}
            flexDirection={"row"}
            justifyContent={"space-evenly"}
          >
            <Image
              src={require("../assets/marwiz-logo.png")}
              height={"$6"}
              width={"$6"}
              objectFit={"contain"}
            />
            <Image
              src={require("../assets/bweb-logo.png")}
              height={"$6"}
              width={"$12"}
              objectFit={"contain"}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Login;
