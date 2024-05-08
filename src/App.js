import { Box } from "@chakra-ui/react";
import "./App.css";
import About from "./Components/About";
import Calender from "./Components/Calender";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import AnimatedCursor from "react-animated-cursor";
import { ReactComponent as MySVG } from "./scroll.svg";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <Box className="App" >
            <AnimatedCursor
        innerSize={15}
        outerSize={15}
        color="1,183,214"
        outerAlpha={0.1}
        innerScale={0.7}
        outerScale={1.2}
      />

      {/* <ScrollToTop smooth component={<MySVG />} />   */}
      <Navbar />
      <Home />
      <About />
      <Skills />

      <Projects />

      <Calender />

      <Contact />
    </Box>
  );
}

export default App;
