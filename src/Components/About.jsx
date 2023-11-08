import { Box, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "../utils/bg-image.jpg";

const About = () => {
   useEffect(() => {
      AOS.init({ delay: 50 });
   }, []);
   return (
      <Box bgImage={bg}  id="about" className = "about section"  >
         <Text
            lineHeight={1}
            fontWeight={600}
            fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
            // bg="linear-gradient(to top, #3494e6, #ec6ead);"
            textAlign="center"
            className="text"
            data-aos="zoom-out-right"
            p="30px"
         >
            About Me
         </Text>

         <Box
            data-aos="zoom-out-left"
            pt="25px"
            pb="30px"
            display="flex"
            // bgColor={"#EBF7FC"}
            flexDirection={["column", "column", "column", "row", "row", "row"]}
            colGap={14}
            justifyContent="center"
            maxW={"6xl"}
            m="auto"
         >
            <Box width={["full", "full", "full", "full", "30%", "30%"]}>
               <Image
                  w={{ base: "50%", md: "50%", lg: "50%" }}
                  src={"https://avatars.githubusercontent.com/u/115461226"}
                  rounded="50%"
                  m={"auto"}
               />
            </Box>
            <Box
               width={["full", "full", "full", "full", "60%", "60%"]}
               display="flex"
               alignItems={"center"}
            >
               <Box
                  p={10}
                  display="flex"
                  flexDir={"column"}
                  justifyContent="center"
                  m={"auto"}
               >
                  <Box>
                     <Text
                        fontSize={"xl"}
                        pt={4}
                        color="#BBBBBB"
                        fontWeight={"500"}
                        textAlign="start"
                        maxW={"xl"}
                        id="user-detail-intro"
                     >
                        {/* An inspired team player, always curious about new
                        problems and learning new things to deliver an
                        out-of-the-box solution with complete ownership. I hope
                        to work in a challenging environment as a specialized
                        MERN stack developer. */}
                        A passionate Full Stack MERN Developer skilled in HTML, CSS, Javascript and R eact, with a focus on designing and building high-performance and scalable enterprise applications
                     </Text>
                  </Box>
               </Box>
            </Box>
         </Box>
      </Box>
   );
};

export default About;
