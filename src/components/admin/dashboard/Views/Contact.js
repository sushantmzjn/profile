import Axios from 'axios';
import React, { Component } from 'react'
import { Button, Container, Form } from 'react-bootstrap'


export default class Contact extends Component {

    state = {
        address: '',
        contact: '',
        email: '',
        site: '',
        id: '',
        display: 'none'

    }

    componentDidMount() {
        Axios.get("http://localhost:8080/contact")
            .then((response) => {
                let { address, contact, email, site, _id } = response.data[0];

                this.setState({
                    address: address,
                    contact: contact,
                    email: email,
                    site: site,
                    id: _id,

                })
            }).catch((err) => {
                console.log(err);
            })
    }



    updateContact = () => {
        Axios.put(`http://localhost:8080/contact/${this.state.id}`,
            {
                address: this.state.address,
                contact: this.state.contact,
                email: this.state.email,
                site: this.state.site,
            })
            .then((response) => {
                return true
            }).catch((err) => {
                console.log(err);
            })
    }

    addressUpdateHandler = (e) => {
        e.preventDefault();
        this.setState({ address: e.target.value, display: 'block' })
    }
    contactUpdateHandler = (e) => {
        e.preventDefault();
        this.setState({ contact: e.target.value, display: 'block' })
    }
    emailUpdateHandler = (e) => {
        e.preventDefault();
        this.setState({ email: e.target.value, display: 'block' })
    }
    siteUpdateHandler = (e) => {
        e.preventDefault();
        this.setState({ site: e.target.value, display: 'block' })
    }
    onPointerEnter = () => {
        this.setState({ display: 'none' })
    }

    render() {
        return (
            <>
                <Container fluid>
                    <div>
                        <h1 className="text-warning">Contact Details</h1>
                    </div>


                    <Form className="w-50">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" value={this.state.address} onChange={this.addressUpdateHandler} onPointerOut={this.onPointerEnter} />
                        <Form.Label>Contact</Form.Label>
                        <Form.Control type="text" value={this.state.contact} onChange={this.contactUpdateHandler} onPointerOut={this.onPointerEnter} />
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" value={this.state.email} onChange={this.emailUpdateHandler} onPointerOut={this.onPointerEnter} />
                        <Form.Label>Website</Form.Label>
                        <Form.Control type="text" value={this.state.site} onChange={this.siteUpdateHandler} onPointerOut={this.onPointerEnter} /><br />
                        <Button className="btn btn-warning rounded-pill"
                            onClick={() => this.updateContact()}
                        >Update</Button>
                    </Form>
                    <p style={{ display: this.state.display }}>Updated</p>
                </Container>


            </>
        )
    }
}
