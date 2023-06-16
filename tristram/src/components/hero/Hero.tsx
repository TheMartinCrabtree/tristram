import React, { ReactNode } from "react";
import styled from "styled-components";

export interface HeroProps {
  textblock?: any;
  imageblock?: any;
}

const HeroContainer = styled.div`
  color: black;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  height: auto;
  width: 100%;
  text-align: center;
`;

const TextContainer = styled.div`
  width: 50%;
  background-color: lightgrey;
`;

const ImageContainer = styled.div`
  width: 50%;
  background-color: lightslategrey;
`;

const BodyContainer = styled.div`
  font-size: 10px;
`;

// need to set fonts
const Hero = ({ textblock, imageblock }: HeroProps) => {
  return (
    <HeroContainer>
      <TextContainer>
        {textblock && textblock.title && <div>{textblock.title}</div>}
        {textblock && textblock.subtitle && <div>{textblock.subtitle}</div>}
        {textblock && textblock.body && (
          <BodyContainer>{textblock.body}</BodyContainer>
        )}
      </TextContainer>
      <ImageContainer>Hero Image Container</ImageContainer>
    </HeroContainer>
  );
};

export default Hero;
