import {
   Flex,
   Stack,
   Avatar,
   List,
   ListItem,
   ListIcon,
} from "@chakra-ui/react";
import React from "react";
import { Box, Heading, Text, Link, VStack, HStack } from "@chakra-ui/react";
import {
   FaGithub,
   FaTwitter,
   FaLinkedin,
   FaEnvelope,
   FaPhone,
} from "react-icons/fa";
import contactPhone from "../images/ContactGif.gif"

const Contact = () => {
   return (
      <div id="contact" >
         <div style={{ display:"flex",direction:["reverse-column","row"]}} >
            <div style={{ width: "50%", margin: "auto",textAlign:"center" }}>
            <Heading as="h2" size="2xl" mb={10}>
               Contact Me
            </Heading>
               <VStack spacing={10}  justifyContent={"left"}>
                  <HStack spacing={10}>
                     <Link
                        href="https://github.com/Hariom70890"
                        target="_blank"
                        id="contact-github"
                     >
                        <Box
                           as={FaGithub}
                           size="40px"
                           color="gray.500"
                           _hover={{ color: "blue.500" }}
                        />
                       
                     </Link>
                     <h1>Hariom70890</h1>
                  </HStack>
                  <HStack>
                  <Link>
                     <Box
                        as={FaPhone}
                        justifyContent={"center"}
                        size="40px"
                        color="gray.500"
                        _hover={{ color: "blue.400" }}
                     />
                  </Link>
                     <h1 id="contact-phone">+91 7089008571</h1>
                  </HStack>
                  <HStack>

                  <Link
                     href="https://www.linkedin.com/in/hariom-verma-9618b41b7/"
                     target="_blank"
                     id="contact-linkedin"
                  >
                     <Box
                        as={FaLinkedin}
                        size="40px"
                        color="gray.500"
                        _hover={{ color: "blue.600" }}
                     />
                  </Link>
                     <h1>hariom-verma-9618b41b7</h1>
                  </HStack>
                  <HStack>
                  <Link
                     href="hariomsunilverma@gmail.com"
                     target="_blank"
                     id="contact-email"
                  >
                     <Box
                        as={FaEnvelope}
                        size="40px"
                        color="gray.500"
                        _hover={{ color: "red.500" }}
                     />
                  </Link>
                     <h1>hariomsunilverma</h1>
                  </HStack>
                  <HStack>
                  <Text fontSize="lg">
                     Feel free to connect with me on social media or send me an
                     email at{" "}
                     <Link
                        href="hariomsunilverma@gmail.com"
                        color="blue.500"
                        _hover={{ textDecoration: "underline" }}
                     >
                        hariomsunilverma@gmail.com
                     </Link>
                     .
                  </Text>
                  </HStack>
               </VStack>
            </div>
         

          <img width={"50%"} height={"20%"} src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="phone Gif" />
        
         </div>
      </div>
   );
};

export default Contact;
