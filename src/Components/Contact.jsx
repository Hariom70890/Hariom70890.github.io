import { Flex,  Stack, Avatar, List, ListItem, ListIcon } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import React from 'react';
import { Box, Heading, Text, Link, VStack, HStack } from '@chakra-ui/react';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <Box py={20} px={[4, 8, 16, 32]} id="contact">
      <Heading as="h2" size="2xl" mb={10}>
        Contact Me
      </Heading>
      <VStack spacing={6}>
        <HStack spacing={6}>
          <Link href="https://github.com/Hariom70890" target="_blank" id="contact-github" >
           Github <Box as={FaGithub} size="40px" color="gray.500" _hover={{ color: 'blue.500' }} />
          </Link>
          <Link  >
          <h1 id="contact-phone">+91 7089008571</h1>
            <Box as={FaPhone} size="40px" color="gray.500" _hover={{ color: 'blue.400' }} />
          </Link>
          <Link href="https://www.linkedin.com/in/hariom-verma-9618b41b7/" target="_blank"  id="contact-linkedin" >
           <h1>Linkedin</h1> <Box as={FaLinkedin} size="40px" color="gray.500" _hover={{ color: 'blue.600' }} />
          </Link>
        </HStack>
        <Link href="hariomsunilverma@gmail.com" target="_blank" id="contact-email" >
        <h1>Email</h1>
          <Box as={FaEnvelope} size="40px" color="gray.500" _hover={{ color: 'red.500' }} />
        </Link>
        <Text fontSize="lg" color="gray.600">
          Feel free to connect with me on social media or send me an email at{' '}
          <Link href="hariomsunilverma@gmail.com" color="blue.500" _hover={{ textDecoration: 'underline' }}>
          hariomsunilverma@gmail.com
          </Link>
          .
        </Text>
      </VStack>
    </Box>
  );
};

export default Contact;
