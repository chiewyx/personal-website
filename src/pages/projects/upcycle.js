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
  import { IoAccessibility, IoBasket, IoReceipt } from "react-icons/io5";
  import WithSubnavigation from "../../components/navbar";
  import architechure from "../../architecture.png"
  import upcycle from "../../upcycle.png"
  
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
      window.open("https://github.com/chiewyx/tp");
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
            <Heading textAlign={"left"}>CLI application: Upcycle</Heading>
            <Text textAlign={"left"} color={"gray.500"} fontSize={"lg"}>
              Upcycle is a CLI app that allows rental managers to track users, loan items and transactions.
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
                icon={<Icon as={IoAccessibility} color={"yellow.500"} w={5} h={5} />}
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={"Track users that that are registered in the system"}
              />
              <Feature
                icon={
                  <Icon as={IoBasket} color={"green.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("green.100", "green.900")}
                text={"Help to add items to be loaned out for different users"}
              />
              <Feature
                icon={
                  <Icon as={IoReceipt} color={"purple.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={
                  "Track transactions between 2 users when an item is loaned out"
                }
              />
            </Stack>
          </Stack>
          <Flex>
            <Stack spacing={20}>
              <Image
                rounded={"md"}
                alt={"feature image"}
                src={architechure}
                height={225}
                width={400}
              />
              <Image rounded={"md"} src={upcycle} height={300} width={400} />
            </Stack>
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }
  
  export default function UpcyclePage() {
    return (
      <div>
        <WithSubnavigation />
        <SplitWithImage />
      </div>
    );
  }
  