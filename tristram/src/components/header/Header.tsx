import React, { ReactNode } from "react";
import styled from "styled-components";

type HeadingProps = {
  title: string;
  children?: ReactNode;
};

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0px;
  background-color: white;
  opacity: 0.95;
  color: black;
`;

const Header = ({ title, children }: HeadingProps) => {
  return (
    <HeaderWrapper>
      <h1>{title}</h1>
      <p>{children}</p>
    </HeaderWrapper>
  );
};

export default Header;
