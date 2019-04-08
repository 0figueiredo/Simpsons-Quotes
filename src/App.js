import React, { Component } from "react";
import "./App.css";

import GenerateCharacter from './GenerateCharacter';
import DisplayCharacter from './DisplayCharacter';

const sampleCharacter = {
  quote: "Oh Yeah!",
  character: "Duffman",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FDuffman.png?1497567511709"
  };


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {character: sampleCharacter}
    };
    getCharacter() {
        fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
        .then(response  =>  response.json())
        .then(data  => {
          this.setState({
            character: data[0],
          });
      });
    }   
  
  render() {
    return (
      <div>
       <GenerateCharacter selectCharacter={() =>  this.getCharacter()}  />
       <DisplayCharacter character={this.state.character}  /> 
      </div>
    );
  }
}

export default App;