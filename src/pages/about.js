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

export default function AboutPage() {
  return (
    <div className="AboutPage">
      <WithSubnavigation />
      <Stack mt={200} px={500} spacing={10} justifyItems={"left"}>
        <Heading textAlign={"left"}>
          hi, i'm yixiang, a computer engineering undergrad at NUS and also an
          aspiring barista.
        </Heading>
        <Text textAlign={"left"}>
          relevant coursework: data structure and algorithm, database systems,
          software engineering & object-oriented-programming
        </Text>
        <Text textAlign={"left"}>
          programming laguages: C/C++, Java, python, SQL
          <br />
          web languages: ReactJS, html, css, javascript
        </Text>
        <Text textAlign={"left"}>
            CCA: football (NUS recreational football, KE7 Hall, RVHS)
        </Text>
      </Stack>
    </div>
  );
}
