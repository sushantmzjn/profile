import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/admin/dashboard/Dashboard"
import Admin_Login from "./components/admin/Admin_login/Login"
import Home from "./components/Home/Home";
import Servicew from "./components/Service1/Services";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import MyProject from "./components/MyProject/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';


import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"

library.add(fas, far);


export default class App extends React.Component {
  render() {
    return (
      <div className="m-0 overflow-hidden">
        <Router>
          <Route path="/" exact component={Navbar, Home, Servicew, Skills, About, Resume, MyProject, Contact, Footer}>
            <Navbar />
            <Home />
            <Servicew />
            <Skills />
            <About />
            <Resume />
            <MyProject />
            <Contact />
            <Footer />
          </Route>

          <Switch>
            <Route path="/adminlogin" exact component={Admin_Login} />
            <Route path="/admindashboard" exact component={Dashboard} />
          </Switch>
        </Router>

      </div>
    );
  }
}
