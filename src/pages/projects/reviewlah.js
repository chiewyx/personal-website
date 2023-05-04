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
  import { IoAnalyticsSharp, IoSearchSharp, IoPencil } from "react-icons/io5";
  import WithSubnavigation from "../../components/navbar";
  import map from "../../hfg_map.png";
  import reviews from "../../hfg_reviews.png";
  
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
      window.open("https://github.com/chiewyx/hfg-webapp");
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
              webapp that allows users to review the accessibility of places
            </Heading>
            <Text textAlign={"left"} color={"gray.500"} fontSize={"lg"}>
            The app provides a platform for individuals to voice their opinions 
            and experiences on the accessibility of different locations, 
            providing information and insights for others with disabilities, 
            as well as for the places themselves to improve their accessibility.
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
                text={"User reviews of places with information on the accessibility for people with disabilities."}
              />
              <Feature
                icon={<Icon as={IoPencil} color={"green.500"} w={5} h={5} />}
                iconBg={useColorModeValue("green.100", "green.900")}
                text={"The ability to upload images to support the review."}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={
                  "A map view of all the reviewed places with their corresponding reviews."
                }
              />
            </Stack>
          </Stack>
          <Flex>
            <Stack spacing={20}>
              <Image
                rounded={"md"}
                alt={"feature image"}
                src={map}
                height={225}
                width={600}
              />
              <Image rounded={"md"} src={reviews} height={225} width={600} />
            </Stack>
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }
  
  export default function ReviewLahPage() {
    return (
      <div>
        <WithSubnavigation />
        <SplitWithImage />
      </div>
    );
  }
  