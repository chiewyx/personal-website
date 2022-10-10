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
import { SiLinkedin } from "react-icons/si";
import { Link as ReactRouterLink } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import AvatarWithRipple from "../components/avatar";
import hawkertown from "../hawkertown.png";
import raspberrypi from "../raspberrypi.png";
import code from "../code.png";
import pdf from "../resume.pdf";
import logo from "../logo.jpg";
import duke from "../code-laptop-programming-coding.jpg";
import robot from "../robot.jpg"

function About() {
  return (
    <section id="section-one">
      <Stack minH={"95vh"} direction={{ base: "column", md: "row" }}>
        <Flex mt={150} flex={1} justify={"center"} ml={200}>
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
            <Text fontSize={"3xl"} color={"gray.500"} font={"sans-serif"}>
              <span style={{ textDecoration: "line-through" }}>
                aspiring barista
              </span>{" "}
              computer engineering undergraduate at National University of
              Singapore
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
                target="_blank"
              >
                resume
              </Button>
              <Button as={ReactRouterLink} rounded={"full"} to="/about">
                about
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex py={150} flex={1} ml={100}>
          <Image
            src="https://i.imgur.com/BcgzA9A.jpg"
            width={450}
            height={300}
            top={250}
            borderRadius={30}
          />
        </Flex>
      </Stack>
    </section>
  );
}

function Projects() {
  return (
    <section id="section-two">
      <Stack minH={"165vh"}>
        <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
          Projects
        </Heading>
        <Stack direction={{ base: "column", md: "row" }}>
          <Flex px={10} flex={1} justify={"center"} my={75}>
            <Stack spacing={6} w={"full"} maxW={"lg"} alignItems={"center"}>
              <Image src={logo} width={300} height={300} borderRadius={30} />
              <Heading as={ReactRouterLink} to="/hawkertown" >HawkerTown</Heading>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                webapp that offers a one-stop solution for hawkers and suppliers
                to connect
              </Text>
            </Stack>
          </Flex>
          <Flex px={10} flex={1} justify={"center"} my={100}>
            <Stack
              spacing={6}
              w={"full"}
              maxW={"lg"}
              alignItems={"center"}
              my={75}
            >
              <Image src={code} width={600} height={300} borderRadius={30} />
              <Heading as={ReactRouterLink} to="/alex">Alex robot</Heading>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                a search and rescue robotic vehicle ‘Alex’ to map out the
                location it is placed in.
              </Text>
            </Stack>
          </Flex>
        </Stack>
        <Stack direction={{ base: "column", md: "row" }}>
          <Flex px={10} flex={1} justify={"center"}>
            <Stack spacing={6} w={"full"} maxW={"lg"} alignItems={"center"}>
              <Image src={duke} width={600} height={300} borderRadius={30} />
              <Heading>Duke chatbot</Heading>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                CLI chatbot that tracks tasks/events/deadlines, singaporean
                uncle style
              </Text>
            </Stack>
          </Flex>
          <Flex px={10} flex={1} justify={"center"} my={100}>
            <Stack spacing={6} w={"full"} maxW={"lg"} alignItems={"center"}>
              <Image src={robot} width={600} height={300} borderRadius={30} />
              <Heading>mBot project</Heading>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                a robotic vehicle ‘mBot’ that steers itself
              </Text>
            </Stack>
          </Flex>
        </Stack>
      </Stack>
    </section>
  );
}

function Contact() {
  const handleClick = () => {
    window.open("http://www.linkedin.com/in/chiew-yi-xiang");
  };
  return (
    <section id="section-three">
      <Stack
        direction={"row"}
        minH={"25vh"}
        mx={125}
        justifyContent={"space-between"}
      >
        <Flex>
          <Stack my={15}>
            <Text textAlign={"left"}>Chiew Yi Xiang —</Text>
            <Text textAlign={"left"}>computer engineering undergraduate</Text>
          </Stack>
        </Flex>
        <Flex>
          <Stack my={15}>
            <Text >social —</Text>
            <Button
              onClick={handleClick}
              rounded={"full"}
              colorScheme={"messenger"}
              leftIcon={<SiLinkedin />}
            >
              Linkedin
            </Button>
          </Stack>
        </Flex>
        <Flex>
          <Stack my={15}>
            <Text textAlign={"left"}>contact —</Text>
            <Text textAlign={"left"}>yixiangchiew@gmail.com</Text>
          </Stack>
        </Flex>
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
      <Contact />
    </div>
  );
}
