import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Home from "./components/Home/Home";
import Servicew from "./components/Service1/Services";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Servicew />
        <Skills />
        <About />
        <Resume />
      </div>
    );
  }
}
