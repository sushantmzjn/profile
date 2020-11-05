import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Home from "./components/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    );
  }
}
