import React from 'react';
import Image from 'react-bootstrap/Image'
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css';
import Himg from "../../images/h.jpg"

export default class Home extends React.Component {
    render() {
        return (
            <Container fluid >
                <Row>
                    <Col style={{ background: "rgb(48, 51, 50)" }} className="">

                        <h5 class="text-uppercase name p-3 text-left">Hello!</h5>
                        <p className="px-3 text-light"><span className="display-4">I'm</span><br />
                            <span className="text-warning display-4 ml-0 ">Sushant Maharjan</span></p>
                        <p className='px-3 display-4 text-light'>A Freelance Web Designer</p>

                        <Button variant="outline-success" className="ml-3 rounded-pill p-1.5 w-10">
                            Download CV
                        </Button>
                    </Col>
                    <Col style={{ background: "rgb(48, 51, 50)" }} className="px-0">
                        <Image src={Himg} fluid className="h-0"></Image>
                    </Col>
                </Row>
            </Container>
        )
    }

}