import React from "react";
import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";

const Home = () => {
   return (
      <Flex
         id="home"
         direction={{ base: "column", md: "row" }}
         justifyContent="space-between"
         alignItems="center"
         px={10}
         py={20}
         backgroundColor="gray.50"
      >
         <Box
            flex={{ base: 1, md: 1 / 2 }}
            mb={{ base: 12, md: 0 }}
            pr={{ base: 0, md: 16 }}
            textAlign={{ base: "center", md: "left" }}
         >
            <Heading
               as="h1"
               size="3xl"
               fontWeight="bold"
               lineHeight="normal"
               color="gray.800"
               mb={6}
               id="user-detail-name"
            >
               Hi, I'm Hariom Verma
            </Heading>
            <Text
               fontSize="xl"
               lineHeight="tall"
               color="gray.600"
               mb={6}
               id="user-detail-intro"
            >
               Hardworking and passionate job seeker with strong organizational
               skills eager to learn more. Ready to help team achieve company
               goals. To seek and maintain full- time position that offers
               professional challenges utilizing interpersonal skills, excellent
               time management and problem- solving skills.
            </Text>
            <Button
               colorScheme="blue"
               size="lg"
               _hover={{ bg: "blue.600" }}
               as="a"
               href="https://drive.google.com/file/d/1bDky1HRtcOC-XFUlvjSiHKGLubjUrZJp/view"
               id="resume-button-1"
            >
              Resume
            </Button>
         </Box>
         <Box flex={{ base: 1, md: 1 / 2 }} mb={{ base: 12, md: 0 }}>
            <Image
               src="https://avatars.githubusercontent.com/u/115461226?v=4"
               alt="developer working on a computer"
               borderRadius="50%"
               boxShadow="xl"
               objectFit="cover"
               objectPosition="center"
               width="70%"
               padding="auto"
               margin="auto"
               class="home-img"
               // borderRadius="50%"
               // height={{ base: "auto", md: "80vh" }}
            />
         </Box>
      </Flex>
   );
};

export default Home;
