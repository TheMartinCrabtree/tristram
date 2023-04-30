import React from "react";
import styled from "styled-components";
import Header from "./components/header";
// import "./App.css";

// todo header, footer, hero, body
// body: skills & expertise, projects, experience

const TempBody = styled.div`
  min-height: 800px;
  background-color: black;
  border-radius: 3px;
  border: 2px solid darkgrey;
`;

function App() {
  return (
    <TempBody className="App">
      <Header title="Header Title" />
    </TempBody>
  );
}

export default App;
