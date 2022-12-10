import WithSubnavigation from "../components/navbar";
import { Text, Stack, Heading } from "@chakra-ui/react";

export default function AboutPage() {
  return (
    <div className="AboutPage">
      <Stack mt={200} px={500} spacing={10} justifyItems={"left"} minH={"65vh"}>
        <Heading textAlign={"left"}>
          hi, i'm yixiang, a computer engineering undergrad at NUS and also an
          aspiring barista.
        </Heading>
        <Text textAlign={"left"} fontFamily="sans-serif" fontWeight={"thin"}>
          relevant coursework: data structure and algorithm, database systems,
          software engineering & object-oriented-programming
        </Text>
        <Text textAlign={"left"} fontFamily="sans-serif" fontWeight={"thin"}>
          programming laguages: C/C++, Java, python, SQL
          <br />
          web languages: ReactJS, html, css, javascript
        </Text>
        <Text textAlign={"left"} fontFamily="sans-serif" fontWeight={"thin"}>
          CCA: football (NUS recreational football, KE7 Hall, RVHS)
        </Text>
      </Stack>
    </div>
  );
}
