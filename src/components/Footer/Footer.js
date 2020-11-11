import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

var key = 0;
var myServe = [
    "Web Design",
    "Web Development",
    "App Development",
    "Data Analysis",
    "Data Visualization",
]

var link = ["Home", "About", "Services", "Projects", "Contact"];

var links = link.map((res) => {
    return (
        <div className="fas fa-long-arrow-alt-right d-flex pb-1" key={key++}>
            {res}
        </div>
    )
})

var services = myServe.map((res) => {
    return (
        <div className="fas fa-long-arrow-alt-right d-flex pb-1" key={key++}>
            {res}
        </div>
    )
})


export default class Footer extends Component {
    render() {
        return (
            <Container fluid style={{ background: "rgb(48, 51, 50)" }}>
                <Row className="px-4">
                    <Col lg={3} md={4} className="">
                        <span className="text-warning" style={{ fontSize: "22px" }}>About</span>
                        <p className="pt-4 text-light">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                            </p>
                    </Col>
                    <Col lg={3} md={4}>
                        <span className="text-warning" style={{ fontSize: "22px" }}>Links</span>
                        <p className="pt-4 text-light">
                            <span> {links}</span>
                        </p>
                    </Col>
                    <Col lg={3} md={4}>
                        <span className="text-warning" style={{ fontSize: "22px" }}>Services</span>
                        <p className="pt-4 text-light">
                            <span> {services}</span>
                        </p>
                    </Col>
                    <Col lg={3} md={0}><span className="text-warning" style={{ fontSize: "22px" }}>Have a Question?</span>
                        <p className="pt-4 m-0 text-light">
                            <FontAwesomeIcon className="mx-2" icon={["fas", "map-marker-alt"]} size="1x" />
                            Karyabinayak-22, Lalitpur, Nepal
                        </p>
                        <p className="pt-2 m-0 text-light">
                            <FontAwesomeIcon className="mx-2" icon={["fas", "phone-alt"]} size="1x" />
                            +977 9860XXXXXX
                        </p>
                        <p className="pt-2  text-light">
                            <FontAwesomeIcon className="mx-2" icon={["fas", "envelope"]} size="1x" />
                            sushantmzjn@gmail.com
                        </p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
