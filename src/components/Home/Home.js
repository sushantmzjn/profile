import React from 'react';
import Image from 'react-bootstrap/Image'
import { Container, Row, Col, Button } from 'react-bootstrap';

export default class Home extends React.Component {
    render() {
        return (
            <Container fluid >
                <Row>
                    <Col style={{ background: "rgb(48, 51, 50)" }} className="">
                        <h1>Sushant Maharjan</h1>
                        <h1>Intros</h1>

                        <Button variant="outline-success" className="rounded-pill p-1.5 w-10">
                            Download CV
                        </Button>
                    </Col>
                    <Col style={{ background: "rgb(48, 51, 50)" }} className="px-0">
                        <Image src="/images/h.jpg" fluid className="h-100"></Image>
                    </Col>
                </Row>
            </Container>
        )
    }

}