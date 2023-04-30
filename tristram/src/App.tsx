import React from "react";
import styled from "styled-components";
import Header from "./components/header";
import Footer from "./components/footer";
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

function App() {
  return (
    <TempBody className="App">
      <Header title="Header Title">header subtitle</Header>
      <Footer />
    </TempBody>
  );
}

export default App;
