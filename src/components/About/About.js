import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './About.css'

function getData(data) {
    return (
        <>
            <Row className="p-2" >
                <Col lg={4} sm={0} xs={1}></Col>
                <Col lg={1} sm={0} xs={0}></Col>
                <Col lg={1} sm={6} xs={5} >Name</Col>
                <Col lg={2} sm={6} xs={5}>{data.fullname}</Col>
                <Col lg={4} sm={0} xs={1}></Col>
            </Row>
            <Row className="p-2" >
                <Col lg={4} sm={0} xs={1}></Col>
                <Col lg={1} sm={0} xs={0}></Col>
                <Col lg={1} sm={6} xs={5} >DOB</Col>
                <Col lg={2} sm={6} xs={5}>{data.DOB}</Col>
                <Col lg={4} sm={0} xs={1}></Col>
            </Row>
            <Row className="p-2" >
                <Col lg={4} sm={0} xs={1}></Col>
                <Col lg={1} sm={0} xs={0}></Col>
                <Col lg={1} sm={6} xs={5} >Address</Col>
                <Col lg={2} sm={6} xs={5}>{data.address}</Col>
                <Col lg={4} sm={0} xs={1}></Col>
            </Row>
            <Row className="p-2" >
                <Col lg={4} sm={0} xs={1}></Col>
                <Col lg={1} sm={0} xs={0}></Col>
                <Col lg={1} sm={6} xs={5} >Email</Col>
                <Col lg={2} sm={6} xs={5}>{data.email}</Col>
                <Col lg={4} sm={0} xs={1}></Col>
            </Row>
            <Row className="p-2" >
                <Col lg={4} sm={0} xs={1}></Col>
                <Col lg={1} sm={0} xs={0}></Col>
                <Col lg={1} sm={6} xs={5} >Contact</Col>
                <Col lg={2} sm={6} xs={5}>{data.contact}</Col>
                <Col lg={4} sm={0} xs={1}></Col>
            </Row>
        </>
    )
}

export default class About extends React.Component {

    render() {
        const {
            props,
        } = this;

        return <Container className="p-0" fluid id="about" >
            <h1 style={{ background: "rgb(48, 51, 50)" }} className="p-0 m-0 w-100 text-center text-warning">About Me</h1>
            <Container className="text-light text-end p-2 " style={{ background: "rgb(48, 51, 50)" }} fluid>
                {props.data ? getData(props.data) : ''}
            </Container>
        </Container >


    }
}