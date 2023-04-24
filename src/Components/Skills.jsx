import React from 'react'
import { Box, Flex, Heading, Text, Stack, Avatar, List, ListItem, ListIcon } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const Skills = () => {
  return (
    <div id='skills'>
          <Stack direction={["column", "row"]} spacing={8} mb={12}>
          <Box textAlign={'left'}>
          <Heading as="h3" size="xl" mb={4}>
           Tech Skills
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
        </Box> <Box textAlign={'left'}>
          <Heading as="h3" size="xl" mb={4}>
           Soft Skills
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
        </Stack>
    </div>
  )
}

export default Skills