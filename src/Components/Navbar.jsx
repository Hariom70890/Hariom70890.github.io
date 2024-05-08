import {
   Box,
   Flex,
   HStack,
   IconButton,
   useDisclosure,
   
   Stack,
   Image,
   Button,
 } from "@chakra-ui/react";
 import "./navbar.css";
// // import resume from "../images/Hariom_Verma_Resume.pdf"
 
 import Project from "../utils/Hariom_Verma_Resume.pdf";
 
 import { Link } from "react-scroll";
 import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
 import Logo from "../utils/hari.png";
 const Links = [
   { title: "Home", id: "home", class: "nav-link home" },
   { title: "AboutMe", id: "about", class: "nav-link about" },
   { title: "Skills", id: "skills" , class: "nav-link skills" },
   { title: "Projects", id: "projects", class: "nav-link projects" },
   { title: "Contact", id: "contact", class: "nav-link contact" },
 ];
 
 export default function Navbar() {
   const { isOpen, onOpen, onClose } = useDisclosure();
 
   return (
     <Box
       bg="#022754"
       pos={"sticky"}
       top="0"
       zIndex={10}
       boxShadow={"0px 15px 10px -15px #111"}
       boxSizing="border-box"
       id="nav-menu"
        className="nav-menu"
     >
       <Box
         // bg="#347FCD"
         maxW={"6xl"}
         m="auto"
         px={5}
         py={1}
         color={"black"}
         fontWeight="600"
       >
         <Flex
           h={16}
           alignItems={"center"}
           justifyContent={"center"}
           //   border={"1px solid red"}
         >
           <IconButton
             size={"md"}
             icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
             aria-label={"Open Menu"}
             display={{ md: "none" }}
             position={"center"}
             onClick={isOpen ? onClose : onOpen}
           />
           <HStack
             spacing={8}
             alignItems={"center"}
             // border={"1px solid blue"}
             width={"full"}
             display="flex"
             justifyContent={[
               "center",
               "center",
               "space-between",
               "space-between",
               "space-between",
               "space-between",
             ]}
           >
             <Box>
               <Image src={Logo} alt="logo" width={"200px"} />
             </Box>
             <HStack
               as={"nav"}
               spacing={6}
               display={{ base: "none", md: "flex" }}
               cursor="pointer"
             >
               {Links.map((link, index) => (
                 <Link
                   className={link.class}
                   to={link.id}
                   color="white"
                   key={index}
                   spy={true}
                   smooth={true}
                   offset={-77}
                   duration={500}
                   transition="all .2s ease-in-out"
                   _hover={{ transform: "scale(0.9)" }}
                 >
                   {link.title}
                 </Link>
               ))}
               <Button
                 cursor={"pointer"}
                 color={"white"}
                 className="nav-link resume"
                 rounded="md"
                  download={Project}
                 id="resume-button-1"
                 bgGradient="linear(to-r,cyan.400,blue.500)"
                 _hover={{
                   bg: "blue.500",
                 }}
                 my="5%"
                 size={"sm"}
               >
                 <Link 
                   href={Project}
                    id="resume-link-1"
                 className="nav-link resume"
                   download={"Hariom_Verma_Resume.pdf"}
                   style={{ color: "white" }}
                   onClick={() => {
                     window.open(
                       "https://drive.google.com/file/d/1bDky1HRtcOC-XFUlvjSiHKGLubjUrZJp/view?usp=share_link",
                       "_blank"
                     );
                   }}
                  
                 >
                   Resume
                 </Link> 
               </Button>
             </HStack>
           </HStack>
         </Flex>
 
         {isOpen ? (
           <Box pb={4} display={{ md: "none" }}>
             <Stack as={"na<av"} spacing={4}>
               {Links.map((link, index) => (
                 <Link
                   to={link.id}
                   color="white"
                   key={index}
                   cursor="pointer"
                   className={link.class}
                 >
                   {link.title}
                 </Link>
               ))}
               <Link 
                 href={Project}
                 download={"Hariom_Verma_Resume.pdf"}
                 style={{ color: "white" }}
                 id="resume-link-1"
                 className="nav-link resume"
                 onClick={() => {
                   window.open(
                     "https://drive.google.com/file/d/1bDky1HRtcOC-XFUlvjSiHKGLubjUrZJp/view?usp=share_link",
                     "_blank"
                   );
                 }}
               >
                 Resume
               </Link> 
             </Stack>
           </Box>
         ) : null}
       </Box>
     </Box>
   );
 }
 