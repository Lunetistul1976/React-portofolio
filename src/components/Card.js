import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack style={{ "backgroundColor": "white", "borderRadius": "10px" }}>
      <Image src={imageSrc} style={{ "borderRadius": "10px" }}></Image>
      <VStack style={{ "color": "black", "textAlign": "start", "padding": "15px", "alignItems":"flex-start"}}>
        <Heading as='h4' size='md'>{title}</Heading>
        <Text>{description}</Text>
        <a href="">
          <HStack>
            <Text>See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </a>
      </VStack>
    </VStack>
  );
};

export default Card;
