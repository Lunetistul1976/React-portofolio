import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, Button, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {const headerRef = useRef(null); 
 
useEffect(() => { 
  let prevScrollPos = window.scrollY; 

  const handleScroll = () => { 
    const currentScrollPos = window.scrollY; 
    const headerElement = headerRef.current; 
    if (!headerElement) { 
      return; 
    } 
    if (prevScrollPos > currentScrollPos) { 
      headerElement.style.transform = "translateY(0)"; 
    } else { 
      headerElement.style.transform = "translateY(-200px)"; 
    } 
    prevScrollPos = currentScrollPos; 
  } 
  window.addEventListener('scroll', handleScroll) 

  return () => { 
    window.removeEventListener('scroll', handleScroll) 
  } 
}, []); 

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
      
      
    >
      
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack 
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <ul style={{display:"flex",flexDirection:"row",listStyleType:"none"}}>
              {socials.map((link, index) =>
              (
                <li key={index} style={{marginRight:"50px"}}>
                  <a href={link.url}>
                  <FontAwesomeIcon icon={link.icon} size="2x" />
                  </a>
                  </li>
              )
              )}
        </ul>
        </nav>
            
          <nav>
            <HStack spacing={8}>
                 <a href="/#contact-me" onClick={handleClick("contactme")}>Contact me </a>
              <a href="/#projects" onClick={handleClick("projects")}>Projects</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
