import WithSubnavigation from "../components/navbar";
import {
  Text,
  Flex,
  Image,
  Button,
  useBreakpointValue,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import code from "../code.png";
import pdf from "../resume.pdf";
import logo from "../logo.jpg";
import robot from "../robot.jpg";
import upcycle from "../Up.png";
import { useState } from "react";
import AboutPage from "./about.js"

function About() {
  const [imageSize, setImageSize] = useState({
    width: 450,
    height: 300,
  });

  return (
    <section id="section-one">
      <Stack
        minH={"75vh"}
        direction={{ base: "column", md: "row" }}
        spacing={50}
      >
        <Flex mt={150} flex={1} justify={"center"} ml={200}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={"7xl"}>
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
                  bg: "gray.400",
                  zIndex: -1,
                }}
              >
                Chiew Yi Xiang
              </Text>
            </Heading>
            <Text
              fontSize={"2xl"}
              color={"gray.500"}
              fontFamily="sans-serif"
              fontWeight={"thin"}
              textAlign={"left"}
            >
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
            top={250}
            borderRadius={30}
            style={{
              width: imageSize.width,
              height: imageSize.height,
              transition: "width 0.5s, height 0.5s",
            }}
            onMouseOver={() =>
              setImageSize({
                width: 600,
                height: 400,
              })
            }
            onMouseOut={() =>
              setImageSize({
                width: 450,
                height: 300,
              })
            }
          />
        </Flex>
      </Stack>
      <AboutPage />
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
            <Stack spacing={4} w={"full"} maxW={"lg"}>
              <Image src={logo} width={600} height={300} borderRadius={30} />
              <Heading as={ReactRouterLink} to="/hawkertown" textAlign={"left"}>
                HawkerTown
              </Heading>
              <Text
                textAlign={"justify"}
                fontSize={{ base: "md", lg: "lg" }}
                color={"gray.500"}
                fontFamily="sans-serif"
                fontWeight={"thin"}
              >
                webapp that offers a one-stop solution for hawkers and suppliers
                to connect
              </Text>
            </Stack>
          </Flex>
          <Flex px={10} flex={1} justify={"center"} my={100}>
            <Stack spacing={4} w={"full"} maxW={"lg"} my={75}>
              <Image src={code} width={600} height={300} borderRadius={30} />
              <Heading as={ReactRouterLink} to="/alex" textAlign={"left"}>
                Alex robot
              </Heading>
              <Text
                textAlign={"justify"}
                fontSize={{ base: "md", lg: "lg" }}
                color={"gray.500"}
                fontFamily="sans-serif"
                fontWeight={"thin"}
              >
                a search and rescue robotic vehicle ‘Alex’ to map out the
                location it is placed in.
              </Text>
            </Stack>
          </Flex>
        </Stack>
        <Stack direction={{ base: "column", md: "row" }}>
          <Flex px={10} flex={1} justify={"center"}>
            <Stack spacing={4} w={"full"} maxW={"lg"}>
              <Image src={upcycle} width={600} height={300} borderRadius={30} />
              <Heading as={ReactRouterLink} to="/upcycle" textAlign={"left"}>
                Upcycle
              </Heading>
              <Text
                textAlign={"justify"}
                fontSize={{ base: "md", lg: "lg" }}
                color={"gray.500"}
                fontFamily="sans-serif"
                fontWeight={"thin"}
              >
                Upcycle - a perfect desktop app dedicate to managing rental
                businesses. It is developed for rental business managers, who
                can type fast to efficiently keep track of all of their
                customers, items, and transactions via a Command Line Interface.
              </Text>
            </Stack>
          </Flex>
          <Flex px={10} flex={1} justify={"center"} my={100}>
            <Stack spacing={4} w={"full"} maxW={"lg"}>
              <Image src={robot} width={600} height={300} borderRadius={30} />
              <Heading textAlign={"left"}>mBot project</Heading>
              <Text
                textAlign={"justify"}
                fontSize={{ base: "md", lg: "lg" }}
                color={"gray.500"}
                fontFamily="sans-serif"
                fontWeight={"thin"}
              >
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
        mx={215}
        justifyContent={"space-between"}
      >
        <Flex>
          <Stack my={15}>
            <Text
              fontFamily="sans-serif"
              fontWeight={"thin"}
              textAlign={"left"}
            >
              Chiew Yi Xiang —
            </Text>
            <Text
              fontFamily="sans-serif"
              fontWeight={"thin"}
              textAlign={"left"}
            >
              computer engineering undergraduate
            </Text>
          </Stack>
        </Flex>
        <Flex>
          <Stack my={15}>
            <Text fontFamily="sans-serif" fontWeight={"thin"}>
              social —
            </Text>
            <Text
              fontFamily="sans-serif"
              fontWeight={"thin"}
              onClick={handleClick}
            >
              Linkedin
            </Text>
          </Stack>
        </Flex>
        <Flex>
          <Stack my={15}>
            <Text
              fontFamily="sans-serif"
              fontWeight={"thin"}
              textAlign={"left"}
            >
              contact —
            </Text>
            <Text
              fontFamily="sans-serif"
              fontWeight={"thin"}
              textAlign={"left"}
            >
              yixiangchiew@gmail.com
            </Text>
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
