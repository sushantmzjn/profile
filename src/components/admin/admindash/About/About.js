import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Modal } from 'react-bootstrap'
import Admin_Nav from '../adminSideNav/Navbar'

export default function About() {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleOpen = () => setShow(true)

    const [aboutId, setaboutId] = useState(null)
    const [fullname, setfullname] = useState(null)
    const [dob, setdob] = useState(null)
    const [address, setaddress] = useState(null)
    const [email, setemail] = useState(null)
    const [contact, setcontact] = useState(null)

    useEffect(() => {
        Axios.get('http://localhost:8080/about')
            .then(res => {
                if (!aboutId) {
                    setaboutId(res.data[0]._id)
                    setfullname(res.data[0].fullname)
                    setdob(res.data[0].DOB)
                    setaddress(res.data[0].address)
                    setemail(res.data[0].email)
                    setcontact(res.data[0].contact)
                    console.log(res.data[0]);
                }

            }).catch(err => { console.log(err); })
    }, [])

    function fullnameHandler(e) {
        setfullname(e.target.value)
    }
    function dobHandler(e) {
        setdob(e.target.value)
    }
    function addressHandler(e) {
        setaddress(e.target.value)
    }
    function emialHandler(e) {
        setemail(e.target.value)
    }
    function contactHandler(e) {
        setcontact(e.target.value)
    }

    const aboutUpdate = () => {
        Axios.put(`http://localhost:8080/about/${aboutId}`,
            {
                fullname: fullname,
                DOB: dob,
                address: address,
                email: email,
                contact: contact,
            }).then(res => {
                console.log(res.data);
            }).catch(err => { console.log(err); })
    }


    return (
        <>
            <Admin_Nav />
            <Container fluid style={{ marginLeft: '25%' }}>
                <div>
                    <h1 className="text-warning">About Details</h1>
                </div>

                <Form className="w-50" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" disabled value={fullname} />
                    <Form.Label>DOB</Form.Label>
                    <Form.Control type="text" disabled value={dob} />
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" disabled value={address} />
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" disabled value={email} />
                    <Form.Label>Contact</Form.Label>
                    <Form.Control type="text" disabled value={contact} />
                    <Button className="btn btn-warning rounded-pill"
                        onClick={handleOpen}
                    >Update</Button>
                </Form>

                <Modal size='md' show={show} onHide={handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title className='text-warning' >Update Contact</Modal.Title>
                    </Modal.Header>
                    <Form className="w-100 px-3" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={fullname} onChange={fullnameHandler} />
                        <Form.Label>DOB</Form.Label>
                        <Form.Control type="text" value={dob} onChange={dobHandler} />
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" value={address} onChange={addressHandler} />
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" value={email} onChange={emialHandler} />
                        <Form.Label>Contact</Form.Label>
                        <Form.Control type="text" value={contact} onChange={contactHandler} />

                    </Form>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close</Button>
                        <Button variant="primary" onClick={aboutUpdate}>
                            Save Changes</Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </>
    )
}

