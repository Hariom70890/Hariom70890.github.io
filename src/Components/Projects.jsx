// PETS CONNRCT; - https://pets-connect.vercel.app/
// github : - https://github.com/Chakresh2001/delirious-calendar-2968

// balance bite : - https://balanced-bite.vercel.app/
// git :- https://github.com/Payalsahuj/overwrought-skin-2796

// quickbuy : - https://quickbuy-363.netlify.app/
// git :- https://github.com/Hariom70890/fun-devolopment-3171

// git https://github.com/Hariom70890/accidental-pull-8164

// git : - https://github.com/Hariom70890/industrious-steam-9257

// Bigpocket : - amazing-selkie-0b207f.netlify.app/
// git : - https://github.com/vishalpadaswan3/whole-lace-7572

// apnatime : - https://apna-time.netlify.app/
// github :- https://github.com/Hariom70890/exact-farm-4562

import {
   Box,
   Button,
   Grid,
   GridItem,
   Heading,
   Image,
   Link,
   Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ApnaTime from "../utils/Projects/ApnaTime.png";
import BigPocket from "../utils/Projects/BigPocket.png";
import QuickBuy from "../utils/Projects/QuickBuy.png";
import BalanceBite from "../utils/Projects/BalanceBite.png";
import PetsConnect from "../utils/Projects/PetsConnect.png";
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "../utils/bg-image.jpg";

const Projects = () => {
   const [more, setMore] = useState(false);
   useEffect(() => {
      AOS.init({ delay: 50 });
   }, []);
   return (
      <Box bgImage={bg} id="projects" py={"5%"} boxSizing="border-box">
         <Box maxW={"6xl"} m="auto" boxSizing="border-box">
            <Text
               lineHeight={1}
               fontWeight={600}
               fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
               // color={"#2892D4"}
               textAlign="center"
               className="text"
               data-aos="fade-right"
               boxSizing="border-box"
               // color="white"
            >
               My Projects
            </Text>
            <Grid
               display={"flex"}
               flexDir={"column"}
               gap={6}
               rowGap={9}
               maxW={"5xl"}
               margin="auto"
               pt={12}
               px="7"
               boxSizing="border-box"
            >
               {/* -------------------------------------START----------------------------------------------------- */}

               {
                  <GridItem
                     className="project-card"
                     transition="all .2s ease-in-out"
                     display={"flex"}
                     _hover={{ transform: "scale(0.95)" }}
                     flexDir={{
                        base: "column",
                        sm: "column",
                        md: "column",
                        lg: "row",
                     }}
                     boxShadow="0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35)"
                     p={"1%"}
                     rounded="10px"
                     bgGradient="linear(to-r,cyan.400,blue.500)"
                     data-aos="zoom-out-left"
                  >
                     <Box w={{ lg: "50%", md: "100%" }}>
                        <Image
                           src={BalanceBite}
                           alt="ApnaTime"
                           rounded={"md"}
                           minH={"320px"}
                        />
                     </Box>
                     <Box pl="2%" w={{ lg: "50%", md: "100%" }}>
                        <Heading
                           fontSize={{
                              base: "sm",
                              sm: "md",
                              md: "lg",
                              lg: "xl",
                           }}
                           color="white"
                           className="project-title"
                        >
                           BalanceBite.com (clone) :-
                        </Heading>

                        <Box py="1%">
                           <Text
                              fontWeight={"bold"}
                              fontSize={{
                                 base: "xs",
                                 sm: "sm",
                                 md: "md",
                                 lg: "lg",
                              }}
                              textAlign="start"
                              textColor={"lightgrey"}
                              className="project-description"
                           >
                              BalanceBite is a low-code platform for building
                              collaborative apps. Customize your workflow,
                              collaborate, and achieve ambitious outcomes.
                           </Text>
                        </Box>
                        <Box
                           py="1%"
                           color={"whatsapp.100"}
                           // display="flex"
                           className="project-teck-stack"
                           gap="1%"
                           alignItems={"center"}
                        >
                           <Button
                              fontSize={"xs"}
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              TECHSTACKS :-
                           </Button>
                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              HTML
                           </Button>
                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              React
                           </Button>
                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              React-Router
                           </Button>
                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              Express js
                           </Button>
                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              CSS
                           </Button>
                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              JavaScript
                           </Button>
                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              MongoDB
                           </Button>
                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              Chakra-ui
                           </Button>
                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              aos-animation
                           </Button>
                        </Box>
                        <Box
                           display={"flex"}
                           justifyContent="space-between"
                           fontWeight={"bolder"}
                           p="1%"
                           color={"white"}
                           width="40%"
                        >
                           <Box cursor={"pointer"} rounded="90%">
                              <Link
                                 className="project-deployed-link"
                                 href="https://balanced-bite.vercel.app/"
                                 target={"_blank"}
                              >
                                 <Button
                                    bg={"none"}
                                    _hover={{ bg: "none" }}
                                    className="text"
                                 >
                                    Live Link
                                 </Button>
                              </Link>
                           </Box>
                           <Box cursor={"pointer"} rounded="50%">
                              <Link
                                 className="project-github-link"
                                 href="https://github.com/Payalsahuj/overwrought-skin-2796"
                                 target={"_blank"}
                              >
                                 <Button
                                    bg={"none"}
                                    _hover={{ bg: "none" }}
                                    className="text"
                                 >
                                    Github
                                 </Button>
                              </Link>
                           </Box>
                        </Box>
                     </Box>
                  </GridItem>
               }

               {
                  <GridItem
                     className="project-card"
                     transition="all .2s ease-in-out"
                     display={"flex"}
                     _hover={{ transform: "scale(0.95)" }}
                     flexDir={{
                        base: "column",
                        sm: "column",
                        md: "column",
                        lg: "row",
                     }}
                     boxShadow="0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35)"
                     p={"1%"}
                     rounded="10px"
                     bgGradient="linear(to-r,cyan.400,blue.500)"
                     data-aos="zoom-out-left"
                  >
                     <Box w={{ lg: "50%", md: "100%" }}>
                        <Image
                           src={QuickBuy}
                           alt="QuickBuy"
                           rounded={"md"}
                           minH={"320px"}
                        />
                     </Box>
                     <Box pl="2%" w={{ lg: "50%", md: "100%" }}>
                        <Heading
                           fontSize={{
                              base: "sm",
                              sm: "md",
                              md: "lg",
                              lg: "xl",
                           }}
                           className="project-title"
                           color="white"
                        >
                           QuickBuy.com (clone) :-
                        </Heading>

                        <Box py="1%">
                           <Text
                              fontWeight={"bold"}
                              fontSize={{
                                 base: "xs",
                                 sm: "sm",
                                 md: "md",
                                 lg: "lg",
                              }}
                              textAlign="start"
                              className="project-description"
                              textColor={"lightgrey"}
                           >
                              Our e-commerce website boasts an intuitive and
                              user-friendly design, ensuring that visitors can
                              easily navigate and find the products they desire.
                           </Text>
                        </Box>
                        <Box
                           py="1%"
                           color={"whatsapp.100"}
                           // display="flex"
                           className="project-teck-stack"
                           gap="1%"
                           alignItems={"center"}
                        >
                           <Button
                              fontSize={"xs"}
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              TECHSTACKS :-
                           </Button>
                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              React
                           </Button>
                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              Redux
                           </Button>
                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              JavaScript
                           </Button>
                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              CHAKRA UI
                           </Button>
                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              React-router
                           </Button>
                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              JSON-Server
                           </Button>
                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              React-Redux
                           </Button>
                           {/* <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              Render
                           </Button> */}
                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              HTML
                           </Button>
                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              CSS
                           </Button>
                        </Box>
                        <Box
                           display={"flex"}
                           justifyContent="space-between"
                           fontWeight={"bolder"}
                           p="1%"
                           color={"white"}
                           width="40%"
                        >
                           <Box cursor={"pointer"} rounded="90%">
                              <Link
                                 className="project-deployed-link"
                                 href=" https://quickbuy-363.netlify.app/"
                                 target={"_blank"}
                              >
                                 <Button
                                    bg={"none"}
                                    _hover={{ bg: "none" }}
                                    className="text"
                                 >
                                    Live Link
                                 </Button>
                              </Link>
                           </Box>
                           <Box cursor={"pointer"} rounded="50%">
                              <Link
                                 className="project-github-link"
                                 href=" https://github.com/Hariom70890/fun-devolopment-3171"
                                 target={"_blank"}
                              >
                                 <Button
                                    bg={"none"}
                                    _hover={{ bg: "none" }}
                                    className="text"
                                 >
                                    Github
                                 </Button>
                              </Link>
                           </Box>
                        </Box>
                     </Box>
                  </GridItem>
               }

               {
                  <GridItem
                     display={"flex"}
                     className="project-card"
                     transition="all .2s ease-in-out"
                     _hover={{ transform: "scale(0.95)" }}
                     flexDir={{
                        base: "column",
                        sm: "column",
                        md: "column",
                        lg: "row",
                     }}
                     boxShadow="0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35)"
                     p={"1%"}
                     rounded="10px"
                     bgGradient="linear(to-r,cyan.400,blue.500)"
                     data-aos="zoom-out-left"
                  >
                     <Box w={{ lg: "50%", md: "100%" }}>
                        <Image
                           src={BigPocket}
                           alt="ApnaTime"
                           rounded={"md"}
                           minH={"320px"}
                        />
                     </Box>
                     <Box pl="2%" w={{ lg: "50%", md: "100%" }}>
                        <Heading
                           className="project-title"
                           fontSize={{
                              base: "sm",
                              sm: "md",
                              md: "lg",
                              lg: "xl",
                           }}
                           color="white"
                        >
                           BigPocket.com (clone) :-
                        </Heading>

                        <Box py="1%">
                           <Text
                              className="project-description"
                              fontWeight={"bold"}
                              fontSize={{
                                 base: "xs",
                                 sm: "sm",
                                 md: "md",
                                 lg: "lg",
                              }}
                              textAlign="start"
                              textColor={"lightgrey"}
                           >
                              BigPocket leading online shop selling a wide range
                              of consumer electronic gadgets. Where users can
                              from all over world.
                           </Text>
                        </Box>
                        <Box
                           py="1%"
                           color={"whatsapp.100"}
                           // display="flex"
                           gap="1%"
                           alignItems={"center"}
                        >
                           <Button
                              className="project-teck-stack"
                              fontSize={"xs"}
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              TECHSTACKS :-
                           </Button>
                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              HTML
                           </Button>
                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              CSS
                           </Button>
                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              CSS-animation
                           </Button>{" "}
                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >JavaScript Library</Button>{" "}
                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           > CSS-Grid</Button>
                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              JSON API
                           </Button>
                        </Box>
                        <Box
                           display={"flex"}
                           justifyContent="space-between"
                           fontWeight={"bolder"}
                           p="1%"
                           color={"white"}
                           width="40%"
                        >
                           <Box cursor={"pointer"} rounded="90%">
                              <Link
                                 className="project-deployed-link"
                                 href="https://amazing-selkie-0b207f.netlify.app/"
                                 // href="https://dreamy-otter-4ee23d.netlify.app/"
                                 target={"_blank"}
                              >
                                 <Button
                                    bg={"none"}
                                    _hover={{ bg: "none" }}
                                    className="text"
                                 >
                                    Live Link
                                 </Button>
                              </Link>
                           </Box>
                           <Box cursor={"pointer"} rounded="50%">
                              <Link
                                 className="project-github-link"
                                 href="https://github.com/vishalpadaswan3/whole-lace-7572"
                                 // href="https://github.com/harishpampana7/judicious-income-4437"
                                 target={"_blank"}
                              >
                                 <Button
                                    bg={"none"}
                                    _hover={{ bg: "none" }}
                                    className="text"
                                 >
                                    Github
                                 </Button>
                              </Link>
                           </Box>
                        </Box>
                     </Box>
                  </GridItem>
               }

               {more && (
                  <GridItem
                     className="project-card"
                     transition="all .2s ease-in-out"
                     _hover={{ transform: "scale(0.95)" }}
                     display={"flex"}
                     flexDir={{
                        base: "column",
                        sm: "column",
                        md: "column",
                        lg: "row",
                     }}
                     boxShadow="0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35)"
                     p={"1%"}
                     rounded="10px"
                     bgGradient="linear(to-r,cyan.400,blue.500)"
                     data-aos="zoom-out-left"
                  >
                     <Box w={{ lg: "50%", md: "100%" }}>
                        <Image
                           src={ApnaTime}
                           alt="ApnaTime"
                           rounded={"md"}
                           minH={"320px"}
                        />
                     </Box>
                     <Box pl="2%" w={{ lg: "50%", md: "100%" }}>
                        <Heading
                           className="project-title"
                           fontSize={{
                              base: "sm",
                              sm: "md",
                              md: "lg",
                              lg: "xl",
                           }}
                           color="white"
                        >
                           ApnaTime.com (clone) :-
                        </Heading>

                        <Box py="1%">
                           <Text
                              className="project-description"
                              fontWeight={"bold"}
                              fontSize={{
                                 base: "xs",
                                 sm: "sm",
                                 md: "md",
                                 lg: "lg",
                              }}
                              textAlign="start"
                              textColor={"lightgrey"}
                           >
                              ApnaTime app provides real-time tracking capabilities, offering insights into how time is being spent throughout the day.
                           </Text>
                        </Box>
                        <Box
                           py="1%"
                           color={"whatsapp.100"}
                           // display="flex"
                           gap="1%"
                           alignItems={"center"}
                        >
                           <Button
                              className="project-teck-stack"
                              fontSize={"xs"}
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              TECHSTACKS :-
                           </Button>
                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              HTML
                           </Button>
                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              CSS
                           </Button>
                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              JavaScript
                           </Button>
                        </Box>
                        <Box
                           display={"flex"}
                           justifyContent="space-between"
                           fontWeight={"bolder"}
                           p="1%"
                           color={"white"}
                           width="40%"
                        >
                           <Box cursor={"pointer"} rounded="90%">
                              <Link
                                 className="project-deployed-link"
                                 // href="https://gilded-dragon-38bf52.netlify.app/"
                                 href = "https://apna-time.netlify.app/"
                                 target={"_blank"}
                              >
                                 <Button
                                    bg={"none"}
                                    _hover={{ bg: "none" }}
                                    className="text"
                                 >
                                    Live Link
                                 </Button>
                              </Link>
                           </Box>
                           <Box cursor={"pointer"} rounded="50%">
                              <Link
                                 className="project-github-link"
                                 href = "https://github.com/Hariom70890/exact-farm-4562   "
                                 // href="https://github.com/Bipin579/deeply-oven-5153"
                                 target={"_blank"}
                              >
                                 <Button
                                    bg={"none"}
                                    _hover={{ bg: "none" }}
                                    className="text"
                                 >
                                    Github
                                 </Button>
                              </Link>
                           </Box>
                        </Box>
                     </Box>
                  </GridItem>
               )}
               {more && (
                  <GridItem
                     transition="all .2s ease-in-out"
                     className="project-card"
                     display={"flex"}
                     _hover={{ transform: "scale(0.95)" }}
                     flexDir={{
                        base: "column",
                        sm: "column",
                        md: "column",
                        lg: "row",
                     }}
                     boxShadow="0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35)"
                     p={"1%"}
                     rounded="10px"
                     bgGradient="linear(to-r,cyan.400,blue.500)"
                     data-aos="zoom-out-left"
                  >
                     <Box w={{ lg: "50%", md: "100%" }}>
                        <Image
                           src={PetsConnect}
                           alt="ApnaTime"
                           rounded={"md"}
                           minH={"320px"}
                        />
                     </Box>
                     <Box pl="2%" w={{ lg: "50%", md: "100%" }}>
                        <Heading
                           fontSize={{
                              base: "sm",
                              sm: "md",
                              md: "lg",
                              lg: "xl",
                           }}
                           color="white"
                           className="project-title"
                        >
                           PetsConnect.com (clone) :-
                        </Heading>

                        <Box py="1%">
                           <Text
                              fontWeight={"bold"}
                              fontSize={{
                                 base: "xs",
                                 sm: "sm",
                                 md: "md",
                                 lg: "lg",
                              }}
                              textAlign="start"
                              textColor={"lightgrey"}
                              className="project-description"
                           >
                              Connect with your perfect furry companion and
                              empower animal welfare organizations with our Pet
                              Adoption Website, featuring pet searches, user
                              accounts, wish lists, adoption requests, and admin
                              controls.
                           </Text>
                        </Box>
                        <Box
                           py="1%"
                           color={"whatsapp.100"}
                           // display="flex"
                           gap="1%"
                           className="project-tech-stack"
                           alignItems={"center"}
                        >
                           <Button
                              fontSize={"xs"}
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              TECHSTACKS :-
                           </Button>
                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              React
                           </Button>
                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              Redux
                           </Button>
                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              Node js
                           </Button>

                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              JavaScript
                           </Button>

                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              CSS
                           </Button>

                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              HTML
                           </Button>

                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              MongoBD
                           </Button>
                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              ReactJs
                           </Button>

                           <Button
                              fontSize={"xs"}
                              rounded="full"
                              m={"2px"}
                              color="#81caed"
                              bg={"blackAlpha.500"}
                           >
                              Chakra-ui
                           </Button>
                        </Box>
                        <Box
                           display={"flex"}
                           justifyContent="space-between"
                           fontWeight={"bolder"}
                           p="1%"
                           color={"white"}
                           width="40%"
                        >
                           <Box cursor={"pointer"} rounded="90%">
                              <Link
                                 href="https://pets-connect.vercel.app/"
                                 target={"_blank"}
                                 className="project-deployed-link"
                              >
                                 <Button
                                    bg={"none"}
                                    _hover={{ bg: "none" }}
                                    className="text"
                                 >
                                    Live Link
                                 </Button>
                              </Link>
                           </Box>

                           <Box cursor={"pointer"} rounded="50%">
                              <Link
                                 href="https://github.com/Chakresh2001/delirious-calendar-2968"
                                 target={"_blank"}
                                 className="project-github-link "
                              >
                                 <Button
                                    bg={"none"}
                                    _hover={{ bg: "none" }}
                                    className="text"
                                 >
                                    Github
                                 </Button>
                              </Link>
                           </Box>
                        </Box>
                     </Box>
                  </GridItem>
               )}
               {/* ----------------------------END------------------------------------------------- */}
            </Grid>
            <Box onClick={() => setMore(!more)} maxW={"max-content"} m="auto">
               <Button
                  cursor={"pointer"}
                  color={"white"}
                  rounded="md"
                  bgGradient="linear(to-r,cyan.400,blue.500)"
                  _hover={{
                     bg: "blue.500",
                  }}
                  m="auto"
                  my="15%"
                  size={"lg"}
               >
                  {more ? "See Less" : "See More"}
               </Button>
            </Box>
         </Box>
      </Box>
   );
};

export default Projects;
