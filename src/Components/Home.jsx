import React from "react";
import working from "../images/working.gif";
import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
// import { FaHandHolding, FaHandHoldingHeart } from "react-icons/fa";
// import { DragHandleIcon } from "@chakra-ui/icons";
import hand from "../images/waving-hand-joypixels.gif";
const Home = () => {
   return (
      <Flex id="home" direction={["column", "row"]}>
         <div id='home-container'>
            <h2 style={{ display: "inline" }}>Hi,</h2>
            <h3 style={{ display: "inline" }}>I'm a </h3>
            <h2 id="user-detail-name">Hariom Verma</h2>
            <h2 style={{ display: "inline" }}>A MERN Stack Developer</h2>
            {/* <Cursor /> */}
            <br />
            <a id="resume-link-2"
               // href="https://drive.google.com/file/d/1bDky1HRtcOC-XFUlvjSiHKGLubjUrZJp/view?usp=share_link"
               target="_blank"
            >
               <Button
                  id="resume-button-2"
                  px={4}
                  py={2}
                  cursor="pointer"
                  bg={"white"}
                  color={"gray.800"}  onClick={()=>window.open("https://drive.google.com/file/d/1bDky1HRtcOC-XFUlvjSiHKGLubjUrZJp/view?usp=share_link")}
               >
                  Resume
               </Button>
            </a>
         </div>
         <div id="working">
            <img
               src="https://img.theweek.in/content/dam/week/news/sci-tech/2019/May/laptop-project-work-project-management-software-shut.jpg"
               alt="phpto"
            />
         </div>
      </Flex>
   );
};

export default Home;
