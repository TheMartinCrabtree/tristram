import React, { ReactNode } from "react";
import styled from "styled-components";

type HeaderProps = {
  title: string;
  children?: ReactNode;
};

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0px;
  padding: 0.5em 0;
  background-color: white;
  opacity: 0.95;
  color: black;

  position: sticky;
  top: 0;

  h1 {
    margin: 0px; !important
  }

  p {
    margin: 0px; !important
  }
`;

const Header = ({ title, children }: HeaderProps) => {
  return (
    <HeaderWrapper>
      <h1>{title}</h1>
      <p>{children}</p>
    </HeaderWrapper>
  );
};

export default Header;
