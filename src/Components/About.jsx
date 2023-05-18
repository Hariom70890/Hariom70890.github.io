// import React from 'react'

// const About = () => {
//   return (
//     <div id='about' className='about-section'>About</div>
//   )
// }

// export default About

import React from "react";
import {
   Box,
   Flex,
   Heading,
   Text,
   Stack,
   Avatar,
   List,
   ListItem,
   ListIcon,
   Img,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const About = () => {
   return (
      <Box
         px={[4, 6, 8]}
         py={12}
         id="about"
         className="about section"
         width="100%"
         margin="auto"
         padding="20px 20%"
      >
         <Flex
            direction={["column-reverse", "row"]}
            alignItems="center"
            justifyContent="space-between"
            mb={12}
            gap={20}
         >
            <Box>
               <Heading as="h2" size="2xl" mb={4} id="aboutme">
                  About Me
               </Heading>
               <Text
                  fontSize="xl"
                  justifyContent={"center"}
                  id="user-detail-intro" className="paragraph"
               >
                  I'm a Full Stack Developer with experience in building web
                  applications using React, Node, and MongoDB. I have a passion
                  for problem-solving and creating user-friendly web
                  experiences.
               </Text>
            </Box>
            {/* <Box style={{}}> */}

            <Img
               height="30%"
               width="38%"
               borderRadius="50%"
               className="home-img"
               src="https://avatars.githubusercontent.com/u/115461226"
            />
            {/* </Box> */}
         </Flex>
      </Box>
   );
};

export default About;
