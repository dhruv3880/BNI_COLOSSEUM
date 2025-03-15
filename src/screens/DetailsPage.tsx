import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Check, ChevronDown } from "@tamagui/lucide-icons";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import { Keyboard } from "react-native";
import {
  Adapt,
  Button,
  Image,
  Input,
  ScrollView,
  Select,
  Sheet,
  Text,
  TextArea,
  View,
} from "tamagui";
import { RootStackParamList } from "../navigation/MainNavigator";

const DetailsPage = () => {
  const [category, setCategory] = React.useState("retail");
  const [image, setImage] = React.useState<ImagePicker.ImagePickerAsset[]>([]);
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsMultipleSelection: true,
      allowsEditing: false,
      aspect: [3, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage([
        ...image,
        ...(result.assets as ImagePicker.ImagePickerAsset[]),
      ]);
    }
  };
  return (
    <View
      flex={1}
      p={"$4"}
      pb={"$0"}
      bg={"white"}
      onPress={() => Keyboard.dismiss()}
    >
      <View>
        <Image
          src={require("../assets/bnilogo.png")}
          height={"$8"}
          width={"$8"}
          objectFit="contain"
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View mb={"$6"}>
          <Text mb={"$2"}>Company Name</Text>
          <Input mb={"$2"} bg={"white"} disabled color={"grey"}>
            BarodaWeb
          </Input>
          <Text mb={"$2"}>Name</Text>
          <Input bg={"white"} disabled color={"grey"} mb={"$2"}>
            Rupesh Shah
          </Input>
          <Text mb={"$2"}>Email</Text>
          <Input bg={"white"} disabled color={"grey"} mb={"$2"}>
            example@mail.com
          </Input>
          <Text mb={"$2"}>Phone No</Text>
          <Input bg={"white"} disabled color={"grey"} mb={"$2"}>
            +91 9874563210
          </Input>
          <Text mb={"$2"}>
            Bio <Text color={"red"}>*</Text>
          </Text>
          <TextArea
            verticalAlign="top"
            size={"$6"}
            p={"$2"}
            bg={"white"}
            fontSize={"$4"}
            mb={"$2"}
            br={"$2.5"}
            placeholder="Enter your bio here"
          />
          <Text mb={"$2"}>Top 10 Customers</Text>
          <TextArea
            verticalAlign="top"
            size={"$6"}
            p={"$2"}
            bg={"white"}
            fontSize={"$4"}
            mb={"$2"}
            br={"$2.5"}
            placeholder="Enter your bio here"
          />
          <Text mb={"$2"}>Gives</Text>
          <TextArea
            verticalAlign="top"
            size={"$6"}
            p={"$2"}
            bg={"white"}
            fontSize={"$4"}
            mb={"$2"}
            br={"$2.5"}
            placeholder="Enter your bio here"
          />
          <Text mb={"$2"}>
            Business Category <Text color={"red"}>*</Text>
          </Text>
          <Select
            value={category}
            onValueChange={setCategory}
            disablePreventBodyScroll
          >
            <Select.Trigger
              width={"auto"}
              bg="white"
              color="black"
              iconAfter={ChevronDown}
            >
              <Select.Value placeholder="Select Category" />
            </Select.Trigger>

            <Adapt when="sm" platform="touch">
              <Sheet
                modal
                dismissOnSnapToBottom
                snapPoints={[30]} // Adjust height based on list size
              >
                <Sheet.Frame backgroundColor="white" borderRadius="$4">
                  <Sheet.ScrollView>
                    <Adapt.Contents />
                  </Sheet.ScrollView>
                </Sheet.Frame>
              </Sheet>
            </Adapt>

            <Select.Content>
              <Select.Viewport minWidth={"auto"}>
                <Select.Group>
                  <Select.Label color="black">Categories</Select.Label>
                  {businessCategories.map((item, i) => (
                    <Select.Item
                      index={i}
                      key={item.name}
                      value={item.name.toLowerCase()}
                      backgroundColor="white"
                    >
                      <Select.ItemText color="black">
                        {item.name}
                      </Select.ItemText>
                      <Select.ItemIndicator marginLeft="auto">
                        <Check size={16} color="black" />
                      </Select.ItemIndicator>
                    </Select.Item>
                  ))}
                </Select.Group>
              </Select.Viewport>
            </Select.Content>
          </Select>
          <Text mt={"$2"} mb={"$2"}>
            Sub-Category <Text color={"red"}>*</Text>
          </Text>
          <Input
            bg={"white"}
            mb={"$2"}
            placeholder="Enter Sub-category"
          ></Input>
          <Text mb={"$2"}>
            Business Keywords <Text color={"red"}>*</Text>
          </Text>
          <TextArea
            verticalAlign="top"
            size={"$6"}
            p={"$2"}
            bg={"white"}
            fontSize={"$4"}
            mb={"$2"}
            br={"$2.5"}
            placeholder="Enter Business Keywords"
          ></TextArea>
          <Text mb={"$2"}>Product Images</Text>
          <View onPress={pickImage}>
            <Image
              src={require("../assets/imagepicker.png")}
              height={"$19"}
              width={"100%"}
              objectFit="contain"
            />
          </View>
          <View
            flexWrap="wrap"
            flexDirection="row"
            mt={"$2"}
            justifyContent="space-between"
            mb={"$2"}
          >
            {image.map((item, i) => (
              <Image
                source={{ uri: item.uri }}
                key={i}
                height={100}
                width={"30%"}
                mb={"$2"}
                objectFit="cover"
              />
            ))}
          </View>
          <Button
            bg={"#D11C2F"}
            color={"white"}
            fontSize={"$6"}
            onPress={() => navigate("Home")}
          >
            Submit
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailsPage;

const businessCategories = [
  { name: "Retail" },
  { name: "Technology" },
  { name: "Healthcare" },
];
