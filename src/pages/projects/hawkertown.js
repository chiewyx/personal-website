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
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
  IoPencil
} from "react-icons/io5";
import { ReactElement } from "react";
import WithSubnavigation from "../../components/navbar";
import hawkertown from "../../dashboard.png";
import landing from "../../hawkertown.png"

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
    window.open("https://github.com/chiewyx/hawkerDream");
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
          <Heading textAlign={"left"}>
            a one-stop solution to allow hawkers and suppliers to interact
          </Heading>
          <Text textAlign={"left"} color={"gray.500"} fontSize={"lg"}>
            HawkerTown provides hawkers and suppliers with a platform to integrate both
            invoices and orders for easy tracking.
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
              icon={
                <Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Hawkers can upload and track invoices"}
            />
            <Feature
              icon={<Icon as={IoPencil} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Suppliers can upload and track orders"}
            />
            <Feature
              icon={
                <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={
                "Marketplace for suppliers to list their items and hawkers to make orders"
              }
            />
          </Stack>
        </Stack>
        <Flex>
          <Stack spacing={20}>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={hawkertown}
              height={225}
              width={600}
            />
            <Image 
                rounded={"md"}
                src={landing}
                height={225}
                width={600}
            />
          </Stack>
        </Flex>
      </SimpleGrid>
    </Container>
  );
}

export default function HawkerTownPage() {
  return (
    <div>
      <WithSubnavigation />
      <SplitWithImage />
    </div>
  );
}
