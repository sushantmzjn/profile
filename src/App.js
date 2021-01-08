import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/admin/dashboard/Dashboard"
import Adminlogin from "./components/admin/Admin_login/Login"
import Adminsignup from "./components/admin/Admin_login/signup"
import Home from "./components/Home/Home";
import Servicew from "./components/Service1/Services";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import MyProject from "./components/MyProject/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import Admin from './admin'

// admin
import Admin_SideNab from './components/admin/admindash/adminSideNav/Navbar';
import About_admin from "./components/admin/admindash/About/About";
import Contact_admin from "./components/admin/admindash/Contact/Contact";
import Skills_admin from "./components/admin/admindash/Skills/Skills";
import Project_admin from "./components/admin/admindash/Projects/Project";

import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import Axios from 'axios';
library.add(fas, far);



export default class App extends React.Component {

  state = [{
    aboutdata: '',
    resumedata: '',
    contactdata: ''
  }]

  componentDidMount() {
    Axios.get(`http://localhost:8080/about`)
      .then(data => {
        this.setState({ aboutdata: data.data[0] });
      })

    // Resume Data get 
    Axios.get(`http://localhost:8080/resume`)
      .then(data => {
        this.setState({ resumedata: data.data });
      })

    Axios.get(`http://localhost:8080/contact`)
      .then(data => {
        this.setState({ contactdata: data.data[0] })
        // console.log(data.data[0]);
      })

  }

  render() {

    return (
      <div className="m-0 overflow-hidden">
        <Router>

          <Route path="/" exact component={Navbar, Home, Servicew, Skills, About, Resume, MyProject, Contact, Footer}>
            <Navbar />
            <Home />
            <Servicew />
            <Skills />
            <About
              data={this.state.aboutdata}
            />
            <Resume
              data={this.state.resumedata}
            />
            <MyProject />
            <Contact
              data={this.state.contactdata} />
            <Footer />
          </Route>

          <Switch>

            <Route path="/adminlogin" exact
              render={(props) => (
                <Adminlogin {...props} />
              )}
            />

            <Route path="/adminsignup" exact
              render={(props) => (
                <Adminsignup {...props} />
              )} />

            <Route path="/admindashboard" exact
              render={(props) => (
                <Dashboard {...props} />
              )} />


            <Route path="/admindash/about" exact
              render={(props) => (
                <About_admin {...props} />
              )} />

            <Route path="/admindash/contact" exact
              render={(props) => (
                <Contact_admin {...props} />
              )} />
            <Route path="/admindash/skills" exact
              render={(props) => (
                <Skills_admin {...props} />
              )} />



            {/* 
            <Route path='/admindash/' exact component={Project_admin} />
            <Route path='/admindash/project' exact component={Project_admin} />
            <Route path='/admindash/about' exact component={About_admin} />
            <Route path='/admindash/contact' exact component={Contact_admin} /> */}

          </Switch>
          <Route exact path='/admindash' component={Admin} />

        </Router>


      </div>
    );
  }
}
