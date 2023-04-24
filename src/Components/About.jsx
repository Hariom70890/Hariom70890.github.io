// import React from 'react'

// const About = () => {
//   return (
//     <div id='about' className='about-section'>About</div>
//   )
// }

// export default About


import React from "react";
import { Box, Flex, Heading, Text, Stack, Avatar, List, ListItem, ListIcon } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const About = () => {
  return (
    <Box px={[4, 6, 8]} py={12} id='about' className='about-section'>
      <Flex direction={["column", "row"]} alignItems="center" justifyContent="space-between" mb={12}>
        <Box>
          <Heading as="h2" size="2xl" mb={4}>
            About Me
          </Heading>
          <Text fontSize="xl" color="gray.600">
            I'm a Full Stack Developer with experience in building web applications using React, Node, and MongoDB. I have a passion for problem-solving and creating user-friendly web experiences.
          </Text>
        </Box>
        <Box>
          <Avatar size="xl" src="https://avatars.githubusercontent.com/u/115461226" />
        </Box>
      </Flex>
      <Stack direction={["column", "row"]} spacing={8} mb={12}>
        <Box>
          <Heading as="h3" size="xl" mb={4}>
            Skills
          </Heading>
          <List spacing={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              React
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Node.js
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              MongoDB
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              HTML/CSS
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Git
            </ListItem>
          </List>
        </Box>
        <Box>
          <Heading as="h3" size="xl" mb={4}>
            Education
          </Heading>
          <List spacing={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Bachelor of Science in Computer Science, XYZ University
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Full Stack Web Development, Online Course
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              UI/UX Design, Online Course
            </ListItem>
          </List>
        </Box>
      </Stack>
      <Box>
        <Heading as="h3" size="xl" mb={4}>
          Experience
        </Heading>
        <Text fontSize="xl" color="gray.600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae mi vel turpis ornare iaculis. Sed
          hendrerit mi non velit consectetur, id laoreet neque congue. Vivamus in rutrum felis. Donec bibendum, nisi vel
          fringilla fringilla, nibh lacus vestibulum arcu, in commodo ipsum eros at augue. Proin vitae nisl ac tellus
          placerat suscipit. Fusce commodo nisi ut ex consectetur, ut ultricies enim malesuada. In viverra nulla sapien,
          nec vestibulum nibh
          </Text>
      </Box>
      <Box>
        <Heading as="h3" size="xl" mb={4}>
          Projects
        </Heading>
        <Text fontSize="xl" color="gray.600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae mi vel turpis ornare iaculis. Sed
          hendrerit mi non velit consectetur, id laoreet neque congue. Vivamus in rutrum felis. Donec bibendum, nisi vel
          fringilla fringilla, nibh lacus vestibulum arcu, in commodo ipsum eros at augue. Proin vitae nisl ac tellus
          placerat suscipit. Fusce commodo nisi ut ex consectetur, ut ultricies enim malesuada. In viverra nulla sapien,
          nec vestibulum nibh. Vestibulum eu mi vel lacus ullamcorper vehicula eu quis purus. In ut tristique leo.
        </Text>
      </Box>
    </Box>
  );
};

export default About;
