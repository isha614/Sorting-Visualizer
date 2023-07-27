import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      borderTop="1px solid"
      borderTopColor="gray.200"
      mt={20}
      py={4}
    >
      <Flex justify="center">
        <Text fontSize="sm" color="black.600">
          © {new Date().getFullYear()} Sorting Visualizer
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
