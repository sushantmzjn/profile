import Axios from 'axios';
import React, { Component } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'



export default class signup extends Component {

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

    signupHandler = (e) => {
        e.preventDefault();
        var adminData = {
            username: this.state.username,
            password: this.state.password,
            isRegistered: true
        }
        console.log(adminData);

        Axios.post('http://localhost:8080/admin/signup', adminData)
            .then((response) => {
                this.setState({
                    username: '',
                })
                alert(response.data.message);

            }).catch((err) => { console.log(err); })
    }

    render() {
        return (
            <Container fluid className="d-flex justify-content-center align-items-center" style={{ background: "rgb(48, 51, 50)", height: "100vh" }}>
                <Row className="p-5 w-100">
                    <Col lg={6} className="px-0 bg-light rounded p-4 mx-auto">
                        <Form onSubmit={this.signupHandler} >
                            <p className="text-center display-4 text-warning ">Sign Up</p>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="username" value={this.state.username} onChange={this.UsernameHandler} required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="password" value={this.state.password} onChange={this.PasswordHandler} required />
                            </Form.Group>
                            <Button className="rounded-pill w-25 btn btn-warning" type="submit" >
                                <span>Sign up</span>
                            </Button>

                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
