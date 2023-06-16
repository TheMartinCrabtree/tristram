import React, { ReactNode } from "react";
import styled from "styled-components";

export interface HeroProps {}

const HeroContainer = styled.div`
  color: black;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  height: 5vmin;
  width: 100%;
  text-align: center;
`;

const TextContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: lightgrey;
`;

const ImageContainer = styled.div`
  width: 50%;
  background-color: lightslategrey;

  height: 100%;
`;

const Hero = ({}: HeroProps) => {
  return (
    <HeroContainer>
      <TextContainer>Hero Text Container</TextContainer>
      <ImageContainer>Hero Image Container</ImageContainer>
    </HeroContainer>
  );
};

export default Hero;
