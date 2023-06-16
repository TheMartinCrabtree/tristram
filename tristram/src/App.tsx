import React from "react";
import styled from "styled-components";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { MainSection } from "./components/sections";
// temp test data
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
  padding: 1vmin;
`;

const LayoutWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

function App() {
  const { header, footer, hero } = data;

  return (
    <TempBody className="App">
      <LayoutWrapper>
        <Header {...header} />
        <Hero />
        <Footer {...footer} />
      </LayoutWrapper>
    </TempBody>
  );
}

export default App;
