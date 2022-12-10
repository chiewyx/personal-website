import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink } from "react-router-dom";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position="sticky" top={0}>
      <Flex
        bg={useColorModeValue("gray.50", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Button variant={"link"} as={ReactRouterLink} to="/" display={"none"}>
            <Text
              fontSize="4xl"
              textAlign={"center"}
              fontFamily="Gill Sans"
              color="gray.600"
              fontWeight={"light"}
              display={"none"}
            >
              {" "}
            </Text>
          </Button>
          
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={50}
        >
          <Button
            as={HashLink}
            href={"about"}
            fontSize={"lg"}
            fontWeight={400}
            variant={"link"}
            smooth
            to="/#section-one"
          >
            About
          </Button>
          <Button
            as={HashLink}
            variant={"link"}
            href={"Projects"}
            fontSize={"lg"}
            fontWeight={400}
            smooth
            to="/#section-two"
          >
            Projects
          </Button>
          <Button
            as={HashLink}
            fontSize={"lg"}
            fontWeight={400}
            variant={"link"}
            href={"Contact"}
            smooth
            to="/#section-three"
          >
            Contact
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
