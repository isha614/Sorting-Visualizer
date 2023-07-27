import React from "react";
import {
  Flex,
  Spacer,
  Text,
  useMediaQuery,
  Icon,
  Heading,
} from "@chakra-ui/react";
import { FaSortAmountDownAlt } from "react-icons/fa";
import "./Main.css";
const AboutUs = () => {
  const [isLargerThan48] = useMediaQuery("(min-width: 48em)");
  const [isLargerThan62] = useMediaQuery("(min-width: 62em)");
  const array = [
    {
      id: 1,
      text: " Bubble Sort",
      icon: FaSortAmountDownAlt,
    },
    {
      id: 2,
      text: "Selection Sort",
      icon: FaSortAmountDownAlt,
    },
    {
      id: 3,
      text: "Insertion Sort",
      icon: FaSortAmountDownAlt,
    },
  ];

  return (
    <>
      <Text
        fontSize={isLargerThan62 ? "5xl" : "4xl"}
        fontWeight="bold"
        mb="4"
        ml="20"
        fontFamily="-apple-system,BlinkMacSystemFont"
        id="Types"
        className="TopNavFix"
      >
        Types of Sorting
      </Text>
      <Flex
        minH="70vh"
        alignItems="center"
        justifyContent="space-between"
        w="full"
        py="16"
        px={isLargerThan48 ? "16" : "6"}
        flexWrap="wrap"
        flexDirection={isLargerThan48 ? "row" : "column"}
      >
        {array.map((arr) => (
          <>
            <Flex
              height="300px"
              bg="blackAlpha.200"
              width={isLargerThan48 ? "32%" : "full"}
              shadow="md"
              p="6"
              alignItems="center"
              justifyContent="center"
              borderRadius="md"
              flexDirection="column"
              textAlign="center"
              mb={isLargerThan48 ? "0" : "4"}
              border="1px solid #C4DDFF"
            >
              <Icon as={arr.icon} boxSize={14} color="blue.600" mb="5" />
              <Text>{arr.text}</Text>
            </Flex>

            <Spacer />
          </>
        ))}
      </Flex>
    </>
  );
};

export default AboutUs;
