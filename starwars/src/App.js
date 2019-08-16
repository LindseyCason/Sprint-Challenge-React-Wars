import React from 'react';
import './App.scss';
import CharCard from "./components/CharCard.js"
import styled from 'styled-components';

const Header = styled.h1`
color: #8B8312;
font-family: "Walter Turncoat";
font-weight: bolder;
font-size: 4rem;

`


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Header className="Header">React Wars</Header>
      <CharCard />
    </div>
  );
}

export default App;
