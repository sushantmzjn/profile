import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Sservice.css'
// import webpng from "../../images/web-design.png";

var myService = [];
var key = 0;
for (let index = 0; index < 6; index++) {
    myService.push(
        <Col className="" lg={4} key={key++}>
            <div className="grid">
                <figure className="effect-oscar w-100 mx-0">
                    <img style={{ background: "black", height: "250px" }} className="w-50" />
                    <figcaption>
                        <h2><FontAwesomeIcon
                            icon={["far", "file-code"]}
                            size="2x"
                            className="">
                        </FontAwesomeIcon>Warm <span>Oscar</span>
                        </h2>
                        <p>Oscar is a decent man. He used to clean porches with pleasure.</p>
                    </figcaption>
                </figure>
            </div>
        </Col>
    )
}


export default class Service extends React.Component {
    render() {
        return (
            <Container className="text-center p-0 mx-auto" style={{ background: "rgb(48, 51, 50)" }} fluid id="service">
                <h1 className="w-100 p-1 m-0 text-center text-warning">Services</h1>
                <Row className="px-5">
                    {myService}
                </Row>
            </Container>
        )
    }

}
