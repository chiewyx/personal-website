import WithSubnavigation from "../components/navbar";
import {
  Text,
  Flex,
  Image,
  Button,
  useBreakpointValue,
  Stack,
  Heading,
  Grid,
  GridItem,
  Box,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import code from "../code.png";
import pdf from "../resume.pdf";
import logo from "../logo.jpg";
import robot from "../robot.jpg";
import upcycle from "../Up.png";
import { useState } from "react";
import AboutPage from "./about.js";

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
              <Button as={HashLink} rounded={"full"} to="/#section-four" smooth>
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
      <section id="section-four">
      <AboutPage />
      </section>
    </section>
  );
}

function Projects() {
  const [imageSize1, setImageSize1] = useState({
    width: 500,
    height: 350,
  });
  const [imageSize2, setImageSize2] = useState({
    width: 500,
    height: 350,
  });
  const [imageSize3, setImageSize3] = useState({
    width: 500,
    height: 350,
  });
  const [imageSize4, setImageSize4] = useState({
    width: 500,
    height: 350,
  });

  return (
    <section id="section-two">
      <Stack minH={"165vh"} justifyContent="center">
        <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} justifyItems={"center"}>
          Projects
        </Heading>
        <Grid
          templateColumns="repeat(2, 1fr)"
          spacing={5}
          justifyItems="center"
        >
          <GridItem>
            <Stack spacing={4} my={50} paddingLeft={100}>
              <Box
                width={600}
                height={400}
                justifyContent="left"
                alignItems="center"
                display={"flex"}
              >
                <Image
                  src={logo}
                  borderRadius={30}
                  style={{
                    width: imageSize1.width,
                    height: imageSize1.height,
                    transition: "width 0.5s, height 0.5s",
                  }}
                  onMouseOver={() =>
                    setImageSize1({
                      width: 550,
                      height: 400,
                    })
                  }
                  onMouseOut={() =>
                    setImageSize1({
                      width: 500,
                      height: 350,
                    })
                  }
                />
              </Box>
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
                webapp that offers a one-stop solution for hawkers <br/>
                and suppliers to connect
              </Text>
            </Stack>
          </GridItem>
          <GridItem>
            <Stack spacing={4} my={50} paddingLeft={100}>
              <Box
                width={600}
                height={400}
                justifyContent="left"
                alignItems="center"
                display={"flex"}
              >
                <Image
                  src={code}
                  style={{
                    width: imageSize2.width,
                    height: imageSize2.height,
                    transition: "width 0.5s, height 0.5s",
                    position: "relative",
                  }}
                  onMouseOver={() =>
                    setImageSize2({
                      width: 550,
                      height: 400,
                    })
                  }
                  onMouseOut={() =>
                    setImageSize2({
                      width: 500,
                      height: 350,
                    })
                  }
                  borderRadius={30}
                />
              </Box>
              <Heading as={ReactRouterLink} to="/alex" textAlign={"left"}>
                Alex robot
              </Heading>
              <Text
                textAlign={"justify"}
                fontSize={{ base: "md", lg: "lg" }}
                color={"gray.500"}
                fontFamily="sans-serif"
                fontWeight={"thin"}
                position={"relative"}
              >
                a search and rescue robotic vehicle ‘Alex’ to map out the
                location <br /> it is placed in.
              </Text>
            </Stack>
          </GridItem>
          <GridItem>
            <Stack spacing={4} my={50} paddingLeft={100}>
              <Box
                width={600}
                height={400}
                justifyContent="left"
                alignItems="center"
                display={"flex"}
              >
                <Image
                  src={upcycle}
                  style={{
                    width: imageSize3.width,
                    height: imageSize3.height,
                    transition: "width 0.5s, height 0.5s",
                  }}
                  onMouseOver={() =>
                    setImageSize3({
                      width: 550,
                      height: 400,
                    })
                  }
                  onMouseOut={() =>
                    setImageSize3({
                      width: 500,
                      height: 350,
                    })
                  }
                  borderRadius={30}
                />
              </Box>
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
                Upcycle - a desktop app dedicated to managing rental businesses.
              </Text>
            </Stack>
          </GridItem>
          <GridItem>
            <Stack spacing={4} my={50} paddingLeft={100}>
              <Box
                width={600}
                height={400}
                justifyContent="left"
                alignItems="center"
                display={"flex"}
              >
                <Image
                  src={robot}
                  style={{
                    width: imageSize4.width,
                    height: imageSize4.height,
                    transition: "width 0.5s, height 0.5s",
                  }}
                  onMouseOver={() =>
                    setImageSize4({
                      width: 550,
                      height: 400,
                    })
                  }
                  onMouseOut={() =>
                    setImageSize4({
                      width: 500,
                      height: 350,
                    })
                  }
                  borderRadius={30}
                />
              </Box>
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
          </GridItem>
        </Grid>
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
