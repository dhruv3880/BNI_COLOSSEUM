import React, { useEffect, useRef, useState } from "react";
import { Keyboard, SafeAreaView, TextInput } from "react-native";
import { Button, Image, Input, Text, View } from "tamagui";

const GenerateCode = () => {
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const [otpSent, setOtpSent] = useState(false);
  const [timer, setTimer] = useState(0);

  let interval: NodeJS.Timeout;
  useEffect(() => {
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleSendOtp = () => {
    setOtpSent(true);
    setTimer(60);
  };

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

  return (
    <View flex={1} bg={"white"} onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          height={"30%"}
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
          fontSize={"$9"}
          mt={"$0.5"}
          textAlign={"center"}
        >
          Generate Code
        </Text>
        <View mt={"$2"} px={"$4"}>
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
          <Button
            bg={timer > 0 ? "$gray9" : "#D11C2F"}
            color={"white"}
            fontSize={"$5"}
            mt={"$3"}
            size={"$3"}
            onPress={handleSendOtp}
            disabled={timer > 0}
          >
            {timer > 0 ? `Resend OTP in ${timer}s` : "Send OTP"}
          </Button>

          {otpSent && (
            <>
              <Text mt={"$2.5"}>OTP</Text>
              <View
                flexDirection="row"
                justifyContent="space-between"
                mt={"$1"}
              >
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
                    textAlign="center"
                    keyboardType="number-pad"
                  />
                ))}
              </View>
              <Button
                bg={"#D11C2F"}
                color={"white"}
                fontSize={"$5"}
                mt={"$3"}
                size={"$3"}
              >
                Verify OTP
              </Button>

              <Text mt={"$2.5"}>Enter new PIN</Text>
              <View
                flexDirection="row"
                justifyContent="space-between"
                mt={"$1"}
              >
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
                    textAlign="center"
                    keyboardType="number-pad"
                  />
                ))}
              </View>

              <Button
                bg={"#D11C2F"}
                color={"white"}
                fontSize={"$5"}
                mt={"$3"}
                size={"$3"}
              >
                Generate Code
              </Button>
            </>
          )}

          <View mt={"$7"} flexDirection={"row"} justifyContent={"space-evenly"}>
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

export default GenerateCode;
