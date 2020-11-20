import React, { Component } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import axios from "axios";


export default class Login extends Component {

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

    submitHandler = (e) => {
        e.preventDefault();
        var adminData = {
            username: this.state.username,
            password: this.state.password,
            isRegistered: true
        }
        console.log(adminData);

        axios.post('http://localhost:8080/admin/signup', adminData)
            .then((response) => {
                this.setState({
                    username: '',
                    password: '',
                })
                console.log(response.data);

            }).catch((err) => { console.log(err); })
    }

    submitLogin = (e) => {
        e.preventDefault();
        var adminData = {
            username: this.state.username,
            password: this.state.password,

        }
        // console.log(adminData);

        axios.post('http://localhost:8080/admin/login', adminData)
            .then((response) => {

                alert(response.data.message);

            }).catch((err) => { console.log(err); })
    }





    render() {
        return (
            <Container fluid className="d-flex justify-content-center align-items-center" style={{ background: "rgb(48, 51, 50)", height: "100vh" }}>
                <Row className="p-5 w-100">
                    <Col lg={6} className="px-0 bg-light rounded p-4 mx-auto">
                        <Form>
                            <p className="text-center text-warning ">Login</p>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="username" value={this.state.username} onChange={this.UsernameHandler} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="text" placeholder="password" value={this.state.password} onChange={this.PasswordHandler} />
                            </Form.Group>
                            <Button className="rounded-pill w-25 btn btn-warning" onClick={this.submitLogin}>
                                <span>Login</span>
                            </Button>
                            <Button className="rounded-pill w-25 btn btn-warning" onClick={this.submitHandler}>
                                <span>register</span>
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
