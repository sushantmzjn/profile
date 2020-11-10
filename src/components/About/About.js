import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './About.css'

var aboutMe = [];

var data = [
    {
        key: "Name :", value: "Sushant maharjan",
    },
    {
        key: "DOb :", value: "19 Aug, 1997"
    },
    {
        key: "Address :", value: "Lalitpur 22, Lalitpur"
    },
    {
        key: "Email :", value: "sushantmzjn@gmail.com"
    },
    {
        key: "Contact :", value: "+977 9860XXXXXX"
    }
]
var key = 0;
data.map((info) => {
    aboutMe.push(
        <Row className="p-2" key={key}>
            <Col lg={4} sm={0} xs={1}></Col>
            <Col lg={1} sm={0} xs={0}></Col>
            <Col lg={1} sm={6} xs={5} >{info.key}</Col>
            <Col lg={2} sm={6} xs={5}>{info.value}</Col>
            <Col lg={4} sm={0} xs={1}></Col>
        </Row>
    )
    key++;
})

export default class About extends React.Component {
    render() {
        return (
            <Container className="p-0" fluid >
                <h1 style={{ background: "rgb(48, 51, 50)" }} className="p-0 m-0 w-100 text-center text-warning">About Me</h1>
                <Container className="text-light text-end p-2 " style={{ background: "rgb(48, 51, 50)" }} fluid>
                    {aboutMe}
                </Container>
            </Container >

        )
    }
}