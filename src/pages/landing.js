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
import { Box } from "@chakra-ui/react";
import AvatarWithRipple from "../components/avatar";
import hawkertown from "../hawkertown.png";
import raspberrypi from "../raspberrypi.png";
import code from "../code.png";
import pdf from "../resume.pdf";
import logo from "../logo.jpg";

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
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              a Computer Engineering Undergraduate at National University of
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
                target="_blank"
              >
                resume
              </Button>
              <Button rounded={"full"}>about</Button>
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
              <Heading>HawkerTown</Heading>
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
              <Heading>Alex robot</Heading>
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
              <Image src={logo} width={300} height={300} borderRadius={30} />
              <Heading>HawkerTown</Heading>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                webapp that offers a one-stop solution for hawkers and suppliers
                to connect
              </Text>
            </Stack>
          </Flex>
          <Flex px={10} flex={1} justify={"center"} my={100}>
            <Stack spacing={6} w={"full"} maxW={"lg"} alignItems={"center"}>
              <Image src={code} width={600} height={300} borderRadius={30} />
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

function Contact() {
  return (
    <section id="section-three">
      <Stack direction={"row"} minH={"25vh"} mx={125} justifyContent={"space-between"}>
      <Flex >
        <Stack my={15}>
          <Text>
            Chiew Yi Xiang —
          </Text>
          <Text>
            computer engineering undergraduate
          </Text>
        </Stack>
      </Flex>
        <Flex >
          <Stack my={15}>
            <Text>social —</Text>
            <Button
              rounded={"full"}
              colorScheme={"messenger"}
              leftIcon={<SiLinkedin />}
            >
              Linkedin
            </Button>
          </Stack>
        </Flex>
        <Flex >
          <Stack my={15}>
            <Text>contact —</Text>
            <Text>yixiangchiew@gmail.com</Text>
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
