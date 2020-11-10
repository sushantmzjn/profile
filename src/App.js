import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Home from "./components/Home/Home";
import Servicew from "./components/Service1/Services";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import MyProject from "./components/MyProject/Project";
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"

library.add(fas, far);


export default class App extends React.Component {
  render() {
    return (
      <div className="m-0 overflow-hidden">
        <Navbar />
        <Home />
        <Servicew />
        <Skills />
        <About />
        <Resume />
        <MyProject />
      </div>
    );
  }
}
