import React, { Component } from 'react';
import './App.css';
import TopBar from "./components/TopBar";
import WorkshopForm from "./components/WorkshopForm";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar/>
        <Header/>
        <WorkshopForm/>
      </div>
    );
  }
}

export default App;
