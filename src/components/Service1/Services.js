import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Sservice.css'
// import webpng from "../../images/web-design.png";
export default class Service extends React.Component {
    render() {
        return (
            <Container className="text-center" fluid>
                <Row><h1 style={{ background: "rgb(48, 51, 50)" }} className="p-2 w-100 m-0 text-center text-warning">Services</h1></Row>
                <Row style={{ background: "rgb(48, 51, 50)" }}>
                    <Col className="mr">
                        <div class="grid">
                            <figure class="effect-oscar">
                                <img src="https://static.pexels.com/photos/53040/pexels-photo-53040.jpeg" alt="img09" />
                                <figcaption>
                                    <h2>Warm <span>Oscar</span></h2>
                                    <p>Oscar is a decent man. He used to clean porches with pleasure.</p>

                                </figcaption>
                            </figure>
                        </div>
                    </Col>
                    <Col>
                        <div class="grid">
                            <figure class="effect-oscar">
                                <img src="https://static.pexels.com/photos/53040/pexels-photo-53040.jpeg" alt="img09" />
                                <figcaption>
                                    <h2>Warm <span>Oscar</span></h2>
                                    <p>Oscar is a decent man. He used to clean porches with pleasure.</p>

                                </figcaption>
                            </figure>

                        </div>
                    </Col>
                    <Col>
                        <div class="grid">
                            <figure class="effect-oscar">
                                <img src="https://static.pexels.com/photos/53040/pexels-photo-53040.jpeg" alt="img09" />
                                <figcaption>
                                    <h2>Warm <span>Oscar</span></h2>
                                    <p>Oscar is a decent man. He used to clean porches with pleasure.</p>

                                </figcaption>
                            </figure>

                        </div>
                    </Col>
                    <Col>
                        <div class="grid">
                            <figure class="effect-oscar">
                                <img src="https://static.pexels.com/photos/53040/pexels-photo-53040.jpeg" alt="img09" />
                                <figcaption>
                                    <h2>Warm <span>Oscar</span></h2>
                                    <p>Oscar is a decent man. He used to clean porches with pleasure.</p>

                                </figcaption>
                            </figure>

                        </div>
                    </Col>
                    <Col>
                        <div class="grid">
                            <figure class="effect-oscar">
                                <img src="https://static.pexels.com/photos/53040/pexels-photo-53040.jpeg" alt="img09" />
                                <figcaption>
                                    <h2>Warm <span>Oscar</span></h2>
                                    <p>Oscar is a decent man. He used to clean porches with pleasure.</p>

                                </figcaption>
                            </figure>

                        </div>
                    </Col>
                    <Col>
                        <div class="grid">
                            <figure class="effect-oscar">
                                <img src="https://static.pexels.com/photos/53040/pexels-photo-53040.jpeg" alt="img09" />

                                <figcaption>
                                    <h2>Warm <span>Oscar</span></h2>
                                    <p>Oscar is a decent man. He used to clean porches with pleasure.</p>
                                </figcaption>
                            </figure>

                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }

}
