import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Square,
} from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";

import { HamburgerIcon, CloseIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink } from "react-router-dom";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
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
          <Button variant={"link"} as={ReactRouterLink} to="/">
            <Text
              fontSize="4xl"
              textAlign={"center"}
              fontFamily="Gill Sans"
              color="gray.600"
              fontWeight={"light"}
            >
              {" "}
              {" "}
            </Text>
          </Button>
          <Square size="40px" bg="white" color="white"></Square>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={50}
        >
          <Button
            as={ReactRouterLink}
            fontSize={"lg"}
            fontWeight={400}
            variant={"link"}
            to="/#section-one"
          >
            About
          </Button>
          <Button
            as={ReactRouterLink}
            fontSize={"lg"}
            fontWeight={400}
            variant="link"
            to="/#section-two"
          >
            Projects
          </Button>
          <Button
            as={ReactRouterLink}
            fontSize={"lg"}
            fontWeight={400}
            variant={"link"}
            to="/#section-three"
          >
            Contact
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
