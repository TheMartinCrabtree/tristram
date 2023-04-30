import React, { ReactNode } from "react";
import styled from "styled-components";

type FooterProps = {};

const FooterWrapper = styled.div`
  color: white;
`;

const Footer = ({}: FooterProps) => {
  return <FooterWrapper>Footer</FooterWrapper>;
};

export default Footer;
