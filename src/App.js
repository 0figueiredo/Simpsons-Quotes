import React, { Component } from "react";
import logo from "./logo.svg";
import logo2 from "./logo2.svg";
import "./App.css";



import Quotes from "./Quotes";




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {on: false};
  }
  handleClick = () => {
    this.setState({ on: !this.state.on });
  };




  render() {
    const logoWork = this.state.on ? 'Work' : 'NoWork';
    const buttonWork = this.state.on ? 'Homer is working' : 'Dho! Homer is not working!';
    const selectedLogo = this.state.on ? logo : logo2;
    return (

      <div className="App">
        <header className="App-header">


          <img src={selectedLogo} className={logoWork} alt="logo" />

          <h1 className="App-title">Simpsons Quotes</h1>
          <div>
            <button className="btn btn-info p-3 mt-4 shadow mb-5 rounded"
              // className={logo}
              onClick={this.handleClick}
            >
              {buttonWork}</button>

          </div>



        </header>

        <Quotes />
      </div>


    );
  }
}

export default App;