import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'

export default class Resume extends React.Component {

    loadData = (data) => {
        var myResume = [];
        var key = 0;
        data.map((resm) => {

            myResume.push(
                // <Row className="text-light " style={{ background: "rgb(48, 10, 50)" }} key={key}>
                <Col lg={4} key={key} className="mb-4">
                    <Card className="w-100 py-4 text-light" style={{ background: "black" }}>
                        <Card.Body>
                            <Card.Title>{resm.date}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"> {resm.major}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted"> {resm.university}</Card.Subtitle>
                            <Card.Text>{resm.desc}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                // </Row>
            );
            key++;
        })
        return myResume;
    }
    render() {
        const {
            props,
        } = this;

        return <Container className="text-center p-0" style={{ background: "rgb(48, 51, 50)" }} fluid id="resume">
            <h1 style={{ background: "rgb(48, 51, 50)" }} className=" w-100 p-2 text-center text-warning">Resume</h1>

            <Row className="px-5">
                {props.data ? this.loadData(props.data) : ''}

            </Row>
        </Container >

    }
}