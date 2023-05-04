import React, { ReactNode } from "react";
import styled from "styled-components";

type SubSectionProps = {
  data?: any;
};

// temp text align
const SubSectionWrapper = styled.div`
  width: 100%;
  color: white;
  text-align: center;
  min-height: 30px;

  align-self: flex-end;
  background-color: red;
`;

const SubSection = ({}: SubSectionProps) => {
  return <SubSectionWrapper>SubSection</SubSectionWrapper>;
};

export { type SubSectionProps };
export default SubSection;
