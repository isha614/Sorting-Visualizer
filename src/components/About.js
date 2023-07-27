import React from "react";
import { Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import "./Main.css";
function About() {
  const [isLargerThan62] = useMediaQuery("(min-width: 62em)");
  const [isLargerThan48] = useMediaQuery("(min-width: 48em)");
  return (
    <>
      <Text
        fontSize={isLargerThan62 ? "5xl" : "4xl"}
        fontWeight="bold"
        mb="4"
        ml="20"
        fontFamily="-apple-system,BlinkMacSystemFont"
        id="About"
        className="TopNavFix"
      >
        Applications of Sorting
      </Text>

      <Text
        mb="4"
        ml="20"
        fontSize={isLargerThan62 ? "lg" : "base"}
        opacity={0.7}
      >
        Sorting, as a fundamental operation in computer science, has various
        practical applications in the real world. Sorting algorithms have
        numerous practical applications in the real world, facilitating
        efficient organization and retrieval of data. In database management,
        sorting ensures faster searching and indexing of records, enabling
        quicker access to information. E-commerce platforms utilize sorting to
        display products based on relevance, popularity, or price, enhancing
        user experience. Financial institutions employ sorting to process
        transactions, manage account information, and perform analytics on vast
        datasets. In logistics and supply chain management, sorting optimizes
        the delivery process, streamlining the movement of goods. Additionally,
        sorting aids in tasks like task scheduling, resource allocation, and
        event planning, making it an indispensable tool across various
        industries where efficient data arrangement and access are crucial for
        enhanced productivity and user satisfaction.
      </Text>
    </>
  );
}

export default About;
