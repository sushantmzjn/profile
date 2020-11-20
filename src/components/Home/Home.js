import React from 'react';
import Image from 'react-bootstrap/Image'
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css';
import Himg from "../../images/h.jpg"

export default class Home extends React.Component {
    render() {
        return (
            <Container className="p-0" fluid style={{ marginTop: "80px" }} id="home">
                <Row className="m-0">
                    <Col lg={6} md={6} style={{ background: "rgb(48, 51, 50)" }} className="p-0">

                        <h5 className="text-uppercase name p-3 text-left">Hello!</h5>
                        <p className="px-3 text-light"><span className="display-4 texth">I'm</span><br />
                            <span className="text-warning display-4 ml-0 namee ">Sushant Maharjan</span></p>
                        <p className='px-3 display-4 text-light texth1'>A Freelance Web Designer</p>

                        <Button variant="outline-success" className="ml-3 rounded-pill p-1.5 w-10">
                            Download CV
                        </Button>
                    </Col>
                    <Col lg={6} md={6} style={{ background: "rgb(48, 51, 50)" }} className="p-0">
                        <Image src={Himg} fluid className="h-0 imgg"></Image>
                    </Col>
                </Row>
            </Container>
        )
    }

}