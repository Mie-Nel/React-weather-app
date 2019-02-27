import React, { Component } from "react";
import "./App.css";
import Weather from "./containers/Weather/Weather";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React weather app</h1>
        <Weather />
      </div>
    );
  }
}

export default App;
