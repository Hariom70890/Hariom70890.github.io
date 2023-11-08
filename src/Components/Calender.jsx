import { Box, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "../utils/bg-image.jpg";

const Calender = () => {
   useEffect(() => {
      AOS.init({ delay: 300 });
   }, []);
   return (
      <Box bgImage={bg} py={"5%"} className="react-activity-calendar"   boxSizing="border-box">
         <Text
            lineHeight={1}
            fontWeight={600}
            fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
            // color={"#2892D4"}
            textAlign="center"
            className=" text" 
            data-aos="fade-right"
         >
            Github Calender
         </Text>
         <Box
            maxW={{ base: "2xl", md: "4xl", lg: "5xl" }}
            m="auto"
            mt={14}
            px="9"
            color="white"
            data-aos="zoom-out-right"
         >
            <GitHubCalendar
               style={{ margin: "auto" }}
               username="Hariom70890"
               blockSize={20}
               color={"#0CC4EA"}

               //   theme="GitHub theme "
            ></GitHubCalendar>
            <br />

            <Box
               m="auto"
               maxH={"300px"}
               pt="40px"
               w="max-content"
               data-aos="zoom-out-left"
               width={"70%"}
            >
               <Image
                  m="auto"  id="github-stats-card"
                  src="https://github-readme-stats.vercel.app/api?username=Hariom70890&show_icons=true&hide_border=true&theme=algolia"
                  alt=""
               />
        
            </Box>
            <Box
               m="auto"
               pt="40px"
               maxH={"300px"}
               width={"70%"}
               data-aos="zoom-out-right"
            >
               <Image
                  // width={{sm:"90%",md:"70%",lg:"50%"}}
                  id="github-streak-stats" 
                  src="https://github-readme-streak-stats.herokuapp.com/?user=Hariom70890&hide_border=true&theme=algolia"
                  alt=""
                  m="auto"
               />
                
            </Box>
            <Box
               m="auto"
               maxH={"400px"}
               pt="40px"
               w="max-content"
               data-aos="zoom-out-left"
               // width={"80%"}
            >
               <Image
                  m="auto" 
                  id="github-top-langs"
            //  w={"1200%"}
         src = 'https://github-readme-stats.vercel.app/api/top-langs/?username=hariom70890&hide_border=true&include_all_commits=true&layout=compact&theme=algolia'

                  alt=""
               />
     
            </Box>
         </Box>
      </Box>
   );
};

export default Calender;
