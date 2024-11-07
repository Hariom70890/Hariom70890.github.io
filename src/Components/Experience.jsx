// Experience.js
import { Box, Text, VStack, Heading, Stack, Badge, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "../utils/bg-image.jpg";

const ExperienceCard = ({ role, company, duration, location, achievements }) => {
  return (
    <Box
      p={6}
      borderRadius="lg"
      border="1px solid"
      borderColor="whiteAlpha.200"
      bg="whiteAlpha.50"
      backdropFilter="blur(10px)"
      _hover={{ transform: "translateY(-5px)", transition: "all 0.2s" }}
      data-aos="fade-up"
    >
      <VStack align="start" spacing={3}>
        <Heading size="md" color="white">
          {role}
        </Heading>
        <Text color="cyan.400" fontSize="lg" fontWeight="bold">
          {company}
        </Text>
        <Stack direction={["column", "row"]} spacing={2} color="gray.300">
          <Text>{duration}</Text>
          <Text>•</Text>
          <Text>{location}</Text>
        </Stack>
        <VStack align="start" spacing={2}>
          {achievements.map((achievement, index) => (
            <Text key={index} color="whiteAlpha.800">
              • {achievement}
            </Text>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

const Experience = () => {
  useEffect(() => {
    AOS.init({ delay: 200 });
  }, []);

  const experiences = [
    {
      role: "Full Stack Developer",
      company: "MetaGeeks Technology",
      duration: "June 2024 - October 2024",
      location: "Noida, India",
      achievements: [
        "Developed web applications using Next.js and TypeScript for enhanced scalability",
        "Implemented backend services using Express.js and MongoDB, improving data storage efficiency by 20%",
        "Spearheaded development of gaming platform and e-commerce admin panel, boosting user engagement by 15%"
      ]
    },
    {
      role: "Full Stack Developer (Intern)",
      company: "Dream Viewer Infotech",
      duration: "Feb 2024 - June 2024",
      location: "Kolkata, India",
      achievements: [
        "Designed and developed Assanly, a billing software for streamlining business transactions",
        "Improved sales process efficiency by 30% through automated billing solutions",
        "Collaborated with clients to deliver custom software solutions meeting business requirements"
      ]
    }
  ];

  return (
    <Box bgImage={bg} id="experience" py={{ base: "10%", md: "5%" }}>
      <Text
        lineHeight={1}
        fontWeight={600}
        fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
        textAlign="center"
        className="text"
        data-aos="fade-right"
        color="white"
        mb={10}
      >
        Experience
      </Text>
      <VStack spacing={6} maxW="4xl" mx="auto" px={4}>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </VStack>
    </Box>
  );
};

export default Experience;
