import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Drawer from "@zswang/react-drawer";
import "@zswang/react-drawer/dist/react-drawer.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <button onClick={() => this.drawer.open()}>open the drawer</button>
        </header>
        <Drawer
          className="drawer-panel"
          ref={element => (this.drawer = element)}
        >
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </Drawer>
      </div>
    );
  }
}

export default App;
