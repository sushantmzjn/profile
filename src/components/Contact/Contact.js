import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'



var Contacts = [];
var key = 0;
var data = [
    { key: "address", values: "bungmati" },
    { key: "Contact", values: "98656565" },
    { key: "Email", values: "s@gmail.com" },
    { key: "site", values: "sushant.com" },
]

data.forEach((value) => {
    Contacts.push(
        <Col>
            <div className="mx-auto p-4 text-center d-flex align-items-center justify-content-center"
                style={{ background: "black", width: "115px", height: "115px", borderRadius: "50%" }} key={key++}>

                <FontAwesomeIcon
                    icon={["far", "file-code"]}
                    size="2x"
                    color="white"
                    className="">
                </FontAwesomeIcon>
            </div>
            <p className="text-white pt-3">{value.key}</p>
            <p className="text-white">{value.values}</p>
        </Col>
    )
})

export default class Contact extends React.Component {
    render() {
        return (
            <Container fluid style={{ background: "rgb(48, 51, 50)" }} className="text-center" id="contact">
                <h1 className="text-center text-warning p-1" >Contact Me</h1>
                <Row>
                    {Contacts}
                </Row>
                <Row className="d-flex justify-content-center p-3">
                    <Col lg={6} className="bg-light p-5 rounded">
                        <Form className="">
                            <Form.Group>
                                <Form.Control type="text" placeholder="name"></Form.Control></Form.Group>
                            <Form.Group> <Form.Control type="email" placeholder="Emial"></Form.Control></Form.Group>
                            <Form.Group>   <Form.Control type="text" placeholder="Subject"></Form.Control></Form.Group>
                            <Form.Group>
                                <textarea className="w-100" type="text" placeholder="Message" style={{ height: "100px" }}></textarea>
                            </Form.Group>
                        </Form>
                        <Button className="rounded-pill w-25 btn btn-warning">
                            <span>Submit</span>
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}