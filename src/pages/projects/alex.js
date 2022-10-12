import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { IoSearchSharp, IoNavigateCircle, IoWifiSharp } from "react-icons/io5";
import WithSubnavigation from "../../components/navbar";
import system from "../../alex.jpg";
import alex from "../../alex2.jpg";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text textAlign={"left"} fontWeight={600}>
        {text}
      </Text>
    </Stack>
  );
};

function SplitWithImage() {
  const handleClick = () => {
    window.open("https://github.com/chiewyx/CG2111A-Alex");
  };
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={200}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
            as={Button}
            onClick={handleClick}
          >
            github
          </Text>
          <Heading textAlign={"left"}>search and rescue robot: alex</Heading>
          <Text textAlign={"left"} color={"gray.500"} fontSize={"lg"}>
            alex is a search and rescue robot that is remote-operated and is
            able to map out its surroundings.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={<Icon as={IoWifiSharp} color={"yellow.500"} w={5} h={5} />}
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"remote-operated using Transport Security Layer"}
            />
            <Feature
              icon={
                <Icon as={IoNavigateCircle} color={"green.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"lidar to map out surroundings"}
            />
            <Feature
              icon={
                <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={
                "raspberry-pi and arduino to send instructions to move alex"
              }
            />
          </Stack>
        </Stack>
        <Flex>
          <Stack spacing={20}>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={system}
              height={225}
              width={400}
            />
            <Image rounded={"md"} src={alex} height={300} width={400} />
          </Stack>
        </Flex>
      </SimpleGrid>
    </Container>
  );
}

export default function AlexPage() {
  return (
    <div>
      <WithSubnavigation />
      <SplitWithImage />
    </div>
  );
}
