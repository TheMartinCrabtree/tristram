import React, { ReactNode } from "react";

type HeadingProps = {
  title: string;
  children?: ReactNode;
};

const Header = ({ title, children }: HeadingProps) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{children}</p>
    </>
  );
};

export default Header;
