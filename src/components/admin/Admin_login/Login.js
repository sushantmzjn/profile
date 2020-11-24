import React, { Component } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import axios from "axios";
import cookie from 'universal-cookie';
import './form.css'

const cookiee = new cookie();
export default class Login extends Component {

    constructor(props) {
        super(props)
        this.toSignup = this.toSignup.bind(this);
        this.toLogin = this.toLogin.bind(this);
    }

    state = {
        username: '',
        password: '',
        isRegistered: false
    }

    UsernameHandler = (e) => {
        this.setState({ username: e.target.value });
    }
    PasswordHandler = (e) => {
        this.setState({ password: e.target.value });
    }

    //btnhandler
    toSignup() {
        this.props.history.push("/adminsignup");
    }
    toLogin() {
        this.props.history.push("/admindashboard");
    }

    loginHandler = (e) => {
        e.preventDefault();
        var adminData = {
            username: this.state.username,
            password: this.state.password,
        }
        console.log(adminData);

        axios.post('http://localhost:8080/admin/login', adminData)
            .then((response) => {
                console.log(response.data);

                if (response.data.status === 200) {
                    this.toLogin();
                    cookiee.set('token', response.data.token, { path: "/" })
                    cookiee.get('token');
                } else if (response.data.status === 404 || response.data.status === 401) {
                    alert(response.data.message)
                }


            }).catch((err) => { console.log(err); })
    }


    render() {
        return (
            <Container fluid className="d-flex justify-content-center align-items-center" style={{ background: "rgb(48, 51, 50)", height: "100vh" }}>
                <Row className="p-5 w-75">
                    <Col lg={6} className="px-0 rounded p-4 mx-auto">
                        <Form onSubmit={this.loginHandler} >
                            <p className="text-center display-4 text-warning f ">Login</p>
                            <Form.Group>
                                {/* <Form.Control className="text-center" type="text" placeholder="username" value={this.state.username} onChange={this.UsernameHandler} required /> */}
                                <input type="text" placeholder="username" className="field-input" value={this.state.username} onChange={this.UsernameHandler} required />
                            </Form.Group>
                            <Form.Group >
                                <input type="password" placeholder="password" className="field-input" value={this.state.password} onChange={this.PasswordHandler} required />
                                {/* <Form.Control className="text-center" type="password" placeholder="password" value={this.state.password} onChange={this.PasswordHandler} required /> */}
                            </Form.Group>
                            <Button className="rounded-pill w-25 btn btn-warning" type="submit" >
                                <span>Login</span>
                            </Button>
                            <Button className="rounded-pill w-50 btn btn-warning ml-2" onClick={this.toSignup} >
                                <span>Go to register</span>
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
