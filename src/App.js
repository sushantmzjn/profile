import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/admin/dashboard/Dashboard"
import Admin_Login from "./components/admin/Admin_login/Login"
import Admin_Signup from "./components/admin/Admin_login/signup"
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
            <Route path="/adminlogin" exact
              render={(props) => (
                <Admin_Login {...props} />
              )}
            />

            <Route path="/adminsignup" exact
              render={(props) => (
                <Admin_Signup {...props} />
              )} />

            <Route path="/admindashboard" exact
              render={(props) => (
                <Dashboard {...props} />
              )} />
          </Switch>
        </Router>

      </div>
    );
  }
}
