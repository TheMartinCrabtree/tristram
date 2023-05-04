import React from "react";
import styled from "styled-components";
import Header from "./components/header";
import Footer from "./components/footer";
// test data
import data from "./data";
// import "./App.css";

// todo header, footer, hero, body
// body: skills & expertise, projects, experience

// for testing scrolling etc
const TempBody = styled.div`
  min-height: 1600px;
  background-color: black;
  border-radius: 3px;
  border: 2px solid darkgrey;
`;

const LayoutWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  div:last-child {
    align-self: flex-end;
  }
`;

function App() {
  const { header, footer } = data;

  return (
    <TempBody className="App">
      <LayoutWrapper>
        <Header {...header} />
        <Footer {...footer} />
      </LayoutWrapper>
    </TempBody>
  );
}

export default App;
