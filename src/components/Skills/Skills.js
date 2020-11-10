import React from 'react'
import { Container, Row, ProgressBar, Col } from 'react-bootstrap'
import './Skills.css'

const photoshop = 50;
const Html = 90;
const REACT = 40;
const Android = 75;
const Flutter = 55;
const CSS = 85;

export default class Skills extends React.Component {

    render() {
        return (
            <Container fluid className="p-0" style={{ background: "rgb(48, 51, 50)" }}>
                <h1 style={{ background: "rgb(48, 51, 50)" }} className="p-2 w-100 text-center text-warning">My Skills</h1>

                <Row className="w-100 p-0 m-0">
                    <Col lg={1} ></Col>
                    <Col lg={5} md={5} sm={12} xs={12} style={{ background: "rgb(48, 51, 50)" }} className="p-4" >
                        <p className="text-light ">Photoshop</p>
                        <ProgressBar now={photoshop} label={`${photoshop}%`} className=" mx-auto " />
                    </Col>
                    <Col lg={5} md={5} sm={12} xs={12} style={{ background: "rgb(48, 51, 50)" }} className="p-4">
                        <p className="text-light text-left">HTML</p>
                        <ProgressBar now={Html} label={`${Html}%`} className=" mx-auto " />
                    </Col>
                    <Col lg={1} ></Col>
                </Row>
                <Row className="w-100 p-0 m-0">
                    <Col lg={1} ></Col>
                    <Col lg={5} md={5} sm={12} xs={12} style={{ background: "rgb(48, 51, 50)" }} className="p-4" >
                        <p className="text-light ">REACT</p>
                        <ProgressBar now={REACT} label={`${REACT}%`} className="mx-auto" />
                    </Col>
                    <Col lg={5} md={5} sm={12} xs={12} style={{ background: "rgb(48, 51, 50)" }} className="p-4" >
                        <p className="text-light text-left">Android</p>
                        <ProgressBar now={Android} label={`${Android}%`} className="mx-auto " />
                    </Col>
                    <Col lg={1} ></Col>
                </Row>
                <Row className="w-100 p-0 m-0">
                    <Col lg={1} ></Col>
                    <Col lg={5} md={5} sm={12} xs={12} style={{ background: "rgb(48, 51, 50)" }} className="p-4">
                        <p className="text-light ">Flutter</p>
                        <ProgressBar now={Flutter} label={`${Flutter}%`} className="mx-auto" />
                    </Col>
                    <Col lg={5} md={5} sm={12} xs={12} style={{ background: "rgb(48, 51, 50)" }} className="p-4">
                        <p className="text-light text-left">CSS</p>
                        <ProgressBar now={CSS} label={`${CSS}%`} className="mx-auto" />
                    </Col>
                    <Col lg={1} ></Col>
                </Row>




            </Container>
        )
    }
}