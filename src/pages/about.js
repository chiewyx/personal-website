import WithSubnavigation from "../components/navbar";
import { Text, Stack, Heading } from "@chakra-ui/react";

export default function AboutPage() {
  return (
    <div className="AboutPage">
      <Stack spacing={8} justifyItems={"left"} minH={"40vh"} margin={"auto"} width={"50%"} mt={100}>
        <Heading textAlign={"left"}>
          hi, i'm yixiang, a penultimalte year computer engineering student at NUS and also an
          aspiring barista.
        </Heading>
        <Text textAlign={"left"} fontFamily="sans-serif" fontWeight={"thin"}>
          relevant coursework: data structure and algorithm, database systems and implementation,
          software engineering & object-oriented-programming, computer networks, big data systems, database applications design and tuning
        </Text>
        <Text textAlign={"left"} fontFamily="sans-serif" fontWeight={"thin"}>
          programming laguages: C/C++, Java, python, SQL, javascript, typescript
          <br />
          frameworks: ReactJS, spring, spring boot, spring batch, Angular, Spark, Hadoop
          <br />
          tools: git, jira, confluence, figma, matlab, Jenkins, Google Cloud Platform, AWS
        </Text>
        <Text textAlign={"left"} fontFamily="sans-serif" fontWeight={"thin"}>
          CCA: football (NUS recreational football, KE7 Hall, RVHS)
        </Text>
      </Stack>
    </div>
  );
}
