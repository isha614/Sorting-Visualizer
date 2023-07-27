import {
  Box,
  Flex,
  Image,
  Spacer,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

import SortingImage from "../Images/Sorting-Algorithms.png";

const Hero = () => {
  const [isLargerThan62] = useMediaQuery("(min-width: 62em)");

  return (
    <Flex
      alignItems="center"
      w="full"
      px={isLargerThan62 ? "16" : "6"}
      py="16"
      minHeight="90vh"
      justifyContent="space-between"
      flexDirection={isLargerThan62 ? "row" : "column"}
    >
      <Box mr={isLargerThan62 ? "6" : "0"} w={isLargerThan62 ? "60%" : "full"}>
        <Text
          fontSize={isLargerThan62 ? "5xl" : "4xl"}
          fontWeight="bold"
          mb="4"
          color="rgb(52, 52, 52)"
          fontFamily="-apple-system,BlinkMacSystemFont"
        >
          {" "}
          What is Sorting?
        </Text>

        <Text mb="6" fontSize={isLargerThan62 ? "lg" : "base"} opacity={0.7}>
          A Sorting Algorithm is used to reorder an array or list of elements
          according to a comparison operator on the elements. The new order of
          the elements in the relevant data structure is decided using the
          comparison operator. Sorting is essential for efficient data
          retrieval, data organization, and better understanding of data
          patterns. It is used in various fields, including database management,
          search algorithms, computational geometry, and more.
        </Text>
      </Box>

      <Spacer />

      <Flex
        w={isLargerThan62 ? "40%" : "full"}
        alignItems="center"
        justifyContent="center"
      >
        <Image src={SortingImage} alt="Sorting" />
      </Flex>
    </Flex>
  );
};

export default Hero;
