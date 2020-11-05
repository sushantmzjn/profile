import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class Service extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row><h1 style={{ background: "rgb(48, 51, 50)" }} className="p-2 w-100 m-0 text-center text-light">Services</h1></Row>
                <Row>
                    <Col style={{ background: "rgb(48, 51, 50)" }} className="">
                        <div className="card p-3 m-2 ">
                            <div class="card-body">
                                This is some text within a card body.
                             </div>
                        </div>

                    </Col>
                    <Col style={{ background: "rgb(48, 51, 50)" }} className="">
                        <div className="card p-3 m-2 ">
                            <div class="card-body">
                                This is some text within a card body.
                             </div>
                        </div>
                    </Col>
                    <Col style={{ background: "rgb(48, 51, 50)" }} className="">
                        <div className="card p-3 m-2 ">
                            <div class="card-body">
                                This is some text within a card body.
                             </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        )
    }

}
