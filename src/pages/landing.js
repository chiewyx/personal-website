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
  Center,
  HStack,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import code from "../code.png";
import pdf from "../chiewyixiang_resume.pdf";
import logo from "../logo.jpg";
import robot from "../robot.jpg";
import upcycle from "../Up.png";
import reviewlah from "../2.png";
import { useState } from "react";
import AboutPage from "./about.js";
import CaptionCarousel from "../components/carousel";
import { IoLogoLinkedin, IoMdMail } from "react-icons/io";

function About() {
  const [imageSize, setImageSize] = useState({
    width: 450,
    height: 300,
  });

  const [isMobile] = useMediaQuery("(min-width: 900px)");

  return (
    <section id="section-one">
      <HStack
        minH={"65vh"}
        direction={{ base: "column", md: "row" }}
        minWidth={"50%"}
         /* marginY={useBreakpointValue({ base: 10, md: 0 })} */
      >
        <Flex flex={1} justify={"center"} margin="auto">
          <Stack spacing={6} w={"80%"} maxW={"lg"}>
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
        {isMobile ? (
          <Flex flex={1} justify={"center"} margin="auto">
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
        ) : (
          ""
        )}
      </HStack>
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

  const [isMobile] = useMediaQuery("(min-width: 900px)");

  return (
    <section id="section-two">
      {isMobile ? (
        <VStack minH={"165vh"} justifyContent="center">
          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            justifyItems={"center"}
          >
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
                <Heading
                  as={ReactRouterLink}
                  to="/hawkertown"
                  textAlign={"left"}
                >
                  HawkerTown
                </Heading>
                <Text
                  textAlign={"justify"}
                  fontSize={{ base: "md", lg: "lg" }}
                  color={"gray.500"}
                  fontFamily="sans-serif"
                  fontWeight={"thin"}
                >
                  webapp that offers a one-stop solution for hawkers <br />
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
                    src={reviewlah}
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
                <Heading
                  as={ReactRouterLink}
                  to="/reviewlah"
                  textAlign={"left"}
                >
                  reviewLah!
                </Heading>
                <Text
                  textAlign={"justify"}
                  fontSize={{ base: "md", lg: "lg" }}
                  color={"gray.500"}
                  fontFamily="sans-serif"
                  fontWeight={"thin"}
                >
                  webapp for users to review the accessibility of a location
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
                  Upcycle - a desktop app dedicated to managing rental
                  businesses.
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
          </Grid>
        </VStack>
      ) : (
        <VStack spacing={10} justifyContent="center" mt={10}>
          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            justifyContent={"center"}
            margin="auto"
          >
            Projects
          </Heading>
          <CaptionCarousel />
        </VStack>
      )}
    </section>
  );
}

function Contact() {
  const handleClick = () => {
    window.open("http://www.linkedin.com/in/chiew-yi-xiang");
  };

  const [isMobile] = useMediaQuery("(min-width: 900px)");

  return (
    <section id="section-three">
      {isMobile ? (
        <HStack
          direction={"row"}
          minH={"25vh"}
          justifyContent={"center"}
          spacing={"20vw"}
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
        </HStack>
      ) : (
        <div>
        <HStack spacing={10} margin="auto" justify={"center"} mt={10}>
          <IoLogoLinkedin size={40} onClick={handleClick}/>
          <Flex>
            <Stack my={15} justifyContent={"center"}>
              <Text
                fontFamily="sans-serif"
                fontWeight={"thin"}
                textAlign={"left"}
              >
                email —
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
        </HStack>
        </div>
      )}
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
