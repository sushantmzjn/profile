import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Modal } from 'react-bootstrap'
import Admin_Nav from '../adminSideNav/Navbar'

export default function Contact() {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleOpen = () => setShow(true)

    const [contactId, setcontactId] = useState(null);
    const [contact, setContact] = useState(null);
    const [address, setAddress] = useState(null);
    const [email, setEmail] = useState(null);
    const [website, setWebsite] = useState(null);

    const updateContact = () => {
        Axios.put(`http://localhost:8080/contact/${contactId}`,
            {
                address: address,
                contact: contact,
                email: email,
                site: website,
            })
            .then((response) => {
                console.log(response.data);
                alert('contact updated')
                return true
            }).catch((err) => {
                console.log(err);
            })
    }


    function addressUpdateHandler(e) {
        // e.preventDefault();
        // this.setState({ address: e.target.value })

        setAddress(e.target.value)
    }
    function contactUpdateHandler(e) {
        // e.preventDefault();
        // this.setState({ contact: e.target.value })
        setContact(e.target.value)
    }
    function emailUpdateHandler(e) {
        // e.preventDefault();
        // this.setState({ email: e.target.value })
        setEmail(e.target.value)
    }
    function siteUpdateHandler(e) {
        // e.preventDefault();
        // this.setState({ site: e.target.value })
        setWebsite(e.target.value)
    }

    useEffect(() => {
        Axios.get("http://localhost:8080/contact")
            .then((response) => {

                console.log(response.data[0]);

                setcontactId(response.data[0]._id)
                setContact(response.data[0].contact)
                setAddress(response.data[0].address)
                setEmail(response.data[0].email)
                setWebsite(response.data[0].site)


            }).catch(err => {
                console.log(err);
            })
    }, [])


    return (
        <>
            <Admin_Nav />
            <Container fluid style={{ marginLeft: '25%' }}>
                <div>
                    <h1 className="text-warning">Contact Details</h1>
                </div>


                <Form className="w-50" >
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" disabled value={address} />
                    <Form.Label>Contact</Form.Label>
                    <Form.Control type="text" disabled value={contact} />
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" disabled value={email} />
                    <Form.Label>Website</Form.Label>
                    <Form.Control type="text" disabled value={website} />
                    <Button className="btn btn-warning rounded-pill"
                        onClick={handleOpen}
                    >Update</Button>
                </Form>

                <Modal show={show} onHide={handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title className='text-warning' >Update Contact</Modal.Title>
                    </Modal.Header>
                    <Form className="w-100 px-3" >
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" value={address} onChange={addressUpdateHandler} />
                        <Form.Label>Contact</Form.Label>
                        <Form.Control type="text" value={contact} onChange={contactUpdateHandler} />
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" value={email} onChange={emailUpdateHandler} />
                        <Form.Label>Website</Form.Label>
                        <Form.Control type="text" value={website} onChange={siteUpdateHandler} />
                    </Form>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close</Button>
                        <Button variant="primary" onClick={updateContact}>
                            Save Changes</Button>
                    </Modal.Footer>
                </Modal>

                {/* <p style={{ display: this.state.display }}>Updated</p> */}
            </Container>
        </>
    )
}
