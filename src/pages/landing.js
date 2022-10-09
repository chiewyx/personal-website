import WithSubnavigation from "../components/navbar";
import {
  Center,
  Spacer,
  Grid,
  VStack,
  Text,
  Flex,
  Image,
  HStack,
  Button,
  useBreakpointValue,
  Stack,
  Heading,
  Avatar,
  AspectRatio,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import AvatarWithRipple from "../components/avatar";
import hawkertown from "../hawkertown.png";
import raspberrypi from "../raspberrypi.png"
import code from "../code.png"
import pdf from "../resume.pdf"

function About() {
  return (
    <section id="section-one">
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex py={200} px={250} flex={1} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                Hi, I'm
              </Text>
              <br />{" "}
              <Text color={"blue.400"} as={"span"}>
                Chiew Yi Xiang
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              A Computer Engineering Undergraduate at National University of
              Singapore and also an aspiring barista.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                as="a"
                href={pdf}
                target = "_blank"
              >
                resume
              </Button>
              <Button rounded={"full"}>How It Works</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex py={200} px={200} flex={1}>
          <Avatar
            src="https://i.imgur.com/zeMd6dI.jpg"
            size="600px"
            position="absolute"
            top={250}
          />
        </Flex>
      </Stack>
    </section>
  );
}

function Projects() {
  return (
    <section id="section-two">
      <Stack>
        <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
          Projects
        </Heading>
        <Stack direction={{ base: "column", md: "row" }}>
          <Flex py={50} px={50} flex={1} justify={"center"}>
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Image src={hawkertown} width={600} height={300} borderRadius={30}/>
              <Heading>HawkerTown</Heading>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                webapp that offers a one-stop solution for hawkers and suppliers
                to connect
              </Text>
            </Stack>
          </Flex>
          <Flex py={50} px={50} flex={1} justify={"center"}>
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Image src={code} width={600} height={300} borderRadius={30}/>
              <Heading>Alex robot</Heading>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                a search and rescue robotic vehicle ‘Alex’ to map out the
                location it is placed in.
              </Text>
            </Stack>
          </Flex>
        </Stack>
      </Stack>
    </section>
  );
}

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <WithSubnavigation />
      <About />
      <Projects />
    </div>
  );
}
