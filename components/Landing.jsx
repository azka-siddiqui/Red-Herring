import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Button,
  Stack,
  Img,
  SimpleGrid,
  Text,
  Icon,
} from "@chakra-ui/react";

export const Landing = () => {
  return (
    <Box px={8} py={24} mx="auto">
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
      >
        <chakra.h1
          mb={6}
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="black"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color={useColorModeValue("gray.800", "gray.100")}
        >
          Stopping{" "}
          <Text
            display={{ base: "block", lg: "inline" }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, red.400,orange.300)"
          >
            misinformation
          </Text>{" "}
          together.
        </chakra.h1>
        <chakra.p
          px={{ base: 0, lg: 24 }}
          mb={6}
          fontSize={{ base: "md", md: "lg" }}
          color={useColorModeValue("gray.600", "gray.300")}
        >
         Red Herring is a enterprise solution that enables social media providers to detect, mark, and alert users of misinformation on their platforms. Coded as a project for STEMing UP 2023.
         </chakra.p>
        <Stack
          direction={{ base: "column", sm: "row" }}
          mb={{ base: 4, md: 8 }}
          spacing={2}
          justifyContent={{ sm: "left", md: "center" }}
        >
          <Button
            as="a"
            href='#features'
            variant="solid"
            colorScheme="brand"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: "full", sm: "auto" }}
            mb={{ base: 2, sm: 0 }}
            size="lg"
            cursor="pointer"
            bg='red.400'
            _hover={{
                bg: 'red.500'
            }}
          >
            Learn More           
            <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </Icon>
          </Button>
          <Button
            as="a"
            href='mailto:info@red-herring.com'
            colorScheme="gray"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: "full", sm: "auto" }}
            mb={{ base: 2, sm: 0 }}
            size="lg"
            cursor="pointer"
          >
            Get a quote
            <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                clipRule="evenodd"
              />
            </Icon>
          </Button>

        </Stack>

        <SimpleGrid columns={{base: 1, md: 2}} justifyContent='center' alignItems='center'>

        <Img src='/herring_posts.png'  maxH='1000px' mx='auto' />
        <Img src='/map.png' maxH='900px' mx='auto' />

        </SimpleGrid>

      </Box>
    </Box>
  );
};