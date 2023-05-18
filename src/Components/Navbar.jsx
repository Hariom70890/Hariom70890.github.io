import React from "react";
import {
   Box,
   Flex,
   Text,
   IconButton,
   useDisclosure,
   Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";
// import resume from "../images/Hariom_Verma_Resume.pdf"
// import resume
const Navbar = () => {
   const { isOpen, onToggle } = useDisclosure();

   return (
      <Flex
         id="nav-menu"
         as="nav"
         align="center"
         justify="space-between"
         wrap="wrap"
         padding="1rem"
         backgroundColor="#5b5959"
         color="white"
         position="fixed"
         width="full"
      >
         <Text
            id="user-detail-name"
            fontSize="xl"
            fontWeight="bold"
            pl={20}
            letterSpacing={15}
         >
            HARI
         </Text>
         <Box display={{ base: "block", md: "none" }} onClick={onToggle}>
            <IconButton
               icon={<HamburgerIcon />}
               variant="ghost"
               size="lg"
               aria-label="Toggle Navigation"
            />
         </Box>
         <Box
            display={{ base: isOpen ? "block" : "none", md: "flex" }}
            width={{ base: "full", md: "auto" }}
            alignItems="center"
            justifyContent="right"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
         >
            <Tabs />
            <ResumeButton />
         </Box>
      </Flex>
   );
};

const Tabs = () => {
   return (
      <>
         <NavItem to="home" label="Home" className={`navitem nav-link home`} />
         <NavItem
            to="about"
            label="About"
            className={`navitem nav-link about`}
         />
         <NavItem
            to="skills"
            label="Skills"
            className={`navitem nav-link skills`}
         />
         <NavItem
            to="projects"
            label="Projects"
            className={`navitem nav-link projects`}
         />
         <NavItem
            to="contact"
            label="Contact"
            className={`navitem nav-link contact`}
         />
      </>
   );
};

const NavItem = ({ to, label }) => {
   return (
      <Link to={to} smooth={true} duration={500}>
         <Text
            px={4}
            py={2}
            cursor="pointer"
            _hover={{ color: "blue.400" }}
            _active={{ color: "blue.600" }}
         >
            {label}
         </Text>
      </Link>
   );
};

const ResumeButton = () => {
   return (
      <a
         id="resume-link-1"
         className="resumebutton nav-link resume"
         // href="https://drive.google.com/file/d/1bDky1HRtcOC-XFUlvjSiHKGLubjUrZJp/view?usp=share_link"
         target="_blank"
         // href={resume}
         download={"Hariom-Verma-Resume"}
      >
         <Button
            id="resume-button-1"
            px={4}
            py={2}
            cursor="pointer"
            bg={"white"}
            color={"gray.800"}
            onClick={() =>
               window.open(
                  "https://drive.google.com/file/d/1bDky1HRtcOC-XFUlvjSiHKGLubjUrZJp/view?usp=share_link"
               )
            }
         >
            Resume
         </Button>
      </a>
   );
};

export default Navbar;
